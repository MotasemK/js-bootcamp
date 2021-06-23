const getTip = (amount) => {
    if (typeof amount === 'number'){
        return amount * .25
    }else{
        throw Error('Argument must be a number')
    }
}

// we run some code inside try block if that code doesnt throw an error thats fine we continue to the rest of program
// if it does thow we will ad some code inside the catch block to run instead.
// catch block is the area we will recover from the error by adding some code
// to deal with it.

try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}

// Challenge. inside functions/grade-calc.js



