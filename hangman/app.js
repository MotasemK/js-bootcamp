// we start by looking at product (does product has what we looking for?)
// if it does great if not we continue up to prototype chain using that internal
// prototype property. 

// searching chain for objects : product --> object.prototype --> null

const product = {
    name: 'Influence'
}

// method : hasOwnProperty .. returns true if the property exists in the
// object or false if its not.

// Check mdn hasOwnPropery in Google.
console.log(product.hasOwnProperty('hasOwnProperty'))

/*
Ask about this why fires error???! we are chaining inside the product to its prototype
where we should find hasOwnProperty
console.log(product.prototype.hasOwnProperty('hasOwnProperty'))

Answer : browsers know prototype as __proto__ .. proof(try to console.log(any object))
*/

console.log(product)

// We can add a new methods to the object prototype !! :D :D :D lol and we can override the default process of already exists functions :D:D

Object.prototype.someNewMethod = () => 'This is the new function'
console.log(product.someNewMethod())

// behind the scene JS makes objects like that.
// const person = new Object()
// person.name = "Motasem"
// console.log(person)

// or 

// const person = new Object({
//     name : 'Motasem'
// })
// console.log(person)

