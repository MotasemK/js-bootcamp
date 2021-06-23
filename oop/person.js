const Person = function (firstName, lastName, age) { // we dont use arrow function because it dont bind (this)
    // console.log(this) // referces to a new empty object
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Motasem', 'Khalefa' , 24)    
// constructor function : initialize the data for our object
// new : generate a new empty object for this new instance then
// it gives us access to that empty object in a constructor function
// via this value

console.log(me)

const person2 = new Person('fayez', 'alraheel', 25)
console.log(person2)