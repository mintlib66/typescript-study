//제네릭: T[]형태로 배열 아이템 타입을 한꺼번에 표현

//const arrayLength = array => array.length
const arrayLength = <T>(array: T[]): number => array.length
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0

let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['Hello', 'Typescript']

type GPerson = { name: string; age?: number }
let personArray: GPerson[] = [{ name: 'Sesil' }, { name: 'Orca', age: 12 }]

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
)

//타입 추론
const identity = <T>(n: T): T => n
console.log(identity<boolean>(true), identity(true))
