//선언형 프로그래밍
//명령형 프로그래밍

//from~to 범위 출력
export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

let numbers: number[] = range(1, 9 + 1)
console.log(numbers)

export const filter = <T>(
  array: T[],
  callback: (value: T, index?: number) => boolean
): T[] => {
  let result: T[] = []
  for (let index: number = 0; index < array.length; ++index) {
    const value = array[index]
    if (callback(value, index)) result = [...result, value]
  }
  return result
}

export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  let result: Q[] = []
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    result = [...result, callback(value, index)]
  }
  return result
}
