---
name: Cloudflare Tunnel
dateCreated: 2025-06-11 15:49:00 +0700
---
## Pricing

Cloudflare Tunnel is **free to use**. It is available on all of Cloudflare's plans, including the $0/month Free plan.

For users on the free plan, there are typically no hard bandwidth limits for reasonable use, and you can run a high number of tunnels (the documentation mentions up to 100).

### Add-On Services

While the tunnel itself is free, costs can be incurred when you start using additional Cloudflare services to enhance or secure what you expose through the tunnel.

#### Cloudflare Access

If you want to add a robust authentication layer in front of the application you've exposed with Tunnel, you would use Cloudflare Access. Access allows you to enforce policies based on identity from providers like Google, GitHub, or Okta.

* **Free Tier:** Up to 50 users.
* **Paid Plans:** Start at US$3 per user per month for more advanced features.

#### Argo Smart Routing

This is a performance-enhancing add-on that routes your traffic over Cloudflare's optimized, private network instead of the public internet. While not required for Tunnel to function, it can improve speed and reliability.

* **Cost:** Starts at US$5 per month for the first gigabyte of traffic, with a per-gigabyte fee thereafter.

#### Advanced Security Features

The standard Cloudflare Free plan offers excellent DDoS mitigation and a basic Web Application Firewall (WAF). However, more advanced WAF rules, enhanced analytics, and prioritized support are part of the paid plans.

* **Pro Plan:** Starts at ~US$25 per month.
* **Business Plan:** Starts at ~US$250 per month.