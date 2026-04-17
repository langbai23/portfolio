#!/bin/bash
# Auto commit & push to GitHub whenever files change.
# Polls git status every POLL_INTERVAL seconds. Zero external deps.

set -u

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR" || exit 1

POLL_INTERVAL="${POLL_INTERVAL:-5}"          # seconds between checks
QUIET_PERIOD="${QUIET_PERIOD:-3}"            # wait this long after last change before committing
BRANCH="$(git symbolic-ref --short HEAD 2>/dev/null || echo main)"
LOG_DIR="$HOME/Library/Logs/portfolio-autopush"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/auto-push.log"

export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

log "auto-push started in $REPO_DIR (branch: $BRANCH, poll: ${POLL_INTERVAL}s)"

last_status=""
stable_count=0

while true; do
  # Produce a fingerprint of what's dirty. If it's the same for 2 ticks in a row
  # (no new edits during the quiet period), go ahead and commit.
  current_status="$(git status --porcelain 2>/dev/null)"

  if [ -z "$current_status" ]; then
    # Working tree clean. Still try to push any local commits (e.g. from IDE).
    if [ -n "$(git log --branches --not --remotes 2>/dev/null)" ]; then
      log "pushing existing local commits..."
      git push origin "$BRANCH" >>"$LOG_FILE" 2>&1 && log "push ok" || log "push failed"
    fi
    last_status=""
    stable_count=0
    sleep "$POLL_INTERVAL"
    continue
  fi

  if [ "$current_status" = "$last_status" ]; then
    stable_count=$((stable_count + 1))
  else
    stable_count=0
  fi

  # Wait until changes have been stable for at least QUIET_PERIOD worth of polls
  # to avoid committing mid-save.
  needed=$(( QUIET_PERIOD / POLL_INTERVAL ))
  [ "$needed" -lt 1 ] && needed=1

  if [ "$stable_count" -ge "$needed" ]; then
    changed_files="$(echo "$current_status" | awk '{print $2}' | head -5 | tr '\n' ' ')"
    msg="auto: update ($(date '+%Y-%m-%d %H:%M:%S')) ${changed_files}"
    log "committing: $msg"
    git add -A >>"$LOG_FILE" 2>&1
    if git commit -m "$msg" >>"$LOG_FILE" 2>&1; then
      log "commit ok, pushing..."
      git push origin "$BRANCH" >>"$LOG_FILE" 2>&1 && log "push ok" || log "push failed (will retry next cycle)"
    else
      log "nothing to commit (maybe all ignored)"
    fi
    last_status=""
    stable_count=0
  else
    last_status="$current_status"
  fi

  sleep "$POLL_INTERVAL"
done
