//메서드 체인: 객체의 메서드를 이어서 계속 호출

export class Calculator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value
    return this
  }
  multiply(value: number) {
    this.value *= value
    return this
  }
}
