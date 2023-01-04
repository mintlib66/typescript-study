// 타입스크립트 화살표 함수
// const 함수이름 = (매개변수: 타입[, ...]) : 반환 타입 => 함수 몸통

//실행문 방식
const arrow1 = (a: number, b: number): number => {
  return a + b
}
//표현식 문 방식
const arrow2 = (a: number, b: number): number => a + b

//복합 실행문
function compound() {
  let x = 1,
    y = 2
  let result = x + y + 10
}

//return 키워드는 함수 몸통에서만 사용가능
function isGreater(a: number, b: number): boolean {
  return a > b
}
//화살표 함수
const isGreater2 = (a: number, b: number): boolean => {
  return a > b
}
//단순화
const isGreater3 = (a: number, b: number): boolean => a > b
