// @ts-check
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://sylviadieta.pl",
    trailingSlash: "never",
    vite: {
        plugins: [tailwindcss()],
    },
    prefetch: {
        prefetchAll: true,
    },
    integrations: [
        compressor({gzip: false, brotli: true, zstd: false}),
        sitemap()
    ],
});
