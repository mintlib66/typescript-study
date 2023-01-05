//function 키워드 함수 = 메서드: this 사용가능
//화살표 함수는 this 사용불가.
export class A {
  value: number = 1
  method: () => void = function (): void {
    console.log(`value: ${this.value}`)
  }
}
