import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	assetsInclude: ["**/*.md"],
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
			},
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
		exclude: [...configDefaults.exclude, "src/hooks/useParticleBackground.tsx"],
	},
});
