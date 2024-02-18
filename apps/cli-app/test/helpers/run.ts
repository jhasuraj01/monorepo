import type { ExecaSyncReturnValue, SyncOptions } from 'execa'
import { execaCommandSync, execaSync } from 'execa'

const CLI_PATH = './bin/dev.js';

export const run = (
    commands: string[],
    options: SyncOptions = {},
): ExecaSyncReturnValue => {
    return execaCommandSync(`${CLI_PATH}`, commands, options)
}