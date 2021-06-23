// const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do word', 'Exercise']

// 1. Convert array to array of objects -> text, completed.
// 2. Creat function to remove the todo by text value.

const todos = [{
    text: 'Order cat food',
    isComplete: true
},{
    text: 'Clean kitchen',
    isComplete: false
},{
    text: 'Buy food',
    isComplete: true
},{
    text: 'Do word',
    isComplete: false
},{
    text: 'Exercise',
    isComplete: true
}]

function deleteTodo(todo, todoText){
    const index = todo.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}

function getThingsTodo(todo){
    return todo.filter(function (todo){
        const isCompleted = !todo.isComplete
        return isCompleted
        // or return !todo.isComplete
    })
}

// console.log(false > true ) // false

function sortTodos(todos){
    todos.sort(function(a, b){ // the function inside the sort tells sort what to do because we are dealing with objects
        if (a.isComplete < b.isComplete){       // or the condition is (!a.isComplete && b.isComplete)
            return -1 // if a comes first
        }else if(b.isComplete < a.isComplete){  // or the condition is (!b.isComplete && a.isComplete)
            return 1 // if b comes first 
        }else{
            return 0 // if still as the same
        }
    })
}
sortTodos(todos)
console.log(todos)

// console.log(getThingsTodo(todos))
// deleteTodo(todos, 'buy food')
// console.log(todos)
























// // console.log(`Todo: ${todos[0]}`)
// // console.log(`Todo: ${todos[todos.length - 2]} todos!`)

// // Delete the 3rd item.
// todos.splice(2,1)

// // Add a new item onto the end.
// todos.push('Wash the car')

// // Remove the first item from the list.
// todos.shift()

// console.log(`You have ${todos.length} todos!`)

// // 1. The first item
// // 2. The second item

// todos.forEach(function(item, index){
//     console.log(`${index + 1}. ${item}`)
// })

// for (let i = 0; i < todos.length; i++){
//     console.log(`${i + 1}. ${todos[i]}`)
// }

