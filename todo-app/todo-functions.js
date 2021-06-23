'use strict'

// Fetch existing todos from local Storage

function getSavedTodos() {
    const todosJSON = localStorage.getItem('todos')

    // adding try catch blocks to check the local storage data validity.
    try{
        // Truthy and falsy logic and ternary operator method
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch(e){
        return []   // [] is an valid JSON data
    }
    
   
    // if(todosJSON !== undefined){
    //     // todos =  JSON.parse(todosJSON)
    //     return JSON.parse(todosJSON)
    // }else{
    //     return []
    // }
}

// Save todos to localStorage
function saveTodos(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
function renderTodos(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.isComplete
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.isComplete
    })

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    generateSummaryDOM(incompleteTodos)
    
    filteredTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
})

    generateTodoDOM(filteredTodos)
    
}

function removeTodo(id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
}

function toggleCheck(id){
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if(todo !== undefined){
        todo.isComplete = !todo.isComplete
    }
}

// Get the DOM elements for an individual note

function generateTodoDOM(todo){
        const todoEl = document.createElement('div')
        const todoText = document.createElement('span')
        const removeButton = document.createElement('button')
        const todoCheck = document.createElement('input')

        // Setup todo checkbox
        // todoCheck.type = "checkbox"
        todoCheck.setAttribute('type','checkbox')
        todoEl.appendChild(todoCheck)
        todoCheck.checked = todo.isComplete
        todoCheck.addEventListener('change',function(e){
            toggleCheck(todo.id)
            // todoCompleted(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })

        // Setup todo text
        todoText.textContent = todo.text
        todoEl.appendChild(todoText)

        // Setup the remove button
        removeButton.textContent = 'x'
        todoEl.appendChild(removeButton)
        removeButton.addEventListener('click',function(){
            removeTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })
        return todoEl
}

// Get the DOM elements for list summary.
function generateSummaryDOM(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}
