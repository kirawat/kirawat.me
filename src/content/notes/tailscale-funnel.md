---
name: Tailscale Funnel
dateCreated: 2025-06-11 15:48:00 +0700
---
## Tailscale Funnel

Tailscale Funnel is a powerful feature that allows you to securely expose a local web service or application running on a device within your private Tailscale network (a "tailnet") to the public internet. In essence, it creates a secure tunnel from the internet to a specific port on your local machine, making it accessible to anyone with a unique, publicly shareable URL, even if they don't have Tailscale installed.

This functionality is particularly useful for a variety of scenarios, from needing to share a work-inprogress with a client to individuals wanting to temporarily host a file or a personal project without the complexities of traditional port forwarding and firewall configurations.

### How It Works

At it core, Tailscale Funnel works by leveraging Tailscale's existing secure networking capabilities. When you enable Funnel for a local service, the following happens:

1. **Public URL Generation:** Tailscale provides a unique and stable public DNS name for your device (e.g., `your-device-name.your-tailnet.ts.net`).

2. **Encrypted Tunneling:** When a user access this URL, their request is routed through Tailscale's relay servers. These servers then establish an end-to-end encrypted WireGuard® tunnel to the Tailscale client running on your local device.

3. **Local Proxying:** The Tailscale client on your machine receives the encrypted traffic and securely forwards it to the specified local port where your application is running.

Your device's direct IP address is never exposed to the public internet. All traffic is routed through Tailscale's infrastructure, ensuring a high level of security and privacy. Tailscale also automatically handles the provisioning and renewal of TSL certificates for your public URL, enabling secure HTTPS connections out of the box.

### Use Cases

* **Development and Collaboration:** Developers can instantly share a local development server with colleagues or clients for feedback and testing, eliminating the need to deploy to a staging environment for every minor change.
* **Webhook Testing:** Funnel simplifies the process of testing webhooks from services like GitHub or Stripe. You can provide your public Funnel URL to the service and receive webhook payloads directly on your local development machine.
* **Temporary File Sharing:** Easily and securely share files or even entire directories from your computer with a simple command, bypassing the need for third-party file-sharing services.
* **Self-Hosting Personal Projects:** Host small personal websites, blogs, or applications on a home server or even a Raspberry Pi without the security risks and setup overhead of traditional self-hosting.
* **Simplified Remote Access:** In some cases, Funnel can provide a quick way to access a web-based interface on a remote machine in your tailnet without needing to directly connect to the Tailscale network.

### Limitations and Considerations

* **Port Restrictions:** Funnel can only be used on specific ports: `443`, `8443`, and `10000`.
* **TLS Terminations:** Funnel is designed for TLS-encrypted traffic (HTTPS).
* **Bandwidth Limits:** There are non-configurable bandwidth limits on traffic routed through the Funnel.
* **Beta Status:** As of now, Tailscale Funnel is still considered a beta feature, which means its functionality could change in the future.

### How is it compare to Cloudflare Tunnel?

#### Security Model

The most significant distinction lies in their security models and how they handle your traffic:

**Tailscale Funnel** prioritizes privacy through end-to-end encryption. It uses the underlying WireGuard® protocol of your tailnet to create a direct, encrypted tunnel from the public internet to your local device. Tailscale's servers relay the encrypted traffic but cannot inspect its contents. This is a true "zero trust" model from the perspective of the provider.

**Cloudflare Tunnel** operates on an "ingress-as-a-service" model. The `cloudflared` daemon on your local machine creates an outbound-only connection to Cloudflare's global network. When a user requests your domain, the traffic hits Cloudflare's edge first. Here, Cloudflare decrypts the traffic to apply its security services like the Web Application Firewall (WAF), DDoS mitigation, and access control policies before forwarding it through the secure tunnel to your local server. While this "main-in-the-middle" approach is essential for providing these advanced security features, it means you are placing trust in Cloudflare to handle your unencrypted traffic securely.

#### Features and Capabilities

Cloudflare, being a mature, production-focused platform, offers a more extensive feature set. It allows you to use your own custom domains, which is essential for any public-facing production service. Its integration with Cloudflare Access provides a powerful way to put an authentication layer in front of any application, supporting identity providers like Google or GitHub.

It is a production-grade service designed for high availability. It can be configured for load balancing and high availability by running multiple `cloudflared` instances for the same tunnel.

#### Ease of Use

For pure simplicity in getting a local port onto the internet for a quick test, Tailscale Funnel is easier. If you are already running Tailscale, it's a single command (`tailscale funnel <port>`) to get a shareable public URL. Cloudflare's setup is also straightforward but involves a few more steps.

#### Which One Should You Use?

Choose Tailscale Funnel if:
* You need to quickly and temporarily share a local development server for feedback.
* You are testing webhooks from a service like Stripe or GitHub.
* You prioritize absolute end-to-end encryption where not even the provider can see your traffic.
* You are already heavily invested in the Tailscale ecosystem for your private networking.
* You are sharing with a trusted audience where a public, unguessable URL is sufficient security.

Choose Cloudflare Tunnel if:
* You are hosting a publilc website or a production application.
* You need to use your own custom domain name.
* You require robust security features like DDoS protection, a WAF, and bot mitigation.
* You want to place a strong authentication and authorization layer in front of your self-hosted application.
* You can benefit from the performance gains of Cloudflare's global CDN and caching.