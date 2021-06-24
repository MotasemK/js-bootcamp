// we start by looking at product (does product has what we looking for?)
// if it does great if not we continue up to prototype chain using that internal
// prototype property. 

// const { stringify } = require("uuid")

// searching chain for objects : product --> object.prototype --> null
/*
const product = {
    name: 'Influence'
}
*/
// method : hasOwnProperty .. returns true if the property exists in the
// object or false if its not.

// Check mdn hasOwnPropery in Google.
//console.log(product.hasOwnProperty('hasOwnProperty'))

/*
Ask about this why fires error???! we are chaining inside the product to its prototype
where we should find hasOwnProperty
console.log(product.prototype.hasOwnProperty('hasOwnProperty'))

Answer : browsers know prototype as __proto__ .. proof(try to console.log(any object))
*/

//console.log(product)

// We can add a new methods to the object prototype !! :D :D :D lol and we can override the default process of already exists functions :D:D

/* Object.prototype.someNewMethod = () => 'This is the new function'
console.log(product.someNewMethod()) */
/*
BEHIND THE SCENE JS MAKES OBJECTS LIKE THAT.
CONST PERSON = NEW OBJECT()
PERSON.NAME = "MOTASEM"
CONSOLE.LOG(PERSON)

OR 

 CONST PERSON = NEW OBJECT({
    NAME : 'MOTASEM'
})
console.log(person)
*/

/*-------------------------------------------------------------
-- Primitive value: string, number, boolean, null, undefined. (((is a value that doesn't have property))).
Any thing out of this list is an object.

Searching chain.
Explaining what happend behind the scene

object: myObject --> Object.prototype --> null.
Array: myArray --> Array.prototype --> Object.prototype --> null
Function: myFunc --> Function.prototype --> Object.prototype --> null
String: myString --> string.prototype --> Object.prototype --> null
Number: myNumber --> Number.prototype --> Object.prototype --> null
Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
*/

/*const team = ['Luke', 'Cage']
console.log(team.hasOwnProperty('filter'))*/ // array dont have filter method but array.prototype have.

// const product = 'Computer'
// console.log(product.split())
// primitives have object wrapper when we call split method JS behind the scene converts the string to an object

// const product = new String('phone')
// console.log(product)
// if we declare it like that we could explore all the methods contains in the proto.

const puzzelEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game1 = new Hangman('car parts', 2)

puzzelEl.textContent = game1.puzzel
guessesEl.textContent = game1.statusMessage


// console.log(game1.getPuzzel())
// console.log(game1.remainingGuesses)

window.addEventListener('keypress',(e)=>{
    const guess = e.key
    game1.makeGuess(guess)
    puzzelEl.textContent = game1.puzzel
    guessesEl.textContent = game1.statusMessage

})