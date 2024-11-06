import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // SCSS 전역 사용 자동 import
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "public/src/assets/styles/main.scss";`,
      },
    },
  },
});
