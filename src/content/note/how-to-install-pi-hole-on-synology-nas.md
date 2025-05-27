---
title: "How to Install Pi-hole on Synology NAS"
publishDate: 2025-05-27 00:00:00
draft: true
---

`docker-compose.yml` file:

```yaml
services:
  pihole:
    image: pihole/pihole:latest
    restart: unless-stopped
    network_mode: host
    cap_add:
      # See https://github.com/pi-hole/docker-pi-hole#note-on-capabilities
      # Required if you are using Pi-hole as your DHCP server, else not needed.
      - NET_ADMIN
      # Required if you are using Pi-hole as your NTP client to be able to set
      # the host's system time.
      - SYS_TIME
      # Optional, if Pi-hole should get some processing time.
      - SYS_NICE
    security_opt:
      - no-new-privileges: false
    ports:
      # DNS Ports.
      - "53:53/tcp"
      - "53:53/udp"
      # Default HTTP Port.
      - "${HTTP_PORT-80}:80/tcp"
      - "${HTTPS_PORT-443}:443/tcp"
      # Uncomment the line below if you are using Pi-hole as your DHCP server.
      # - "67:67/udp"
      # Uncomment the line below if you are using Pi-hole as your NTP server.
      # - "123:123/udp"
    environment:
      PIHOLE_UID: ${PUID}
      PIHOLE_GID: ${PGID}
      # Set the appropriate timezone for your location from
      # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      TZ: ${TZ}
      # Set a password to access the web interface.
      # Not setting one will result in a random password being assigned.
      FTLCONF_webserver_api_password: ${WEBSERVER_API_PASSWORD}
      # If using Docker's default `bridge` network setting the dns listening mode
      # should be set to 'all'.
      FTLCONF_dns_listening_mode: 'all'
    volumes:
      # For persisting Pi-hole's database and common configuration file.
      - '/volume1/docker/pihole:/etc/pihole:rw'
```

`.env` file:

```
PUID=1026
PGID=100
HTTP_PORT=8080
HTTPS_PORT=8443
TZ=Asia/Bangkok
WEBSERVER_API_PASSWORD=your-long-secret-password
```