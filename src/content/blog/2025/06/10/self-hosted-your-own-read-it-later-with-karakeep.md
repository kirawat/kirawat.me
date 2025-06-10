---
name: "Self-Hosted Your Own Read-It-Later with Karakeep"
author: "Kirawat Sahasewiyon"
dateCreated: 2025-06-10 14:14:00 +0700
---

A read-it-later service is a digital tool designed to help you save online content—such as articles, blog posts, and webpages—to be consumed at a more convenient time. Think of it as a sophisticated bookmarking system that not only saves the link but also downloads and reformats the content for an optimized and distraction-free reading experience.

The core principle behind these services is to separate the discovery of content from the act of reading it. This allows you to browse the internet, and when you encounter something interesting but don't have the time or focus to read it immediately, you can save it to your personal queue.

I have been Pocker user since the beginning of the service. Mozilla which acquired Pocket back in 2017, has [announced it will be shutting down the service](https://support.mozilla.org/en-US/kb/future-of-pocket) on July 8, 2025.[^1] With the service I'm using [heading toward the sunset](https://getpocket.com/farewell)[^2], I have managed to export the data I've collected over the years before it gets deleted on October 8, 2025, and am now in search of a new service to rely on.

I first found [Shiori](https://github.com/go-shiori/shiori). While it does many of the things I'm looking for in a read-it-later service, it doesn't feel as polished to use. Then, I stumbled upon [Karakeep](https://karakeep.app/), which was formerly known as Hoarder. I found its user interface to be more to my liking. It has native mobile applications for both Android and iOS, plus it can uses AI to assign tags and summarize articles right from the application itself.

Since I have Synology NAS at home, I decided to self-hosted the service on there for simplicity.

## How to install Karakeep on Synology NAS

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

To setup AI for automatic tagging (which is optional), you will need to sign up for the OpenAI API Platform. Please be aware that using this feature will incur costs.

According to the [documentation](https://docs.karakeep.app/openai/): For text tagging, it use `gpt-4.1-mini` model. Cost per inference varies depending on the content size per article. Though, roughly, you'll be able to generate tags for almost 3000+ bookmarks for less than US$1. For image uploads, `gpt-4o-mini` model is use for extracting tags from the image. To lower the costs, Karakeep using the low resolution mode (fixed number of tokens regardless of image size). You'll be able to run inference for 1000+ images for less than a US$1.[^3]

Karakeep also [support different AI providers](https://docs.karakeep.app/Guides/different-ai-providers/) such as Ollama, Gemini, Perplexity, etc., if you so choose.

You can skip using AI altogether if you don't want to spend money, or don't need the AI features.

Add the OpenAI API key to the environment variables (`stack.env`):

```
OPENAI_API_KEY=your_api_key
```

If you are the only user, it is recommended that you add `DISABLE_SIGNUPS=true` to your environment variables (`stack.env`) after creating your account on your self-hosted Karakeep to prevent unauthorized sign-ups.

## External Links

* [Karakeep on GitHub](https://github.com/karakeep-app/karakeep)

[^1]: Mozilla Suport (2025). ["Pocket is saying goodbye - What you need to know"](https://support.mozilla.org/en-US/kb/future-of-pocket). [Archived](https://web.archive.org/web/20250607003045/https://support.mozilla.org/en-US/kb/future-of-pocket) from the original on June 10, 2025.

[^2]: Pocket (2025). ["So long, farewell, Auf Wiedersehen..."](https://getpocket.com/farewell). [Archived](https://web.archive.org/web/20250606223947/https://getpocket.com/farewell) from the original on June 10, 2025.

[^3]: Karakeep Docs. ["OpenAI Costs"](https://docs.karakeep.app/openai/). 
[Archived](https://web.archive.org/web/20250604151357/https://docs.karakeep.app/openai/) from the original on June 10, 2025. Retrieved on June 10, 2025.