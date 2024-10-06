import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import { type EsConfig } from "./types";

const strictTypeChecked = tseslint.configs.strictTypeChecked;
const stylisticTypeChecked = tseslint.configs.stylisticTypeChecked;

export const baseConfigs: EsConfig = [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
    ],
    linterOptions: {
      noInlineConfig: true,
    },
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./test/tsconfig.json"],
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  eslint.configs.recommended,
  ...strictTypeChecked,
  ...stylisticTypeChecked,
  prettier,
];
