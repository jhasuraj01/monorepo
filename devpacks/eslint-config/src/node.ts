import globals from "globals";
import type { Config } from "typescript-eslint";

export const nodeConfigs: Awaited<Config> = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
