// @ts-check

import {
  baseConfigs,
  browserConfigs,
  createConfig,
  nodeConfigs
} from '@organization/eslint-config'

export default createConfig({
  extends: [...baseConfigs, ...nodeConfigs, ...browserConfigs],
  files: ['{src,test}/**/*.{ts,js}'],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json', './test/tsconfig.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
