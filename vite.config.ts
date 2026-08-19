import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/prernachhajer/",

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

  plugins: [
    react(),

    mode === "development" && componentTagger(),

    {
      name: "copy-index-to-404",

      closeBundle() {
        const fs = require("fs");
        const path = require("path");

        const distPath = path.resolve(__dirname, "dist");
        const indexPath = path.join(distPath, "index.html");
        const notFoundPath = path.join(distPath, "404.html");

        fs.copyFileSync(indexPath, notFoundPath);

        console.log("Created dist/404.html");
      },
    },
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
