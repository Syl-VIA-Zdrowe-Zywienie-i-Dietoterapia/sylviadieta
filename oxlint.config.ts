import { defineConfig } from "oxlint";

export default defineConfig({
    $schema: "./node_modules/oxlint/configuration_schema.json",
    categories: {},
    ignorePatterns: ["dist/**"],
    options: {
        typeAware: true,
        typeCheck: true,
    },
    plugins: ["import", "promise"],
});
