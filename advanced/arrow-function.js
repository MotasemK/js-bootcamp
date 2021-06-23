const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5)) // Test 

const people = [{
    name: 'Andrew',
    age:28
},{
    name: 'Motasem',
    age: 24
},{
    name: 'majd',
    age:22
}]

const under30 = people.filter((person) => person.age < 25)

console.log(under30)

// Challenge :
// 1. Find the person with age 22.
// 2. Print that persons name.

// const age22 = people.filter((person) => person.age === 22)
// age22.forEach((person) => console.log(person.name))

// this can be summarize to
const person = people.find((person) => person.age === 22)
console.log(person.name)