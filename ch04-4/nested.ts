//중첩 함수: 함수 내부에 함수를 중첩
const calc = (value: number, cb: (number) => void): void => {
  let add = (a, b) => a + b
  function multiply(a, b) {
    return a * b
  }

  let result = multiply(add(1, 2), value)
  cb(result)
}
calc(30, (result: number) => console.log(`result: ${result}`))
