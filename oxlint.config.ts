import { defineConfig } from "oxlint";

export default defineConfig({
    ignorePatterns: ["dist/**"],
    options: {
        typeAware: true,
        typeCheck: true
    },
    plugins: ["import", "promise"]
});
