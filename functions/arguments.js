// default arguments

// score = 0 is a default value will be used only if we didnt pass a value 
// for it when we call the funtion
// let getScoreText = function(name = 'Anonymous', score = 0){
//     console.log(name)
//     console.log(score)
// }
//  // passing 100 for score will override the default value 0
// getScoreText()

// we can define a single argument only and left the another one 
// on its default value 

// Ex : getScoreText(undefined , 99)

// the name will be Anonymous the default value

// Challenge. 

// function tipCalculator(total , tipPercent = 0.2){
//     return total * tipPercent
// }

// tip = tipCalculator(100)
// console.log(tip)

// tip = tipCalculator(200)
// console.log(tip)

// tip = tipCalculator(100 , 0.3)
// console.log(tip)

// template strings  ` `

// let name = "motasem"
// let age = 24

// console.log(`i am ${name}. i am ${age} years old.`)

// Challenge 
// A 25% tip on $40 would be $10

function tipCalculator(total , tipPercent = 0.2){
    return `A ${tipPercent*100}% tip on $${total} would be $${total*tipPercent}`
}

tip = tipCalculator(100)
console.log(tip)

tip = tipCalculator(200)
console.log(tip)

tip = tipCalculator(100 , 0.3)
console.log(tip)