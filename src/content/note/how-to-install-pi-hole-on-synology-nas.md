---
title: "How to Install Pi-hole on Synology NAS"
publishDate: 2025-05-27 00:00:00
draft: true
---

If you already own a Synology NAS, deploying [Pi-hole](pi-hole) leverages hardware you already have. Most modern Synology NAS support Docker (now called Container Manager in DSM). This allows for a clean, isolated installation of Pi-hole. Updating and managing the Pi-hole container is generally straightforward.

Synology NSA are designed to be powered on 24/7 for file storage, backups, and other services. This makes them an ideal host for Pi-hole, which functions as a DNS sinkhole and needs to be constantly available to filter network traffic for all connected devices.

Pi-hole is a lightweight application with minimal CPU and RAM requirements, so it typically won't noticeably impact the performance of your NAS's primary functions. However, if your usage of NAS is a heavy one, and the tasks occasionally spike up CPU and RAM usage, you might want to consider putting Pi-hole on another device, like Raspberries Pi instead.

Once Pi-hole is set as the DNS server for your network (configured in your router), it blocks advertisements and tracking domains for *all* devices connected to your network without needing to install ad-blocking software on each individual client. It can also block domains known to serve malware, phishing sites, and other malicious content, adding an extra layer of security to your network.

Thought, my most usage for Pi-hole primarily is for the **DNS caching**. When the devices needs to resolve a domain name (e.g., `www.google.com`) into an IP address, it queries Pi-hole. For cached entries, the DNS response time is significantly faster because Pi-hole responds directly from its local cache rather than making a round trip to an external upstream DNS server (e.g., Google DNS, Cloudflare, etc.). Queries are resolved at the speed of my local network, which is much faster than querying servers across the internet. This reduce the initial delay when loading website and make surfing the web feel snappier.

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