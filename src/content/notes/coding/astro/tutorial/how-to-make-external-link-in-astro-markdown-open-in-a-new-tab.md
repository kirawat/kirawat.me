---
name: "How to Make External Link in Astro Markdown Open in a New Tab"
dateCreated: 2025-06-02 09:39:00 +0700
datePublished: 2025-06-02 09:39:00 +0700
dateModified: 2025-06-02 09:39:00 +0700
tags:
  - "Tutorial"
---

To make external link in [Astro](../index.md) Markdown open in a new tab, you can use the [`rehype-external-links`](https://github.com/rehypejs/rehype-external-links) plugin and configure it in your `astro.config.mjs` file.

1. Install the plugin:

   ```bash
   npm install rehype-external-links
   ```

2. Import the plugin and configure it in `astro.config.mjs`:

   ```javascript
   import rehypeExternalLinks from 'rehype-external-links';

   export default {
    markdown: {
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: 'nofollow noopener noreferrer'
          },
        ],
      ],
    },
   }
   ```

The `rehype-external-links` plugin will automatically add `target="_blank"`   and `rel="nofollow noopener noreferrer"` to the external links in the generated HTML.

For example, in your Markdown file:

```markdown
Visit [Astro Docs](https://astro.build/docs)
```

The generated HTML will be:

```html
<p>Visit <a href="https://astro.build/docs" target="_blank" rel="nofollow noopener noreferrer">Astro Docs</a></p>
```

Here's a breakdown of what `nofollow`, `noopener` and `noreferrer` do:

* `nofollow`: This attribute is primarily a directive for search engine crawlers (like Googlebot). It tells search engines **not to folow the link**. This means the crawler will typically not crawl the linked page from this specific links. It signals to search engines not to pass any "link equity" (often called "link juice" or ranking power) from the current page to the linked page, to **improve SEO (Search Engine Optimization)**.

  Common use cases for `nofollow` include:

  1. **User-Generated Content (UGC):** Links in blog comments, forum posts, etc. Since you can't always vouch for the quality or trustworthiness of links posted by users, `nofollow` helps prevent abuse (e.g., spammy links trying to gain SEO benefits). Google now also has more specific attributs like `rel="ugc"` for this purpose.

  2. **Paid Links:** If a link is part of an advertisement or sponsorship (i.e., it was paid for), search engine guidelines often require it to be marked with `nofollow` (or `rel="sponsored") to prevent it from unfairly influencing search rankings.

  3. **Untrusted Content:** If you need to link to a site but don't want to imply an endorsement or pass ranking value.

  4. **Crawl Prioritization (less common now):** In the past, some webmasters used `nofollow` on internal links to try and sculpt how search engines crawl their site, though this is generally not recommended or as effective today for that purpose.

* `noopener`: When a link has `target="_blank"`, the newly opened page has access to the original page's `window` object via `window.opener`. If the linked page is malicious, it could potentially change the `window.opener.location` to a phishing page, for example. `noopener` prevents this by setting the `window.opener` property to `null` in the new tab. This **enhances security** by isolating the new tab from the originating tab.

* `noreferrer`: Normally, when you click a link, the browser sends a HTTP `Referer` header to the destination server, indicating the URL of the page that contained the link. `noreferrer` instructs the browser not to send this `Referrer` header. This means the linked site will not know where the traffic originated from. This is often used for **privacy reasons**, to avoid leaking information about the user's Browse path. Though, it can have minor implications for analytics on the receiving end, as they won't see your site as a traffic source for that specific click.