import nextPlugin from "@next/eslint-plugin-next";
import pluginImport from "eslint-plugin-import-x";
import reactPlugin from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import typescript from "typescript-eslint";

export default defineConfig([
  {
    ignores: [".next", "dist", "node_modules", "public", "next-env.d.ts"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
      "@next/next": nextPlugin,
    },
    extends: [
      typescript.configs.recommended,
      pluginImport.flatConfigs.recommended,
      pluginImport.flatConfigs.typescript,
      pluginReactHooks.configs["recommended-latest"],
    ],
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      "react-hooks/exhaustive-deps": "off",

      "import-x/no-named-as-default-member": "off",
      "import-x/no-named-as-default": "off",
      "import-x/no-unresolved": "off",
      "import-x/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
          warnOnUnassignedImports: false,
          pathGroups: [
            {
              pattern: "**/*.css",
              group: "type",
              position: "before",
            },
          ],
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
          ],
        },
      ],
    },
  },
]);
