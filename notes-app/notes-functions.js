// console.log(uuidv4())

// all files share the same global variables name

// Read existing notes from local storage.

function getSavedNotes(){
    // Check for existing saved data
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    }else{
        return []
    }
}

// Save the notes to localStorage

function saveNotes(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list.
function removeNote(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    })
    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

//Generate the DOM structure for a note 

function generateNoteDOM(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Setup the reomve note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click',function(){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if(note.title.length> 0 ){
        textEl.textContent = note.title
    }else{
        textEl.textContent = "Unnamed note"
    }
    textEl.setAttribute('href',`/edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

// Sort your notes by one of three ways
function sortNotes(notes, sortBy){
    if(sortBy === 'byEdited'){
        return notes.sort(function(a, b){
            if(a.updatedAt > b.updatedAt){ // if so then a more recent
                return -1 // put a first
            }else if(a.updatedAt < b.updatedAt){
                return 1
            }else{
                return 0
            }

        })
    }else if(sortBy === 'byCreated'){
        return notes.sort(function(a, b){
            if(a.createdAt > b.createdAt){
                return -1
            }else if(a.createdAt < b.createdAt){
                return 1
            }else{
                return 0
            }
        }
        )
    }else if(sortBy === "alphabetical"){
        return notes.sort(function(a, b){
            if(a.title.toLowerCase().trim() < b.title.toLowerCase().trim()){
                return -1
            }else if(a.title.toLowerCase().trim() > b.title.toLowerCase().trim()){
                return 1
            }else{
                return 0
            }
        })
    }
    
    {
        return notes
    }
}

// Render Application Notes.
const renderNotes = function(notes, filters){
    notes = sortNotes(notes, filters.sortBy)
    // We want to render only notes passes the filter.
    const filteredNotes = notes.filter(function(note){
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function(note){
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Generate the last edited message
function generateLastEdited(timestamp){
    return `Last Edited ${moment(timestamp).fromNow()}`
}