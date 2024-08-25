import type { SyncOptions, SyncResult } from 'execa'

import { execaSync } from 'execa'

const CLI_PATH = './bin/dev.js'

export const run = (
  commands: string[],
  options: SyncOptions = {}
): SyncResult => execaSync(CLI_PATH, commands, options)
