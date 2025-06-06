import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    rehypePlugins: [
      rehypeAstroRelativeMarkdownLinks,
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: 'nofollow noopener',
        },
      ],
    ],
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    mdx(),
    sitemap(),
    (await import("astro-compress")).default(),
  ],
});