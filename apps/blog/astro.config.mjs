import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ryanpalermo.dev",
  integrations: [sitemap()],
  output: "static",
  build: {
    format: "directory",
  },
  server: {
    host: true,
  },
});
