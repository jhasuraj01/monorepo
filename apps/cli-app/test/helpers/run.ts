import type { ExecaSyncReturnValue, SyncOptions } from 'execa'

import { execaSync } from 'execa'

const CLI_PATH = './bin/dev.js'

export const run = (
  commands: string[],
  options: SyncOptions = {}
): ExecaSyncReturnValue => execaSync(CLI_PATH, commands, options)
