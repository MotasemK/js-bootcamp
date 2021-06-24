// using getters and setters alows us to customize the behaviour of an object

const data = {
    locations: [],
    get location(){
        return this._location
    },
    set location(value){
        // location value lives inside this._location since location itself contains getter/setter
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the data object

data.location = '  Amman    '
data.location = ' New York'
console.log(data)