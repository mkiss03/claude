// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://temetkezespro.hu',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'hu',
        locales: {
          hu: 'hu-HU',
        },
      },
    }),
  ],
  output: 'hybrid',
  vite: {
    ssr: {
      noExternal: ['lucide-astro'],
    },
  },
});
