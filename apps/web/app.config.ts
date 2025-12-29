import { defineConfig } from "@tanstack/start/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  vite: {
    plugins: [react()],
    resolve: {
      alias: {
        "~": resolve(import.meta.dirname, "./src"),
      },
    },
  },
});
