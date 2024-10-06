import globals from "globals";
import { EsConfig } from "./types";

export const browserConfigs: EsConfig = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
