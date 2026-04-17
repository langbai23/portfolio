#!/bin/bash
# Install / uninstall the portfolio auto-push launchd agent.
# Usage:
#   ./scripts/install-auto-push.sh            # install + start
#   ./scripts/install-auto-push.sh uninstall  # stop + remove
#   ./scripts/install-auto-push.sh status     # show status

set -e

LABEL="com.langbai.portfolio-autopush"
SRC_PLIST="$(cd "$(dirname "$0")" && pwd)/${LABEL}.plist"
DEST_PLIST="$HOME/Library/LaunchAgents/${LABEL}.plist"
SCRIPT="$(cd "$(dirname "$0")" && pwd)/auto-push.sh"

case "${1:-install}" in
  install)
    chmod +x "$SCRIPT"
    mkdir -p "$HOME/Library/LaunchAgents"
    cp "$SRC_PLIST" "$DEST_PLIST"
    launchctl unload "$DEST_PLIST" 2>/dev/null || true
    launchctl load "$DEST_PLIST"
    echo "Installed. Agent '$LABEL' is running."
    echo "Log: ~/Library/Logs/portfolio-autopush/auto-push.log"
    ;;
  uninstall)
    if [ -f "$DEST_PLIST" ]; then
      launchctl unload "$DEST_PLIST" 2>/dev/null || true
      rm -f "$DEST_PLIST"
      echo "Uninstalled."
    else
      echo "Not installed."
    fi
    ;;
  status)
    if launchctl list | grep -q "$LABEL"; then
      echo "Running:"
      launchctl list | grep "$LABEL"
    else
      echo "Not running."
    fi
    ;;
  *)
    echo "Usage: $0 [install|uninstall|status]"; exit 1;;
esac
