import { Command } from 'commander'

export const helloCommand = new Command()
  .name('hello')
  .description('say hello!')
  .argument('<string>', 'name of the person to greet')
  .action((str) => {
    console.log(`Hello, ${str}!`)
  })
