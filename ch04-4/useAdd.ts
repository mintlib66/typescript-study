import { NumberToNumberFunc, add } from './add'

let fn: NumberToNumberFunc = add(1) //여기서는 임시 변수 역할

let result = fn(2)
console.log(result)
console.log(add(3)(4))
