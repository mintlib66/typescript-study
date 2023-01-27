import { range } from './05-2'
import { fold } from './fold'
import { map } from './05-2'

let numbers: number[] = range(1, 100 + 1)

let result = fold(
  map(numbers, value => value * value),
  (result, value) => result + value,
  0
)
console.log(result)
