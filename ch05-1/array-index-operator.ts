//인덱스 연산자
const numbers: number[] = [11, 22, 33, 44, 55]
for (let index = 0; index < numbers.length; index++) {
  const item: number = numbers[index]
  console.log(item)
}

let array: number[] = [1, 2, 3, 4, 5]
let [first, second, third, ...rest] = array
console.log(first, second, third, rest)
