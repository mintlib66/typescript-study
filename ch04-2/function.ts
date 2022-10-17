//함수 표현식
let add = new Function('a', 'b', 'return a+b')
let result = add(1, 2)
console.log(result)

function add2(a, b) {
  return a + b
}
console.log(add2(1, 2))

//타입스크립트는 일등함수 기능을 제공 (함수와 변수를 구분하지 X)
let f = function (a, b) {
  return a + b
}
f = function (a, b) {
  return a - b
}
console.log(f(1, 5))

//함수 호출 연산자  functino call operator
let functionExpression = function (a, b) {
  return a + b
}
let value = functionExpression(1, 2)

//익명 함수
let value2 = (function (a, b) {
  return a + b
})(1, 2)

//함수표현식 변수는 const로 선언이 바람직
