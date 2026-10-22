#!/usr/bin/env bash
# Cloudflare Workers Builds entrypoint: fetch Hugo extended + Dart Sass, then build the site.
set -euo pipefail

HUGO_VERSION=0.165.0
SASS_VERSION=1.104.0
TOOLS="$PWD/.tools"

mkdir -p "$TOOLS"
curl -sSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz" | tar -xz -C "$TOOLS" hugo
curl -sSL "https://github.com/sass/dart-sass/releases/download/${SASS_VERSION}/dart-sass-${SASS_VERSION}-linux-x64.tar.gz" | tar -xz -C "$TOOLS"
export PATH="$TOOLS:$TOOLS/dart-sass:$PATH"

npm install postcss-cli
npm run build:production
