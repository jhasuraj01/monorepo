import globals from 'globals'
import tseslint from 'typescript-eslint'
import { EsConfig } from './types'

export const browserConfigs: EsConfig = tseslint.config({
  languageOptions: {
    globals: {
      ...globals.browser
    }
  }
})
