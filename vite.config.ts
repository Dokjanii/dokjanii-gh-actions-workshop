/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "json-summary"],
      lines: 100,       // Threshold for lines coverage
      branches: 100,    // Threshold for branches coverage
      functions: 100,   // Threshold for functions coverage
      statements: 100,  // Threshold for statements coverage
    },
    setupFiles: ["./test/setup.ts"],
  },
});
