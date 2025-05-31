---
title: "Pi-hole"
publishDate: 2025-05-27 00:00:00
draft: true
---

Pi-hole uses `pihole-FTL` (Faster Than Light), which includes a modified version of `dnsmasq`, a lightweight DNS forwarder and DHCP server, and its DNS caching capabilities are a core part of Pi-hole's functionality.

## How Pi-hole's DNS Caching Works

1. **First Query:** When a device on your network requests to resolve a domain name for the very first time (or the first time since the cache entry expired), Pi-hole doesn't know the IP address.

2. **Forwarding to Upstream DNS:** Pi-hole then forwards this request to its configured upstream DNS server(s) (e.g., Google, Cloudflare, Quad9, or your ISP's DNS server).

3. **Receiving the Response:** The upstream DNS server resolves the domain and sends the IP addres back to Pi-hole.

4. **Storing in Cache (Caching):** Before sending the IP address back to the requesting device, Pi-hole stores this domain-to-IP mapping in its local cache. This cache entry also includes a "Time To Live" (TTL) value, which is provided by the authoritative DNS server for that domain. The TTL dictates how long that record is considered valid and can be cached.

5. **Serving the Requesting Device:** Pi-hole then sends the IP address to the device that originally made the request.

6. **Subsequent Queries (Cache Hit):** Now, if another device on your network (or the same device) requests the *same domain name* while the entry is still valid in Pi-hole's cache (i.e., before its TTL expires), Pi-hole can immediately respond with the IP address from its cache. It doesn't need to go out to the upstream DNS server again.

## See also

* [How to Install Pi-hole on Synology NAS](how-to-install-pi-hole-on-synology-nas.md)