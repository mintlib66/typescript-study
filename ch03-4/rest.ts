let address: any = {
  country: 'Korea',
  city: 'Seoul',
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong 123-4567',
  address3: '789 street, 2 Floor ABC building',
}

//잔여 연산자 ...
const { country, city, ...detail } = address
console.log(detail) //address1~3까지의 나머지 object 출력됨.

//전개 연산자 (비구조화 할당문이 아닌 곳에서 사용될 때)
let coord = { ...{ x: 0 }, ...{ y: 0 } }
console.log(coord)

let part1 = { name: 'jane' },
  part2 = { age: 22 },
  part3 = { city: 'Seoul', country: 'Kr' }
let merged = { ...part1, ...part2, ...part3 }
console.log(merged)
