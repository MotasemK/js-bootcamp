// check mdn string in Google

let name = '  motasem  '

// Length property
console.log(name.length)

// Convert to upper case method
console.log(name.toUpperCase())

// Includes method
let password = 'abc123asasds'
console.log(password.includes('password'))

// Trim method trim the extra white spaces in the string
console.log(name.trim())

// Challenge

// isValidPassword
// return true if length more than 8 - and it doesn't contain word password

function isValidPassword(password){
    // if(password.length >= 8 && !password.includes('password'))
    //     return true
    // return false
    return (password.length >= 8 && !password.includes('password'))
}

console.log(isValidPassword('asdfa'))
console.log(isValidPassword('asdfa12312!@#$'))
console.log(isValidPassword('sdfsd32password54'))


