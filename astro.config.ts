// @ts-check
import { defineConfig } from "astro/config";
import compressor from "astro-compressor";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    prefetch: {
        prefetchAll: true,
    },
    integrations: [compressor()],
});
