import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: "8080",
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },
    ],
  },
  build: {
    outDir: "dist",  // Üretilen dosyaların yer alacağı klasör
  },
  base: "/",  // Statik dosyalar için temel URL, eğer Cloudflare veya Nginx altında "/assets/" gibi bir yol kullanıyorsanız ayarlayabilirsiniz.
});
