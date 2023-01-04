//일등함수 제공 언어에서 함수 = 함수 표현식 형태의 '값'
//콜백함수 : 매개변수 형태로 동작
const f = (callback: () => void): void => callback()

//고차함수 = 또 다른 함수를 반환하는 함수
const add1 = (a: number, b: number): number => a + b //일반 함수
const add2 =
  (a: number): ((number) => number) =>
  (b: number) =>
    a + b //고차 함수
