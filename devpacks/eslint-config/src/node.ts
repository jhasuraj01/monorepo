import globals from 'globals'
import { EsConfig } from './types'

export const nodeConfigs: EsConfig = [
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
]
