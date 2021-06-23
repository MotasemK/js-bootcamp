
// a method is an object property its value is a function
// Ex console.log() console is an object log is an property as a function
// inside our method we have an access to "this" which references the object the method is defined on 

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    // Challenge methods
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}

//challenge

// seatParty
// removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

