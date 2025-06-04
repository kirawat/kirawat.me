---
title: "Tor Network"
publishDate: 2025-06-04 12:01:00 +0700
modifiedDate: 2025-06-04 12:01:00 +0700
---

## Avoid using VPN and Tor Together

Excerpt from ["Why using a VPN and Tor together can backfire on your privacy"](https://www.pcworld.com/article/2791638/why-you-should-not-use-a-vpn-together-with-the-tor-network.html)[^1]:

> VPN over Tor and Tor over VPN are different setups, both with risks. VPN over Tor is complex and weakens Tor's privary. Tor over VPN means trusting the VPN. It's usually better to just use one—Tor or a VPN, not both.

> Connections from VPN servers to the Tor network stand out from regular Internet traffic, drawing close attention from surveillance authorities. Even when VPN and Tor encryption are used together, these connections remain conspicuous. Advanced techniques like deep packet inspection can detect and classify VPN data streams despite encryption. Additionally, website fingerprinting attacks can analyze traffic patterns to infer which sites have been visited, meaning VPNs do not provide complete anonymity or camouflage.

> The VPN provider can see your original IP address and knows you're connecting to Tor. If the provider keeps logs or comes under pressure, your identity could be exposed.
>
> This risk is especially significant when VPNs store personal data like email addresses or payment information, details often required during registration, which makes tracing you easier.

> There are a few exceptional cases in which a combination can be useful. In countries with strong internet censorship in whcih the Tor network is blocked (like China or Iran), a VPN can help to establish a connection. However, in these cases, the VPN provider would have to be absolutely trustworthy and not keep any logs.

[^1]: Joos, Thomas (June 3, 2025). ["Why using a VPN and Tor together can backfire on your privacy"](https://www.pcworld.com/article/2791638/why-you-should-not-use-a-vpn-together-with-the-tor-network.html) *PCWorld*. Retrieved on June 4, 2025.