export type Person = { name: string; age: number }

//매개변수에 비구조화 할당문 적용 가능
const printPerson = ({ name, age }: Person): void =>
  console.log(`name:${name}, age: ${age}`)

printPerson({ name: 'Amy', age: 26 })
