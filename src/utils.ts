export const splitByNumWords = (text: string, numWords: number, sep: string = " "): string[] => {
  const textArray = text.split(sep)
  return [
    textArray.slice(0, numWords).join(sep),
    textArray.slice(numWords).join(sep)
  ]
}