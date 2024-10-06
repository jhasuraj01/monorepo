// @ts-check

import {
  baseConfigs,
  browserConfigs,
  nodeConfigs
} from '@organization/eslint-config'

export default [...baseConfigs, ...nodeConfigs, ...browserConfigs]
