import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://clawnker.work',
  base: '/',
  vite: {
    plugins: [tailwind()],
  },
});
