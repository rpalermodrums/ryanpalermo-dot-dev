import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true,
    proxy: {
      // Proxy /blog requests to Astro dev server in development
      "/blog": {
        target: "http://localhost:4321",
        changeOrigin: true,
      },
    },
  },
});
