import { Command } from 'commander'

export const helloCommand = new Command()
  .name('hello')
  .description('say hello!')
  .argument('<string>', 'name of the person to greet')
  .action((str) => {
    if (typeof str !== 'string') {
      throw new Error('Invalid argument')
    }
    console.log(`Hello, ${str}!`)
  })
