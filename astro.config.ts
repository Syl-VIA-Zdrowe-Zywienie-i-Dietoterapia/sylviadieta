// @ts-check
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

const site = "https://sylviadieta.pl";

// https://astro.build/config
export default defineConfig({
    site: site,
    trailingSlash: "never",
    vite: {
        plugins: [tailwindcss()],
    },
    prefetch: {
        prefetchAll: true,
    },
    integrations: [
        compressor({gzip: false, brotli: true, zstd: false}),
        sitemap({
            filter: (page) =>
                !page.startsWith(`${site}/blog/posts/`) &&
                !page.startsWith(`${site}/o-mnie/content/`) &&
                !page.startsWith(`${site}/uslugi/content`),
        })
    ],
});
