# 2026-04-12: Pinned to nginx:stable-alpine3.21 instead of unpinned 'nginx'
# (Debian-based). The unpinned image pulled in 15 HIGH vulnerabilities from
# the full Debian userland (systemd, glibc, etc.) that a static-file server
# doesn't need. Alpine base cuts the vuln count drastically.
FROM nginx:stable-alpine3.21
COPY . /usr/share/nginx/html
