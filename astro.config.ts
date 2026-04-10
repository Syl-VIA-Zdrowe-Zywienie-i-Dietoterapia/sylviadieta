import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import compressor from "astro-compressor";
import { defineConfig, fontProviders } from "astro/config";
import fixOrphansIntegration from "./src/utils/fixOrphans";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://sylviadieta.pl",
  trailingSlash: "never",

  fonts: [
      {
          name: "Inter",
          cssVariable: "--font-inter",
          provider: fontProviders.fontsource(),
          weights: ["100 900"],
          subsets: ["latin", "latin-ext"]
      },
      {
          name: "Playfair Display",
          cssVariable: "--font-playfair",
          provider: fontProviders.fontsource(),
          weights: ["100 900"],
          subsets: ["latin", "latin-ext"]
      }
  ],

  security: { csp: true },
  prefetch: { prefetchAll: true },

  experimental: {
      rustCompiler: true,
      queuedRendering: { enabled: true }
  },

  vite: { plugins: [tailwindcss()] },
  integrations: [fixOrphansIntegration(), compressor({ gzip: false, brotli: true, zstd: false }), sitemap()],
  adapter: cloudflare()
});