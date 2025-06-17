---
name: "Karakeep"
dateCreated: 2025-06-10 22:08:00 +0700
---

Karakeep (previously known as "Hoarder") is an open-source "bookmark-everything" tool that allows users to save and organize links, notes, and images in a centralized, self-hosted environment.

## Key Features

* **Comprehensive Bookmarking:** Save not just web links, but also jot down notes and store images.

* **AI-Powered Organization:** Utilizes artificial intelligence for automatic tagging of your saved items, simplifying the process of organization.

* **Full-Text Search:** A powerful search function allows users to find what they're looking for across the entire content of their saved items.

* **Browser Integration:** Karakeep offers extensions for popular web browsers, enabling users to quickly save content as they browse the internet.

* **Cross-Platform Accessibility:** The platform is accessible through its web interface and dedicated mobile apps.

## Installation

### On Synology NAS using Portainer

`docker-compose.yml`:

```yaml
services:
  web:
    image: ghcr.io/karakeep-app/karakeep:${KARAKEEP_VERSION:-release}
    restart: unless-stopped
    ports:
      - 3000:3000
    volumes:
      - /volume1/docker/karakeep/data:/data
    env_file:
      - stack.env
    environment:
      MEILI_ADDR: http://meilisearch:7700
      BROWSER_WEB_URL: http://chrome:9222

      # You almost never want to change the value of the DATA_DIR variable.
      # If you want to mount a custom directory, change the volume mapping above instead.
      DATA_DIR: /data # DON'T CHANGE THIS
  chrome:
    image: gcr.io/zenika-hub/alpine-chrome:123
    restart: unless-stopped
    command:
      - --no-sandbox
      - --disable-gpu
      - --disable-dev-shm-usage
      - --remote-debugging-address=0.0.0.0
      - --remote-debugging-port=9222
      - --hide-scrollbars
  meilisearch:
    image: getmeili/meilisearch:v1.13.3
    restart: unless-stopped
    volumes:
      - /volume1/docker/karakeep/meilisearch:/meili_data
    env_file:
      - stack.env
    environment:
      MEILI_NO_ANALYTICS: "true"
```

`stack.env`:

```
KARAKEEP_VERSION=release
NEXTAUTH_SECRET=super_random_string
MEILI_MASTER_KEY=another_random_string
NEXTAUTH_URL=http://localhost:3000
```

You **should** change the `super_random_string` and `another_random_string` to your own secret keys. You can use `openssl rand -base64 36` in a Terminal to generate the random strings. You should also change the `NEXTAUTH_URL` variable to point to your server address.

Add `DISABLE_SIGNUPS=true` to disable new signups.

## See also

* [Shiori](shiori.md)