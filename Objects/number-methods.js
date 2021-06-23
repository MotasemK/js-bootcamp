// Check mdn number in Google
// Check mdn math in Google

let num = 103.941

// toFixed method customize the amount of decimal places
console.log(num.toFixed(2))

// round method
console.log(Math.round(num))

console.log(Math.floor(num))

console.log(Math.ceil(num))

// random method typically random number between 0 - 0.99999999
let min = 10
let max = 20

// fourmla to generate random number between two specific numbers
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge area

// guessing range 1-5 true if correct false if not correct

function makeGuess(num){
    let min = 1
    let max = 5

    return num === (Math.floor(Math.random() * (max - min + 1)) + min)
}

console.log(makeGuess(1))
