/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setup.ts"],
    globals: true
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }]
  }
});
