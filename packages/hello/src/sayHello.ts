import { speak } from '@jhasuraj01/speak'

export const sayHello = (speaker: string): string => {
  return speak({
    speaker,
    message: 'Something'
  })
}
