#!/usr/bin/env node

import { program } from 'commander'
import { helloCommand } from './hello'

program
  .name('commander-cli-app')
  .description('This is a sample CLI app using commander.js')
  .version('0.0.0')

program.addCommand(helloCommand)

program.parse()
