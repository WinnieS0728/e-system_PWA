import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

function resolve(dir: string) {
  return path.join(__dirname, "/", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "E-system APP",
        short_name: "e-system",
        description: "convert e-system to an app",
        display: "standalone",
        theme_color: "#fff",
        start_url: "./",
        icons: [
          {
            src: "./pwa/16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "./pwa/64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "./pwa/180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "./pwa/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./pwa/512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/e-system_PWA/dist",
  resolve: {
    alias: {
      "@": resolve("src"),
      "@styles": resolve("src/assets/styles"),
      "@components": resolve("src/components"),
      "@data":resolve("src/data")
    },
  },
});
