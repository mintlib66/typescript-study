//비구조화
let personName = 'Jack'
let personAge = 32

let companyName = 'Apple Company, Inc'
let companyAge = 43

//구조화
export interface IPerson {
  name: string
  age: number
}
export interface ICompany {
  name: string
  age: number
}
