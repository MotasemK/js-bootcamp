// declaring informations related to each other 
// objects contains properties and values for each property

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Rich Dad Poor Dad'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge 

// name, age, location
// Motasem is 27 and lives in amman.
// increas the age by 1 and then print a new message.

let person = {
    name: 'Motasem',
    age: 24,
    location: 'Amman'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)

person.age = person.age + 1 

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)

