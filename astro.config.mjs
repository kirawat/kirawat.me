// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';
// @ts-ignore
import mdx from '@astrojs/mdx';
// @ts-ignore
import sitemap from '@astrojs/sitemap';
// @ts-ignore
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
// @ts-ignore
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
          rel: 'nofollow noopener noreferrer',
        },
      ],
    ],
  },
  integrations: [mdx(), sitemap()],
});
