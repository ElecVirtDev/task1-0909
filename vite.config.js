import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/task1-0909/",
  define: {
    "window.jQuery": "jquery", // 전역으로 jQuery를 사용할 수 있도록 설정
  },
  resolve: {
    alias: {
      jquery: path.resolve(__dirname, "node_modules/jquery"), // jQuery 경로 설정
    },
  },
});
