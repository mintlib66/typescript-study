//선택적 매개변수 기본값: undefined
//기본값 지정 (디폴트 매개변수)
//(매개변수:타입 = 매개변수 기본값)

export type Person = { name: string; age: number }

export const makePerson2 = (name: string, age: number = 10): Person => {
  const person = { name: name, age: age }
  return person
}

console.log(makePerson2('jack'))
console.log(makePerson2('jane', 33))

//단축 표현
const makePerson3 = (name: string, age: number = 10) => {
  const person = { name, age }
  return person
}
console.log(makePerson3('jack'))
console.log(makePerson3('jane', 33))

//더 단축
const makePerson4 = (name: string, age: number = 10): Person => ({ name, age })

console.log(makePerson4('jack'))
console.log(makePerson4('jane', 33))
