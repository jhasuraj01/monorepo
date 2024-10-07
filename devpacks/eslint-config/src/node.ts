import globals from 'globals'
import { EsConfig } from './types'
import tseslint from 'typescript-eslint'

export const nodeConfigs: EsConfig = tseslint.config({
  languageOptions: {
    globals: {
      ...globals.node
    }
  }
})
