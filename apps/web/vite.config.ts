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
  },
  define: {
    __DEV_BLOG_URL__: JSON.stringify(
      process.env.NODE_ENV === "production" ? "/blog" : "http://localhost:4321/blog"
    ),
  },
});
