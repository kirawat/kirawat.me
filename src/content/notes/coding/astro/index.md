---
title: "Astro Web Framework"
publishDate: 2025-05-31 00:00:00 +0700
modifiedDate: 2025-06-01 13:26:00 +0700
draft: true
tags:
  - "Web Development"
---

Astro is an open-source web framework designed for building websites.

## Key Features

### Server-First Approach

Astro leverages server-side rendering (SSR) or static site generation (SSG) to generate HTML on the server. This reduces the amount of work the client's browser has to do, leading to faster perceived performance and better SEO.

### Framework Agnostic

You can use your preferred UI frameworks like React, Vue, Svelte, SolidJS, Preact, AlpineJS, or even plain HTML and vanilla JavaScript within an Astro project. Astro allows you to mix and match components from different frameworks on the same page.

### Island Architecture

Island Architecture allows you to create "islands" of interactivity on an otherwise static HTML page. These islands are individual UI components, wriiten in other framework like React, Vuew, Svelte, etc., that load their JavaScript independently, only when they become visible or a user interacts with them. This prevents large JavaScript bundles from slowing down the initial page load.

## Inline Stylesheet on Build

Astro prioritizes speed. By default, it inlines CSS within your HTML to reduce the number of files the browser needs to download. This leads to faster initial page loads.

> When Astro builds your site for production deployment, it minifies and combines your CSS into chunks. Each page on your site gets its own chunk, and additionally, CSS that is shared between multiple pages is further split off into their own chunks for reuse.
> 
> However, when you have several pages sharing styles, some shared chunks can become really small. If all of them were sent separately, it would lead to many stylesheets requests and affect site performance. Therefore, by default Astro will link only those in your HTML above 4kB in size as `<link rel="stylesheet">` tags, while inlining smaller ones into `<style type="text/css">`. This approach provides a balance between the number of additional requests and the volume of CSS that can be cached between pages.

During development (`npm run dev`), you might see separate CSS files to make debugging and live-reloading easier. However, the production build (`npm run build`) typically inlines styles for optimal performance.

While inlining is the default, Astro does allow you to generate separate CSS files if needed. You can configure this in your `astro.config.mjs` file:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    inlineStylesheet: 'never', // This will always generate separate CSS files.
  },
});
```

See: [Bundle control](https://docs.astro.build/en/guides/styling/#bundle-control)

## Troubleshooting

**Hot Reload not working when run on WSL (Windows Subsystem for Linux)**

Add `vite.server.watch.usePolling` to `astro.config.js` file:

```javascript
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
```

See: https://github.com/withastro/astro/issues/6043

---

**Shiki theme won't update after changes**

When changes the theme in `astro.config.mjs` the hot reload for content collection stop working. Use `npm run astro dev --force` to clear the content layer cache and forcing a full rebuild. The hot reload should work again.

## Links

* [Website](https://astro.build/)
* [GitHub](https://github.com/withastro/astro)