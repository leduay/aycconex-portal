// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.aycconex.com',
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
          zh: 'zh',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
