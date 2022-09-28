import { IPerson, ICompany } from './IPerson_ICompany'

let jack: IPerson = { name: 'Jack', age: 32 },
  jane: IPerson = { name: 'Jane', age: 30 }

let apple: ICompany = { name: 'Apple Company, Inc', age: 43 },
  ms: ICompany = { name: 'Microsoft', age: 44 }

//비구조화 할당
//let name = jack.name, age = jack.age 와 동일
let { name, age } = jack
