// Prototypal Inheritance.

// constructor function : initialize the data for our object
// new : generate a new empty object for this new instance then
// it gives us access to that empty object in a constructor function
// via this value
/*
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
// me.getBio = function(){ // changes in getBio are restricted to me instance only because this property are added to me instance only.
//                         // process is : we call getBio so we go to instance and looking for it we found it without needs of chaining to prototype property.
//                         // in person2 instance we didnt add getBio property so we chained up to a prototype to looking for it.
//     return 'This is fake'
// }


me.setName('Majd Hussein')
console.log(me.getBio())

const person2 = new Person('fayez', 'alraheel', 25)
console.log(person2.getBio())
*/

// ---The class syntax---.

class Person {
    // Constructor function 
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`
    
        this.likes.forEach((like) => { // Here we must use an arrow function to access (this) value from a parent function. because arrow function dont bind (this) value and if we use regular function it will bind (this) as an undefined value.
            bio += ` ${this.firstName} likes ${like}`
        })
    
        return bio
    }
    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

// Subclass inheirits behaviour from Person without duplicating the code by extends it
class Employee extends Person{
    // after making constructor function here it will not actually run the parent constructor function in Person
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }
    // Override getBio 
    getBio() {
        // return `${this.firstName} ${this.lastName} is a ${this.position}`
        return `${this.fullName} is a ${this.position}`
        // Motasem is an Engineer
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

// const myPerson = new Employee('Motasem', 'Khalefa' , 24, 'Engineer', ['Swimming', 'Travelling'])
// myPerson.setName('alexis Turner')
// console.log(myPerson.getBio())
// console.log(myPerson.getYearsLeft())

// const person2 = new Person('fayez', 'alraheel', 25)
// console.log(person2)

class Student extends Person{
    constructor(firstName, lastName, age, likes, grade){
    super(firstName, lastName, age, likes)
    this.grade = grade
    }
    getBio(){/*
        if(this.grade >= 70){
            return `${this.firstName} is passing the class`
        }else{
            return `${this.firstName} is failed`
        }*/
        return this.grade >= 70? `${this.firstName} is passing the class` : `${this.firstName} is failed`
    }
    changeGrade(amount){
        this.grade += amount
    }
}

// const student1 = new Student('Motasem', 'Khaled', 24, ['Swimming', 'Travelling'], 68)
// student1.fullName = 'Majd Hussein'
// console.log(student1)
// console.log(student1.getBio())

// student1.changeGrade(+20)
// console.log(student1.getBio())

const employee = new Employee('Motasem', 'Khaled', 24, 'Engineer', [])
employee.fullName = 'Majd Hussein'
console.log(employee)
console.log(employee.getBio())
