'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId
})

// exchange note === undefined to be !note only according to our knowledge in truthy and falsy values
if(!note){
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)
titleElement.addEventListener('input',function(e){
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input',function(e){
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click',function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage',(e) => {
    // to check e insert a debugger her and access it in the browser to see the object properties
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note){
            return note.id === noteId
        })
        // changing note === undefined to be !note 
        if(!note){
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})

