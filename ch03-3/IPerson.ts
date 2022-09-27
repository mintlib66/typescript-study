//인터페이스

interface IPerson4 {
  name: string
  age?: number
}

class Person4 implements IPerson4 {
  //   name: string
  //   age: number
  constructor(public name: string, public age?: number) {}
}
let jack4: IPerson4 = new Person4('Jack', 35)
console.log(jack4)

//추상 클래스
abstract class AbstractPerson5 {
  abstract name: string
  constructor(public age?: number) {}
}

//추상 클래스 상속
class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age)
  }
}
let jack5: Person5 = new Person5('Jack', 36)
console.log(jack5)
