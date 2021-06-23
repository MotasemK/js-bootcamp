// const notes = [{
//     title: 'My next trip',
//     body: 'I would like to go to spain'
// },{
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better'
// },{
//     title: 'Office modification',
//     body: 'Get a new seat'
// }]

// ----------- Creating the app from scratch using local Storage -------------------
let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy:'byEdited' // we make it the default sort method
}




// DOM - Document Object Model

// Query and remove. 
// const p = document.querySelector('p') // Matches the first match found.
// p.remove()

// Query all and remove.
// const ps = document.querySelectorAll('p') // gives node list
// ps.forEach(function(p){
//     // p.textContent = '****'
//     // console.log(p.textContent)
//     // p.remove()
// })

// Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JS' // now we need to add it to html
// document.querySelector('body').appendChild(newParagraph)

// Event handlers 
// when we have access to a specific element we can add event listners by providing the event we want to listen for and a code to run when the event actually happen
// document.querySelector('button').addEventListener('click', function(e){ // e targeted the element which event fires on
//     e.target.textContent = 'The button was clicked'
// })

// Better targeting specific item
document.querySelector('#creat-note').addEventListener('click',function(e){
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title:'',
        body:'',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

// document.querySelector('#remove-all').addEventListener('click',function(e){ // query selector for id (#)
//     document.querySelectorAll('.note').forEach(function(note){              // querySelectorAll for classes (.)
//         note.remove()
//     })                                          
// })

// -- Single --
// p
// #replace
// .item

// -- Multiple -- chain selecting
// p#order : paragraphs with id order only.
// button.inventory : buttons with class inventory only.
// h1#title.application : h1 with id title and class application.
// h1.application#title : h1 with class application and id title.



// Filtering Data

// const filters = {
//     searchText: ''
// }

// --------------- Local Storage ---------------

// Create or update
// localStorage.setItem('location', 'Amman')    //Key , Value

// Read
// console.log(localStorage.getItem('location'))    //Key

// Delete specific data
// localStorage.removeItem('location')     // Key

// Delete all data
// localStorage.clear()

// const user = {
//     name: 'Motasem',
//     age: 24
// }

// JSON java script object notation : to convert objects into a strings.
// const userJSON = JSON.stringify(user) 
// localStorage.setItem('user',userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)



renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value // inputs using value to access their contents rather than textContent in h1 or p ..
    renderNotes(notes, filters)
})

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault() // we tell the browser dont do anything we will handle it by JS 
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''

// })

// Check Boxes

// document.querySelector('#for-fun').addEventListener('change',function(e){
//     console.log(e.target.checked)
// })

document.querySelector('#filter-by').addEventListener('change',function(e){
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})

// // Unix epoch - January 1st 1970 00:00:00

// // we will use it when creating a note
// const now = new Date()
// const timestamp = now.getTime()

// // we will use it after we read the data from local storage
// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// const dateOne = new Date('june 22 2021 13:14:20')
// const dateTwo = new Date()
// const dateOneTimestamp = dateOne.getTime()
// const dateTwoTimestamp = dateTwo.getTime()

// if(dateOneTimestamp < dateTwoTimestamp){
//     console.log(dateOne.toString())
// }else if(dateTwoTimestamp < dateOneTimestamp){
//     console.log(dateTwo.toString())
// }

// Check moment library docs
// const now = moment()
// now.add(1,'week').subtract(20, 'days')
// console.log(now.toString())

// // November 3rd, 2003
// console.log(now.format('MMMM Do YYYY'))

// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

//Challenge

// const birthDay = moment()
// birthDay.year('1996').month('december').date('1')
// console.log(birthDay.format('MMM D YYYY'))
// console.log(birthDay.fromNow())


