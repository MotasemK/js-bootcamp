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

puzzelEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage


// console.log(game1.getPuzzel())
// console.log(game1.remainingGuesses)

window.addEventListener('keypress',(e)=>{
    const guess = e.key
    game1.makeGuess(guess)
    puzzelEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage

})

// callback function
getPuzzle((error, puzzle) => {
    if (error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})


// ----------- HTTP (Hypertext Transfer Protocol) -----------
// Request - What do we want to do.
// Response - What was actually done.
// For more info go to mdn xmlhttprequest in Google.


// Making an HTTP request 
// const request = new XMLHttpRequest()

// // Adding an event listner to do somthing in the data comes from http call. (check browser you will find a new request called puzzle)
// // explore readystate in mdn document to see readystate values and status
// request.addEventListener('readystatechange',(e) => {
//     if (e.target.readyState === 4 && e.target.status === 200 ){ // finished succesfully . check httpstatuses in Goolge.
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     }else if (e.target.readyState === 4){
//         console.log('An error has taken place')
//     }
// })

// // Initialize our request - setup the url and the http method. 
// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')

// // Send Request
// request.send()

// // Challenge 

// const countryRequest = new XMLHttpRequest()
// const countryCode = 'JO'
// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         // console.log(data)
//         const location = data.find((item) => { // filter method to filtering the array and get a new filtered array.. find method used if we want to look for a specific known item and return that item only not an array
//             return item.alpha2Code === countryCode
//         })

//         console.log(location.name)
//     } else if (e.target.readyState === 4){
//         console.log("Unable to fetch data.")
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()