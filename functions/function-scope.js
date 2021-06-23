// Global scope (convertFahrenheitToCelsius , c1 , c2)
    // Local scope (f , c)
        //local scope (isFreezing)

function convertFahrenheitToCelsius(f){
    let c = (f - 32) * (5/9)

    if (c <= 0){
        let isFreezinf = true
    }
    return c
}

c1 = convertFahrenheitToCelsius(32)
c2 = convertFahrenheitToCelsius(68)

console.log(c1)
console.log(c2)