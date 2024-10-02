import globals from "globals";
import type { Config } from "typescript-eslint";

export const browserConfigs: Awaited<Config> = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
