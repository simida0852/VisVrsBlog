import { defineConfig, passthroughImageService } from 'astro/config';

import mdx from '@astrojs/mdx';
// Utils and plugins
import remarkModifiedTime from './src/utils/remark-modified-time.mjs';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Astro Configuration
export default defineConfig({
  // Site Information
  site: 'https://visvrs.vercel.app',

  trailingSlash: 'never',

  prefetch: {
    prefetchAll: true
  },

  // Markdown Configuration
  markdown: {
    // Using custom Remark plugin to get modified time
    remarkPlugins: [remarkModifiedTime]
  },

  // Third-party Integrations
  integrations: [
    // Tailwind CSS for styling
    tailwind(),

    // Sitemap generator
    sitemap(),

    // MDX support
    mdx()
  ],
  image: {
    service: passthroughImageService(),
  }
});
