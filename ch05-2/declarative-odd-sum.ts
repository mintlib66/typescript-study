import { range } from './05-2'
import { fold } from './fold'
import { filter } from './05-2'

let numbers: number[] = range(1, 100 + 1)

const isOdd = (n: number): boolean => n % 2 != 0

let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0)
console.log(result)
