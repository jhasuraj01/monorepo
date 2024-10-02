import type { SyncOptions, SyncResult } from 'execa'
import { join } from 'path'
import { execaSync } from 'execa'

const CLI_PATH = join(import.meta.dirname, '../../dist/index.cjs')

export const run = (
  commands: string[],
  options: SyncOptions = {}
): SyncResult => execaSync(CLI_PATH, commands, options)
