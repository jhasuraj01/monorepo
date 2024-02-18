export interface SpeakParams {
  speaker: string
  message: string
}
export const speak = ({ speaker, message }: SpeakParams): string => {
  return `${speaker} said "${message}"`
}
