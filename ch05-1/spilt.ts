//문자열은 배열로 분리 후 가공
//split(구분자: string): string[]

export const split = (str: string, delim: string = ''): string[] =>
  str.split(delim)

export const join = (strArray: string[], delim: string = ''): string =>
  strArray.join(delim)
