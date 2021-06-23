
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

function getSummary(book){
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area 

// Creat function take f in and return object with al three

let londonTemp = {
    area:'London',
    temp: 40
}

let ammanTemp = {
    area:'Amman',
    temp: 70
}

function getTemp(temperature){
    return{
        location:temperature.area,
        tempInFehrenheit: `${temperature.temp} Fehrenheit`,
        tempInCelesuis: `${(temperature.temp - 32) * 5/9} Celesius`,
        tempInKelvin: `${(temperature.temp + 459.67) * 5/9} Kelvin`
    }
}

areaTemp = getTemp(ammanTemp)
console.log(`${areaTemp.location} temperature is ${areaTemp.tempInFehrenheit}`)
console.log(`${areaTemp.location} temperature is ${areaTemp.tempInCelesuis}`)

areaTemp = getTemp(londonTemp)
console.log(`${areaTemp.location} temperature is ${areaTemp.tempInFehrenheit}`)
console.log(`${areaTemp.location} temperature is ${areaTemp.tempInCelesuis}`)
