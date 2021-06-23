// Prototypal Inheritance.

// constructor function : initialize the data for our object
// new : generate a new empty object for this new instance then
// it gives us access to that empty object in a constructor function
// via this value

const Person = function (firstName, lastName, age, likes = []) { // we dont use arrow function because it dont bind (this)
    // console.log(this) // referces to a new empty object
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    
    this.likes.forEach((like) => { // Here we must use an arrow function to access (this) value from a parent function. because arrow function dont bind (this) value and if we use regular function it will bind (this) as an undefined value.
        bio += ` ${this.firstName} likes ${like}`
    })

    return bio
}

// Person.prototype.location = 'Amman'this will be shared between each instance.

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Motasem', 'Khalefa' , 24, ['Swimming', 'Travelling'])    

me.setName('Majd Hussein')
console.log(me.getBio())

const person2 = new Person('fayez', 'alraheel', 25)
console.log(person2.getBio())