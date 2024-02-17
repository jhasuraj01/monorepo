export type SpeakParams = {
  message: string,
  speaker: string,
}
export const speak = ({speaker, message}: SpeakParams): string => {
  return `${speaker} said "${message}"`;
}