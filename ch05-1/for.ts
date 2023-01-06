//fot...in

let names = ['Jack', 'Jane', 'Steve']

for (let i in names) {
  const name = names[i]
  console.log(`[${i}]: ${name}`)
}

let jack = { name: 'Jack', age: 30 }
for (let property in jack) console.log(`${property}: ${jack[property]}`)

//for...of
for (let name of ['Jack', 'Jane', 'Steve']) console.log(name)
