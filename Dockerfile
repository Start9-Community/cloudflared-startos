# CLOUDFLARED_IMAGE is passed in by the manifest; see UPDATING.md for the pin.
ARG CLOUDFLARED_IMAGE=cloudflare/cloudflared:latest

FROM $CLOUDFLARED_IMAGE AS cloudflared

# The upstream image is distroless: no shell, and a non-root default user. Both
# cf-login.sh and every SubContainer.exec need one, so only the binary is kept.
FROM debian:13-slim@sha256:f6b08b09a05725f9431502d3b5714f5c4576e82c1a84fa1debe0c24a7e0c3ec4

RUN \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
        ca-certificates && \
    apt-get autoclean && \
    rm -rf \
      /var/lib/apt/lists/* \
      /var/tmp/* \
      /tmp/*

COPY --chmod=0755 --from=cloudflared /usr/local/bin/cloudflared /usr/local/bin/cloudflared

COPY --chmod=0755 scripts/cf-login.sh /usr/local/bin/cf-login.sh
