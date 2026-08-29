# 2026-04-12: Pinned to nginx:stable-alpine3.21 instead of unpinned 'nginx'
# (Debian-based). The unpinned image pulled in 15 HIGH vulnerabilities from
# the full Debian userland (systemd, glibc, etc.) that a static-file server
# doesn't need. Alpine base cuts the vuln count drastically.
# nginx-unprivileged (2026-08-29): same nginx, but the master process runs
# as uid 101 from the start and listens on 8080 — no root phase, so the
# deployment can satisfy the `restricted` Pod Security Standard now enforced
# on the default namespace.
FROM nginxinc/nginx-unprivileged:stable-alpine3.21
COPY . /usr/share/nginx/html
