import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteHtmlPlugin } from "./generate-index";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    viteHtmlPlugin({
      title: "Çakıroğlu Çay",
	  description: "Damak Zevkinize Göre"
    }),
  ],
});
