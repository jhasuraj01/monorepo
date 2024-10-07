import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import { type EsConfig } from './types'

export const createConfig: typeof tseslint.config = tseslint.config

export const baseConfigs: EsConfig = createConfig({
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettier
  ],
  linterOptions: {
    noInlineConfig: true
  },
  languageOptions: {
    /* enable if typechecking is not working */
    // parserOptions: {
    //   project: ['./tsconfig.json'],
    //   tsconfigRootDir: baseDir,
    //   ecmaVersion: 'latest',
    //   sourceType: 'module',
    // },
    sourceType: 'module',
    ecmaVersion: 'latest'
  }
})
