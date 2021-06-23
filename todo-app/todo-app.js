'use strict'

// const todos = [{
//     text: 'Order cat food',
//     isComplete: true
// },{
//     text: 'Clean kitchen',
//     isComplete: false
// },{
//     text: 'Buy food',
//     isComplete: true
// },{
//     text: 'Do word',
//     isComplete: false
// },{
//     text: 'Exercise',
//     isComplete: true
// }]

let todos = getSavedTodos()

filters = {
    searchText: '',
    hideCompleted: false
}


// Check for existing data


// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'You have 2 todos left'
// document.querySelector('body').appendChild(newParagraph)

// const incompleteTodos = todos.filter(function(todo){
//     return !todo.isComplete
// })

// const summary = document.createElement('h2')
// summary.textContent = `You have ${incompleteTodos.length} todos left.`
// document.querySelector('body').appendChild(summary)

// todos.forEach(function(todo){
//     const para = document.createElement('p')
//     para.textContent = todo.text
//     document.querySelector('#todos').appendChild(para)
// })

// document.querySelector('button#add-todo').addEventListener('click',function(e){
//     console.log('A new todo has been added')
// })

//  document.querySelector('input#add-todo').addEventListener('input',function(e){
//      console.log(e.target.value)
//  })


// filter Challenge.
// 1. Setup a div contain for todos.
// 2. Setup filters (searchText) and wire up a new filter input to change it.
// 3. Creat a renderTodos function to render and rerender the latest filtered data.

// filters = {
//     searchText: '',
//     hideCompleted: false
// }


// -------Now in todo-functions app------------ 

// function renderTodos(todos, filters){
//     const filteredTodos = todos.filter(function(todo){
//         const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//         const hideCompletedMatch = !filters.hideCompleted || !todo.isComplete
//         return searchTextMatch && hideCompletedMatch
//     })
    
//     // let filteredTodos = todos.filter(function(todo){
//     //     return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     // })
    
//     // filteredTodos = filteredTodos.filter(function(todo){
//     //     return !filters.hideCompleted || !todo.isComplete 
//     //     if(filters.hideCompleted){
//     //         return !todo.isComplete
//     //     }else{
//     //         return true
//     //     }
//     // })

//     // filteredTodos.forEach(function(todo){
//     //     const todoEl = document.createElement('p')
//     //     todoEl.textContent = todo.text
//     //     document.querySelector('#todos').appendChild(todoEl)
//     // })

//     // we filtered the previously filtered list by completed and incompleted todos..
//     const incompleteTodos = filteredTodos.filter(function(todo){
//         return !todo.isComplete
//     })

//     document.querySelector('#todos').innerHTML = ''

//     const summary = document.createElement('h2')
//     summary.textContent = `You have ${incompleteTodos.length} todos left.`
//     document.querySelector('#todos').appendChild(summary)
    
//     filteredTodos.forEach(function(todo){
//         const para = document.createElement('p')
//         para.textContent = todo.text
//         document.querySelector('#todos').appendChild(para)
//     })
// }


document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

// Form Challenge

document.querySelector('#form').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({id: uuidv4(), text: e.target.elements.newTodo.value, isComplete: false})
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

renderTodos(todos, filters)

document.querySelector('#hide-completed').addEventListener('change',function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})





















// const ps = document.querySelectorAll('p')

// ps.forEach(function(p){
//     if(p.textContent.toLowerCase().includes('the')){
//         p.remove()
//     }
// })
