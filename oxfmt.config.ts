import { defineConfig } from "oxfmt";

export default defineConfig({
    bracketSameLine: true,
    printWidth: 230,
    tabWidth: 4,
    trailingComma: "none",
    sortTailwindcss: {},
    sortPackageJson: false,
    ignorePatterns: ["dist/**", "*.md"]
});
