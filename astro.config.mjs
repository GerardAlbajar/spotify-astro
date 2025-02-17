import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: netlify()
});