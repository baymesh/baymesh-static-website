# bayme.sh

Source for [bayme.sh](https://bayme.sh), the Meshtastic Bay Area Group website.

Built with [Hugo](https://gohugo.io) (extended) and the [Docsy](https://docsy.dev)
theme, consumed as a Hugo Module.

## Prerequisites

- **Hugo extended**, `0.160.1` or newer (CI builds with `0.165.0` — see
  `.github/workflows/gh-pages.yml`). Docsy's SCSS pipeline requires the
  *extended* variant.
- **Go** — required by Hugo Modules to fetch the Docsy theme. Version doesn't
  need to match anything specific; any recent Go toolchain works.
- **Node.js + npm** — for `autoprefixer`/`postcss-cli` and the theme's
  generated npm workspace (Bootstrap, Font Awesome SCSS sources) under
  `packages/hugoautogen`.
- **Dart Sass** (`sass` on `PATH`) — Hugo no longer embeds a Sass compiler;
  it shells out to Dart Sass to build the theme's SCSS. Install via your
  package manager, e.g. `brew install dart-sass`.
- **Git LFS** — images (`*.jpg`, `*.png`, `*.gif`) are stored via LFS per
  `.gitattributes`. Run `git lfs install` once, then clone/pull normally.

## Getting started

```bash
npm install        # installs postcss-cli/autoprefixer + the theme's npm workspace
npm run serve       # hugo server with live reload, at http://localhost:1313
```

Other useful scripts (see `package.json` for the full list):

```bash
npm run build              # local/dev build into public/
npm run build:preview      # minified preview build (used for PR/Netlify previews)
npm run build:production   # minified production build (what CI deploys)
npm run clean               # remove public/ and Hugo's resources/ cache
```

## Content

- `content/docs/` — documentation pages (shown with a "Last modified" date
  pulled from git history)
- `content/blog/` — news posts
- `content/map/`, `content/links/` — the Map & Data and Links pages
- `content/_index.md` — homepage

## Deployment

Pushes to `main` build and deploy automatically via
`.github/workflows/gh-pages.yml`:

1. Checkout (with full git history + LFS)
2. Build with Hugo + Dart Sass
3. Deploy `public/` to the `gh-pages` branch, served at bayme.sh (custom
   domain via `static/CNAME`)
4. Post a status message to Discord (`DISCORD_WEBHOOK_URL` repo secret)

Pull requests run the same build (steps 1–2) as a CI check, without
deploying.

## License

Apache-2.0 (per `package.json`).
