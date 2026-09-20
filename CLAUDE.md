# CLAUDE.md

Context for AI assistants working in this repo. This repo is **public** — keep
personal contact details, credentials, and machine-specific absolute paths out
of this file.

## What this is

David Bao's portfolio site. Astro 6.x, fully static, no backend.
Deployed on Vercel, connected to this GitHub repo.

**Pushing `main` deploys to production.** There is no staging step:

```
edit → git push origin main → Vercel builds → live
```

So preview locally before pushing anything visual or structural.

## Commands

Requires **Node >= 22.12.0** (enforced by `package.json` `engines`).

```bash
npm install          # first time on a new machine
npm run dev          # local preview (default port 4321)
npm run build        # static output to dist/
```

`npm run dev` sometimes serves a stale `Layout.astro` stylesheet or stale
`projects.ts` — the browser gets CSS without the new rules. Restart the dev
server. **Before shipping, trust `npm run build` + grepping `dist/` over the
dev server.**

## Layout

```
src/data/projects.ts          all project content (the thing you edit most)
src/data/site.ts              site-wide config: name, email, links, resume URLs
src/layouts/Layout.astro      <head>, design tokens, global CSS, theme bootstrap
src/components/portfolio/     one file per homepage section
src/components/Icon.astro     Phosphor icons, imported ?raw
src/components/T.astro        bilingual text helper
src/pages/index.astro         homepage
src/pages/projects/[slug].astro   case study pages
public/gameplay/<id>.{mp4,jpg}    autoplay clips + posters (tracked in git)
```

Homepage order: Hero → Projects → Experience → About → Contact.

Projects section has two sibling blocks below the main grid, and their i18n
keys no longer match their labels:

| key | renders as | holds |
| --- | --- | --- |
| `otherWorkTitle` | "Design & tabletop" | CAMI, Picnic Panic! (no video) |
| `earlierWorkTitle` | "Other works" | anything with `archived: true` |

Changing either label means editing **both** `LanguageScript.astro` and
`ProjectsSection.astro`. Editing one and not the other is the usual bug.

## Bilingual (EN / ZH)

Three mechanisms, all driven by `LanguageScript.astro`:

1. `data-i18n="key"` → static UI strings from the dictionary in that file
2. `data-i18n-dual` + `data-en` / `data-zh` → project content from `projects.ts`
3. `data-i18n-href` + `data-href-en` / `data-href-zh` → links whose *target*
   differs per language (currently the two resume PDFs)

Language choice persists in `localStorage` under `site-lang`; theme under
`site-theme`. Default is EN + dark.

## Video convention

Every game project card autoplays a **self-hosted, silent, 720p/30fps MP4**
(`clip`), cut from user-supplied source footage. Most are 12s. The full video
lives on YouTube and only loads as an iframe **on click** (`youtubeId`).

**Never auto-embed YouTube.** The autoplay clip is always the local MP4.

## Design rules

These come from the user's installed taste skill and are hard constraints:

- No em dashes or en dashes in English copy (Chinese 破折号 is fine)
- At most one eyebrow label per three sections (currently only the hero has one)
- Hero holds at most 4 text elements; its heading stays under 3 lines
- No scroll hints, no decorative dots
- No Google Fonts `<link>` — Geist is self-hosted at `public/fonts/Geist-var.woff2`
- Don't hand-draw SVG; use `Icon.astro` (Phosphor)

Visual system: Geist throughout, zinc-black `#0b0b0d` + electric blue `#5b8def`.
Light theme overrides tokens under `html[data-theme="light"]`. 16px card radius,
pill buttons, no grain or vignette.

## Not in this repo

`.gitignore` deliberately excludes:

- `resume/` — resume source + PDFs, contains full contact details. The two
  PDFs under `public/` are the published copies and *are* tracked.
- `.claude/` — per-machine settings and permission allowlists
- `node_modules/`, `dist/`, `.astro/`, `.vercel/`

Claude's own project memory is stored outside the repo, keyed to the local
absolute path, so it does **not** travel between machines. That is why this
file exists — anything worth knowing on every machine belongs here, not in
memory.

## Working alongside other agents

The user sometimes runs a second agent (Codex) against this same repo. Before
editing, check `git worktree list` and `git status`. If another agent is
active, work on a branch in a separate worktree and merge with
`git merge --ff-only` after the user confirms, rather than editing `main`
in place.

## Known limits

- YouTube downloads via `yt-dlp` are IP-blocked from the user's home network,
  cookies included. Don't retry it. To self-host new footage, the user exports
  the original from YouTube Studio. Fetching thumbnails from `i.ytimg.com` works.
- Case study pages for some projects are still stubs. Glimmer is the most
  complete example to pattern new ones after.
