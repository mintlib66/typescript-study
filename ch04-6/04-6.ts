import { A } from './A'
let a: A = new A()
a.method()

import { B } from './B'
let b: B = new B()
b.method()

import { Calculator } from './method-chain'

let calc = new Calculator()
let result = calc.add(1).add(2).multiply(3).value
console.log(result)
