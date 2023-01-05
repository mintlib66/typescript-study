//색인 가능 타입 {[키]: 값}
export type KeyTypeValue = {
  [key: string]: string
}
export const makeObject = (key: string, value: string): KeyTypeValue => ({
  [key]: value,
})

console.log(makeObject('name', 'Lakin'))
console.log(makeObject('firstName', 'Cate'))
