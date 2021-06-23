const add = function(a, b){
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    color: 'Red',
    getSummary(){
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())

// Arrow function dont bind arguments dont bind (this) but we still can 
// shorten the method function inside the object like this 
// getSummary(){ }  rather than getSummary: function(){}