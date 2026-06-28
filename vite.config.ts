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
      htmlClass: "scroll-smooth bg-background",
      title: "Çakıroğlu Çay",
      description: "Damak Zevkinize Göre",
      author: "Çakıroğlu Çay",
      iconPath: "/images/logo-clear.svg",
      keywords: ["çay", "çakıroğlu", "çakıroğlu çay"],
      openGraph: {
        title: "Çakıroğlu Çay - Damak Zevkinize Göre",
        description:
          "Karadeniz'in dik yamaçlarından elle toplanmış ve mineral bakımından zengin topraklarda yetiştirilen *Çakıroğlu Çay*, mükemmel demlenmiş bir fincan çayın koyu kırmızı rengini ve keskin, saf lezzetini sunar.",
        image: "/images/logo-black-gold-close.jpg",
        url: "",
      },
      twitter: {
        title: "Çakıroğlu Çay - Damak Zevkinize Göre",
        description:
          "Karadeniz'in dik yamaçlarından elle toplanmış ve mineral bakımından zengin topraklarda yetiştirilen *Çakıroğlu Çay*, mükemmel demlenmiş bir fincan çayın koyu kırmızı rengini ve keskin, saf lezzetini sunar.",
        image: "/images/logo-black-gold-close.jpg",
        site: "",
      },
    }),
  ],
});
