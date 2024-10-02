import eslint from "@eslint/js";
import tseslint, { Config } from "typescript-eslint";
import prettier from "eslint-config-prettier";

const strictTypeChecked = tseslint.configs.strictTypeChecked;
const stylisticTypeChecked = tseslint.configs.stylisticTypeChecked;

export const baseConfigs: Awaited<Config> = [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],
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
