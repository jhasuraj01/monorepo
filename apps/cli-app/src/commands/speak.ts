import { sayHello } from '@jhasuraj01/hello'
import { speak } from '@jhasuraj01/speak'
import { Args, Command, Flags } from '@oclif/core'

export default class Speak extends Command {
  static override args = {
    message: Args.string({ description: 'The message', required: false })
  }

  static override description = 'Speak Message'

  static override flags = {
    speaker: Flags.string({ char: 's', description: 'Speaker', required: true })
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Speak)

    if (args.message !== undefined) {
      this.log(
        speak({
          message: args.message,
          speaker: flags.speaker
        })
      )
      return
    }

    this.log(sayHello(flags.speaker))
  }
}
