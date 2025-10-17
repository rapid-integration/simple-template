import pluginNext from "@next/eslint-plugin-next";
import pluginImportX from "eslint-plugin-import-x";
import pluginReact from "eslint-plugin-react";
import pluginReactDom from "eslint-plugin-react-dom";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactNamingConvention from "eslint-plugin-react-naming-convention";
import pluginReactWebApi from "eslint-plugin-react-web-api";
import pluginReactX from "eslint-plugin-react-x";
import { defineConfig } from "eslint/config";
import typescript from "typescript-eslint";

export default defineConfig([
  {
    ignores: [".next", "dist", "node_modules", "public", "next-env.d.ts"],
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "react-naming-convention/filename": ["warn", { rule: "PascalCase" }],
    },
  },
  {
    files: ["**/use*.ts"],
    rules: {
      "react-naming-convention/filename": ["warn", { rule: "camelCase" }],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: pluginReact,
      "@next/next": pluginNext,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      typescript.configs.recommended,
      pluginImportX.flatConfigs.recommended,
      pluginImportX.flatConfigs.typescript,
      pluginReactDom.configs.recommended,
      pluginReactHooks.configs["recommended-latest"],
      pluginReactNamingConvention.configs.recommended,
      pluginReactWebApi.configs.recommended,
      pluginReactX.configs["recommended-typescript"],
    ],
    rules: {
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

      ...pluginReact.configs.recommended.rules,

      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      "react-hooks/exhaustive-deps": "off",
      "react-hooks/set-state-in-effect": "off",

      "react-naming-convention/component-name": "warn",
      "react-naming-convention/filename-extension": "warn",

      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
]);
