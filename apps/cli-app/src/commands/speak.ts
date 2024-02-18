import {Args, Command, Flags} from '@oclif/core'
import { sayHello } from '@jhasuraj01/hello'
import { speak } from '@jhasuraj01/speak'

export default class Speak extends Command {
  static override args = {
    message: Args.string({description: 'The message', required: false}),
  }

  static override description = 'Speak Message'

  static override flags = {
    speaker: Flags.string({char: 's', description: 'Speaker', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Speak)

    if(args.message) {
      this.log(speak({
        speaker: flags.speaker,
        message: args.message,
      }));
      return;
    }

    this.log(sayHello(flags.speaker))
  }
}
