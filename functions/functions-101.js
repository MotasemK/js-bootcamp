// function - input (argument) , code , output (return value)

// let greetUser = function(){
//     console.log('welcome user')
// }

// greetUser()

// function greetUser(){
//     console.log('hello world')
// }

// greetUser()

//Challenge

function convertFahrenheitToCelsius(f){
    let c = (f - 32) * (5/9)
    return c
}

c1 = convertFahrenheitToCelsius(32)
c2 = convertFahrenheitToCelsius(68)

console.log(c1)
console.log(c2)