---
name: "Bitwarden"
dateCreated: 2025-06-09 00:34:00 +0700
tags:
  - "App"
---

[Bitwarden](https://bitwarden.com/) is a zero knowledge encryption solution, meaning user are the only party with access to their key and the ability to decrypt the vault data.

> Bitwarden takes extreme measures to ensure that its websites, applications, and cloud servers are secure. Bitwarden uses Microsoft Azure managed services to manage server infrastructure and security rather than doing so directly.[^1]

In the mobile apps, Firebase Cloud Messaging is used for push notifications related to sync. Microsoft Visual Studio App Center is used for crash reporting on a range of mobile devices. In the web vault, Stripe and PayPal scripts are used for payment processing.[^2]

Excerpt from Bitwarden's Help Center's ["What encryption is used"](https://bitwarden.com/help/security-faqs/#q-what-third-party-services-libraries-or-identifiers-are-used-in-my-bitwarden-account):

> AES-CBC (cipher block chaining), used to encrypt vault data, is a standard in cryptography and used by the US government and other government agencies around the world for protecting top-secret data. With proper implementation and a strong encryption key (your master password), AES is considered unbreakable.
>
> PBKDF2 SHA-256 is used to derive the encryption key from your master password, however you may choose Argon2 as an alternative. Bitwarden salts and hashes your master password with your email address *locally*, before transmission to our servers. Once a Bitwarden server receives the hashed password, it is salted again with a cryptographically secure random value, hased again, and stored in our database.
>
> The default iteration count used with PBKDF2 is 600,001 iterations on the client (client-side iteration count is configurable from your account settings), and then an additional 100,000 iterations when stored on our servers (for a total of 700,001 iterations by default). The organization key is sahred via RSA-2048.
>
> The utilized hash functions are one-way hashes, meaning they *cannot be reverse engineered* by anyone at Bitwarden to reveal your master password. Even if Bitwarden were to be hacked, there would be no method by which your master password could be obtained.[^3]

## Secure Notes

A Bitwarden secure note allows you to store sensitive information like software license keys, social security details, bank information, and other unstructured data that requires high security. Secure notes can be created in the Bitwarden web vault, desktop, and mobile apps and can include custom fields, attachments, and access controls.

[^1]: ["What happens if Bitwarden gets hacked?"](https://bitwarden.com/help/security-faqs/#q-what-happens-if-bitwarden-gets-hacked) *Security FAQs — Bitwarden Help Center*. [Archived](https://web.archive.org/web/20240601171649/https://bitwarden.com/help/security-faqs/#q-what-happens-if-bitwarden-gets-hacked) from the original on June 1, 2024. Retrieved on February 15 2024.

[^2]: ["What third-party services, libraries or identifiers are used in my Bitwarden account?"](https://bitwarden.com/help/security-faqs/#q-what-third-party-services-libraries-or-identifiers-are-used-in-my-bitwarden-account) *Security FAQs — Bitwarden Help Center*. [Archived](https://web.archive.org/web/20240601171649/https://bitwarden.com/help/security-faqs/#q-what-third-party-services-libraries-or-identifiers-are-used-in-my-bitwarden-account) from the original on June 1, 2024. Retrieved on February 15, 2024.

[^3]: ["Encryption"](https://bitwarden.com/help/what-encryption-is-used/) *Bitwarden Help Center*. [Archived](https://web.archive.org/web/20240601172501/https://bitwarden.com/help/what-encryption-is-used/) from the original on June 1, 2024. Retrieved on February 15, 2024.