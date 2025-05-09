// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';
// @ts-ignore
import mdx from '@astrojs/mdx';
// @ts-ignore
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [mdx(), sitemap()],
});
