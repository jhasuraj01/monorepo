// @ts-check

import {
  baseConfigs,
  browserConfigs,
  reactConfigs,
  createConfig
} from '@organization/eslint-config'

export default createConfig({
  extends: [...baseConfigs, ...browserConfigs, ...reactConfigs],
  files: ['src/**/*.{ts,tsx,js,jsx}'],
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: import.meta.dirname
    }
  }
})
