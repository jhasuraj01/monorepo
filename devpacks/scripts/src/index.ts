#!/usr/bin/env node

import { program } from 'commander'
import { updateEnvCommand } from './update-env'

program
  .name('organization-scripts')
  .description('manage organization monorepo')
  .version('0.0.0')

program.addCommand(updateEnvCommand)

program.parse()
