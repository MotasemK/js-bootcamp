var firstName = 'motasem'

// First
// we can redefine the variable. its a problem because in a big program 
// with multiple files we maybe redefine a variable that already exist 
// with a different value which may crash it.

// Second
// var is function based scope if we don't creat a new function we don't have a new scope 
// not block scope that means if statement which creat code blocks
// do not actually creat a new scope when working in var

var firstName = 'Jen'

// very similar to let in reassigning value 

if(1){
    var lastName = 'khalefa'
}
console.log(lastName) // in let its not availabile because let a function scope inside the if statement only

// Third 
// We can access the variable before its declared. :D

// age = 10
// console.log(age)
// var age