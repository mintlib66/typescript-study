function fname(prop1, prop2) {
  //...
}

function fnameNotVoid(prop1: any, prop2: string): string {
  //...
  return prop2
}

//값 반환하는 함수예시
function add(a: number, b: number): number {
  return a + b
}
//값 반환하지 않는 void타입 함수 예시
function printMe(name: string, age: number): void {
  console.log(`name:${name}, age:${age}`)
}

//함수 시그니쳐
let printMe2: (string, number) => void = function (
  name: string,
  age: number
): void {}

//별칭
type newType = (string, number) => void
let f: newType = function (a: string, b: number): void {}
let g: newType = function (c: string, d: number): void {}

//undefined 입력을 고려해야함
interface INameable {
  name: string
}

function getName(o: INameable) {
  return o != undefined ? o.name : 'unknown name'
}
let n = getName(undefined)
console.log(n)
console.log(getName(null))
console.log(getName({ name: 'Amy' }))

//선택적 매개변수
function fn(arg1: string, arg?: number): void {
  console.log(`arg: ${arg}`)
}

fn('hello', 1)
fn('hi')
