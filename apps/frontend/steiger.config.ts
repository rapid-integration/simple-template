import fsd from "@feature-sliced/steiger-plugin";
import { defineConfig } from "steiger";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      "fsd/insignificant-slice": "off",
    },
  },
  {
    files: ["./src/app/**"],
    rules: {
      "fsd/no-reserved-folder-names": "off",
    },
  },
]);
