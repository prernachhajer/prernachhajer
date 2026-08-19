import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
 base: process.env.GITHUB_ACTIONS ? "/prernachhajer/" : "/",

  plugins: [
    react(),
  ],

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/__l5e/assets-v1": {
        target: "https://prernachhajer.lovable.app",
        changeOrigin: true,
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
