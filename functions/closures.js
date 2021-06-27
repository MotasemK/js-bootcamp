// const myFunction = () =>{
//     const message = 'This is my message'
//     // Clouser is a combination of a function with the lexical scope in which is it defined.
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()

const createCounter = () => {
    let count = 0

    return{
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get(){
            return count
        }
    }
}
// Using clouser in this way avoid anunymous from manipulating the count value.
// we could create a set of variables thats only modifiedable via interface we provide. 
// you cant do anything in them you have to use our methods we have defined.

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder 
const createAdder = (a) => {
    return (b) => {
        // The inner function still have access to a via closures.
        return a + b
    }
}

// we used a function to generate a function that we can call this function as many time we want to.

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))

// Tipper 

const createTipper = (tip) => {
    return (amount) => {
        return amount * tip
    }
}

const tip15 = createTipper(0.15)
console.log(tip15(10))