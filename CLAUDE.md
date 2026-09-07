# CLAUDE.md

Project-specific notes for working on this repo. See `README.md` for basic
setup/build commands.

## Stack

Hugo (extended) + [Docsy](https://docsy.dev) theme, consumed as a Hugo
Module. Docsy's SCSS pipeline needs Dart Sass (`sass` on `PATH`) — Hugo
dropped embedded LibSass. Node/npm is only for `postcss-cli`/`autoprefixer`
and the theme's own generated npm workspace (Bootstrap, Font Awesome).

## Docsy is imported as `docsy/theme`, not `docsy`

Since Docsy v0.11-ish, the actual theme layouts/assets live in a **nested Go
module** at `github.com/google/docsy/theme`, not the repo root
(`github.com/google/docsy`) — the root now only holds Docsy's own docs site
and tooling. `hugo.yaml`'s `module.imports` and `go.mod` must reference the
`/theme` path. Update the theme with:

```bash
hugo mod get -u github.com/google/docsy/theme
hugo mod tidy
hugo mod npm pack   # regenerates packages/hugoautogen/ — commit it
npm install
```

`packages/hugoautogen/` (npm deps the theme's SCSS needs, e.g. Bootstrap) is
committed, matching upstream `docsy-example`'s own practice. Don't gitignore
it.

## Known landmines from the 0.127→0.165 / Docsy 0.10→0.17 upgrade

- **Render hooks moved.** `_default/_markup/render-heading.html` →
  top-level `_markup/render-heading.html`. Ours just delegates:
  `{{ partial "td/render-heading.html" . }}`. If a future Hugo bump breaks
  markdown rendering, check for renamed/relocated theme partials the same
  way (grep the theme module cache under
  `~/Library/Caches/hugo_cache/modules/filecache/...`).
- **Favicons are no longer auto-generated.** Old Docsy generated a full
  favicon set from `assets/icons/logo.svg` at build time. The current
  theme's `favicons.html` partial just links whichever conventionally-named
  files already exist in `static/` (`favicon.svg`, `favicon.ico`,
  `apple-touch-icon.png`, `favicon-NxN.png`, ...). Only `favicon.svg` is
  present today (copied from `assets/icons/logo-x.svg`, the square mark —
  `logo.svg` is the wide wordmark, wrong aspect ratio for a favicon).
  Raster sizes (apple-touch-icon, PWA icons) were not regenerated.
- **Docsy dropped its branded default color palette.** Old defaults:
  `$primary: #30638e` (teal), `$secondary: #ffa630` (orange),
  `$info: #c0e0de` (mint). None of these were ever set in this project's own
  `assets/scss/_variables_project.scss` — they came from the theme. The
  current theme defines none of them, so anything not given an explicit
  `color=` falls through to stock Bootstrap colors (`$primary: #0d6efd`,
  `$info: #0dcaf0`, etc). This silently changed homepage block colors after
  the upgrade (fixed by setting explicit `color=` on each
  `blocks/section`/`blocks/link-down` in `content/_index.md` instead of
  relying on Docsy's ordinal auto-pick, which is fragile — its counter is
  shared with `blocks/cover` and shifts if blocks are added/removed).
- **`.git` must survive through the Build step.** `enableGitInfo: true` in
  `hugo.yaml` drives the docs "Last modified" feature
  (`layouts/partials/page-meta-lastmod.html`, scoped to `.Section == "docs"`
  only). `.github/workflows/gh-pages.yml`'s "❌ Turn off LFS" step does
  `rm -Rf .git` — it must run **after** Build, not before, or Hugo errors
  with `Failed to read Git log: fatal: not a git repository`.
- **`hugo-extended` npm package is intentionally *not* a dependency.** It
  used to provide the `hugo` binary for local dev/Netlify, but its
  installer (`careful-downloader` → `decompress`) has unpatched critical
  CVEs. CI never needed it (GitHub Pages installs Hugo independently via
  `peaceiris/actions-hugo`), so it was removed rather than worked around.
  Local dev requires a system-installed Hugo (see README prerequisites).

## Git LFS + GitHub auth gotcha

If `git push` or `git lfs push` fails with `{"auth_status":"bad_permissions","body":"Repository not found."}`
even though SSH auth works fine for the plain git protocol, check two
things:
1. `git remote -v` — the URL must end in `.git`
   (`https://github.com/OWNER/REPO.git`). Git LFS's batch API is always
   HTTPS regardless of the git transport, and a missing `.git` suffix
   breaks its endpoint construction even when `git push` itself works via
   an SSH `pushInsteadOf` rewrite. Fix: `git remote set-url origin
   https://github.com/OWNER/REPO.git`.
2. An HTTPS credential for `github.com` must be resolvable (`git credential
   fill` with `protocol=https\nhost=github.com`). If nothing's configured
   and `gh` is authenticated, `gh auth setup-git` wires `gh` in as the
   credential helper.

To check whether tracked files that should be LFS pointers actually aren't
(e.g. committed before `.gitattributes` covered their extension):
`git lfs fsck --pointers`. Fix in place (no history rewrite) with
`git add --renormalize <path>`.

## CI

`.github/workflows/gh-pages.yml` runs on push to `main` (build + deploy) and
on `pull_request` (build only, `Deploy`/`Notify Discord` steps are gated
off). It posts a Discord embed (`DISCORD_WEBHOOK_URL` repo secret) after
every push-triggered run, success or failure.

`netlify.toml` and `docker-compose.yaml`/`Dockerfile` also exist in this
repo but GitHub Pages (custom domain via `static/CNAME`) is the live
deployment — treat the others as unverified/possibly stale unless you
confirm otherwise.
