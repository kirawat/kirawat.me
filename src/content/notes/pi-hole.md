---
title: "Pi-hole"
publishDate: 2025-05-27 00:00:00 +0700
modifiedDate: 2025-05-27 00:00:00 +0700
draft: true
---

Pi-hole uses `pihole-FTL` (Faster Than Light), which includes a modified version of `dnsmasq`, a lightweight DNS forwarder and DHCP server, and its DNS caching capabilities are a core part of Pi-hole's functionality.

## Installation

### Synology NAS

If you already own a Synology NAS, deploying [Pi-hole](pi-hole) leverages hardware you already have. Most modern Synology NAS support Docker (now called Container Manager in DSM). This allows for a clean, isolated installation of Pi-hole. Updating and managing the Pi-hole container is generally straightforward.

Synology NSA are designed to be powered on 24/7 for file storage, backups, and other services. This makes them an ideal host for Pi-hole, which functions as a DNS sinkhole and needs to be constantly available to filter network traffic for all connected devices.

Pi-hole is a lightweight application with minimal CPU and RAM requirements, so it typically won't noticeably impact the performance of your NAS's primary functions. However, if your usage of NAS is a heavy one, and the tasks occasionally spike up CPU and RAM usage, you might want to consider putting Pi-hole on another device, like Raspberry Pi instead.

Once Pi-hole is set as the DNS server for your network (configured in your router), it blocks advertisements and tracking domains for *all* devices connected to your network without needing to install ad-blocking software on each individual client. It can also block domains known to serve malware, phishing sites, and other malicious content, adding an extra layer of security to your network.

Thought, my most usage for Pi-hole primarily is for the **DNS caching**. When the devices needs to resolve a domain name (e.g., `www.google.com`) into an IP address, it queries Pi-hole. For cached entries, the DNS response time is significantly faster because Pi-hole responds directly from its local cache rather than making a round trip to an external upstream DNS server (e.g., Google DNS, Cloudflare, etc.). Queries are resolved at the speed of my local network, which is much faster than querying servers across the internet. This reduce the initial delay when loading website and make surfing the web feel snappier.

`docker-compose.yml` file:

```yaml
services:
  pihole:
    container_name: pihole
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
      - "no-new-privileges:false"
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
      # List of ports for the webserver to be listen on.
      FTLCONF_webserver_port: "${HTTP_PORT-80}o,${HTTPS_PORT-443}os,[::]:${HTTP_PORT-80}o,[::]:${HTTPS_PORT-443os}os"
      # Set upstream DNS to Cloudflare.
      FTLCONF_dns_upstreams: "1.1.1.1;1.0.0.1;2606:4700:4700::1111;2606:4700:4700::1001"
      # If using Docker's default `bridge` network setting the dns listening mode
      # should be set to 'all'.
      FTLCONF_dns_listeningMode: "ALL"
      # Disable NTP server.
      FTLCONF_ntp_ipv4_active: false
      FTLCONF_ntp_ipv6_active: false
    volumes:
      # For persisting Pi-hole's database and common configuration file.
      - /volume1/docker/pihole:/etc/pihole:rw
```

`.env` file:

```
PUID=1026
PGID=101
TZ=Asia/Bangkok
HTTP_PORT=8080
HTTPS_PORT=8443
WEBSERVER_API_PASSWORD=your-long-secret-password
```

## Recommended Block Lists

* [Multi PRO](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.txt) - General protection. Blocks ads, affiliate, tracking, metrics, telemetry, phishing, malware, scam, fake, crytojacking, etc.

* [Threat Intelligence Feeds](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/tif.txt) - Increase security. A blocklist for blocking Malware, Cryptojacking, Scam, Spam and Phishing. Blocks domains known to spread malware, launch phishing attacks and host command-and-control servers.

* [Fake](https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/fake.txt) - A blocklist for blocking fake stores, streaming, rip-offs, cost traps and co.

## How Pi-hole's DNS Caching Works

1. **First Query:** When a device on your network requests to resolve a domain name for the very first time (or the first time since the cache entry expired), Pi-hole doesn't know the IP address.

2. **Forwarding to Upstream DNS:** Pi-hole then forwards this request to its configured upstream DNS server(s) (e.g., Google, Cloudflare, Quad9, or your ISP's DNS server).

3. **Receiving the Response:** The upstream DNS server resolves the domain and sends the IP addres back to Pi-hole.

4. **Storing in Cache (Caching):** Before sending the IP address back to the requesting device, Pi-hole stores this domain-to-IP mapping in its local cache. This cache entry also includes a "Time To Live" (TTL) value, which is provided by the authoritative DNS server for that domain. The TTL dictates how long that record is considered valid and can be cached.

5. **Serving the Requesting Device:** Pi-hole then sends the IP address to the device that originally made the request.

6. **Subsequent Queries (Cache Hit):** Now, if another device on your network (or the same device) requests the *same domain name* while the entry is still valid in Pi-hole's cache (i.e., before its TTL expires), Pi-hole can immediately respond with the IP address from its cache. It doesn't need to go out to the upstream DNS server again.

## Troubleshooting

**Error in NTP server:<br>Cannot bind to IPv6 address 0.0.0.0:123 (Address in use), IPv4 NTP server not available**

**Error in NTP server:<br>Cannot bind to IPv6 address :::123 (Address in use), IPv6 NTP server not available**

Pi-hole is trying to act as a NTP (Network Time Sync) server, but cannot bind to IPv4/IPv6 addresses. It is set as "Enabled" by default.

If you're not using Pi-hole as NTP server, you can disable the NTP under **Settings** -> **All settings** -> **Network Time Sync**. Disable "npt.ip4.active" and "npt.ipv6.active".

---

**pihole.log: failed to create listening socket for port 53: Address in use**

This indicates that another service is using port 53, which is the standard port for DNS. This prevents Pi-hole's DNS service from starting.

If you're using Pi-hole on Synology NAS, make sure to **uninstall DNS Server package**, then restart Pi-hole.

## External Links

* [Website](https://pi-hole.net/)
* [GitHub](https://github.com/pi-hole)
* [DNS Blocklists](https://github.com/hagezi/dns-blocklists)
