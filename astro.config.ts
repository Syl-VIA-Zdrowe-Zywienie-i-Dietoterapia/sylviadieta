import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import compressor from "astro-compressor";
import { defineConfig, fontProviders, passthroughImageService } from "astro/config";

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

    image: {
        service: passthroughImageService()
    },

    security: { csp: true },
    prefetch: { prefetchAll: true },
    experimental: {
        rustCompiler: true,
        queuedRendering: { enabled: true }
    },

    vite: { plugins: [tailwindcss()] },
    integrations: [compressor({ gzip: false, brotli: true, zstd: false }), sitemap()]
});
