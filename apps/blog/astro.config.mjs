import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ryanpalermo.dev",
  base: "/blog",
  integrations: [sitemap()],
  output: "static",
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  build: {
    format: "directory",
  },
  server: {
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
});
