const getPuzzle = (callback) =>{
    // We used callback function because we can't return any value from here. because it takes time for http request and we cant return a value from a child scope of parent scope 
    // making an http request 
    const request = new XMLHttpRequest()

    // adding an event listner to do somthing in the data comes from http call. (check browser you will find a new request called puzzle)
    // explore readystate in mdn document to see readystate values and status
    request.addEventListener('readystatechange',(e) => {
        if (e.target.readyState === 4 && e.target.status === 200 ){ // finished succesfully . check httpstatuses in goolge.
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        }else if (e.target.readyState === 4){
            callback('An error has taken place', undefined)
        }
    })

    // initialize our request - setup the url and the http method. 
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')

    // send request
    request.send()
}

const getCountry = (countryCode ,callback) => {
    const countryRequest = new XMLHttpRequest()
 
    countryRequest.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            const location = data.find((item) => { // filter method to filtering the array and get a new filtered array.. find method used if we want to look for a specific known item and return that item only not an array
                return item.alpha2Code === countryCode
            })
            callback(undefined, location)

        } else if (e.target.readyState === 4){
            callback('Unable to fetch data', undefined)
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
}