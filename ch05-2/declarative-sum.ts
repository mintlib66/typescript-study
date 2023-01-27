import { range } from './05-2'
import { fold } from './fold'

let numbers: number[] = range(1, 100 + 1)

let result = fold(numbers, (result, value) => result + value, 0)
console.log(result)
