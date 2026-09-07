FROM floryn90/hugo:ext-alpine

# git: needed for Hugo Modules and .GitInfo/.Lastmod (docs "last modified" dates).
# go: needed by Hugo Modules to fetch the Docsy theme.
# nodejs/npm: needed for postcss-cli/autoprefixer and the theme's npm
#   workspace (Bootstrap, Font Awesome SCSS sources) under packages/hugoautogen.
RUN apk add --no-cache git go nodejs npm curl && \
  git config --global --add safe.directory /src

# Dart Sass: Hugo no longer embeds a Sass compiler and shells out to it.
# Alpine has no dart-sass package; use the musl-linked upstream release.
ARG DART_SASS_VERSION=1.104.0
RUN set -eu; \
  case "$(uname -m)" in \
    x86_64) SASS_ARCH=x64 ;; \
    aarch64) SASS_ARCH=arm64 ;; \
    *) echo "unsupported architecture: $(uname -m)" >&2; exit 1 ;; \
  esac; \
  curl -sLO "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-${SASS_ARCH}-musl.tar.gz"; \
  tar -xf "dart-sass-${DART_SASS_VERSION}-linux-${SASS_ARCH}-musl.tar.gz" -C /usr/local/lib; \
  ln -s /usr/local/lib/dart-sass/sass /usr/local/bin/sass; \
  rm "dart-sass-${DART_SASS_VERSION}-linux-${SASS_ARCH}-musl.tar.gz"
