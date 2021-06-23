// Check mdn array in Google

// const notes = ['Note 1', 'Note 2', 'Note 3']

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}]

// ----------------------------------------- Manipulating arrays with methods -----------------------------------------

// // manipulating array from the end.
// console.log(notes.pop())    // removes
// notes.push('my new note')   // adds

// // manipulating array at the beginning.
// console.log(notes.shift())      // removes
// notes.unshift('my first note')  // adds

// Manipulating from the middle.
// notes.splice(1, 1)   // go to index 1 and remove 1 item
// notes.splice(1, 0, 'This is the new second item')   // Go to the index 1 remove 0 items and add a new string at that index.
// notes.splice(1, 0, 'This is the new second item')   // Replacing item one by this new string.

// ----------------------------------------- looping through arrays -----------------------------------------

// callback function : a function passed to a function
// notes.forEach(function (item, index) {
//     console.log(item)
//     console.log(index)
// })

// for (let count = 0; count < notes.length; count++){
//     console.log(notes[count])
// }


// ----------------------------------------- Searching arrays -----------------------------------------

// notes.indexOf('Note 2') // -1 means not found in the array (using === to compare)

// Note: we can't use indexOf for objects an object is not equal other object even if they have the same entities. {} != {}
// but object1 = {} and object2 = object1 then object1 === object2 is true because they are on the same reference now.

// findIndex used for objects looking for the first match after finding it its stop excuting.
// const index = notes.findIndex(function(note,index){
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })

// console.log(notes)
// console.log(index)
// console.log(notes[notes.length - 1])

// function findNote(notes, noteTitle){
//     return notes.find(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// function findNote(notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'office modification')
// console.log(note)

// ----------------------------------------- Filtering arrays -----------------------------------------

// Generates a new array contains the object that our condition is applied on
// function findNotes(notes, query){
//     return notes.filter(function(note, index){
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
// }

// console.log(findNotes(notes, 'eating'))

// ----------------------------------------- Sorting Arrays -----------------------------------------

const sortNotes = function(notes){
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)