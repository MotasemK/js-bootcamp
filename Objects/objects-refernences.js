// let myAccount = {
//     name: 'Motasem Khalefa',
//     expenses: 0,
//     income: 0
// }

// function addExpense(account, amount){
//     account.expenses = account.expenses + amount
//     console.log(account)
// }

// addExpense(myAccount, 2.5)
// console.log(myAccount)

// Manipulating done inside the function for the passed onject will be 
// reflected on the original object if we manipulate the props which
// are inside the object but declaring the whole object by a new value
// this action will unbind the connection and creating a new ongject 
// because the memorey pointer now pointing in a different place now

// if one object = another changes on props only will be reflected to 
// the another object but changing the whole object will unbind these two objects


//challenge

// addIncome
// resetAccount
// getAccountSummary
// Account for andrew has $900. $1000 in income. $100 in expenses.

let myAccount = {
    name:'Motasem',
    expenses: 0,
    income: 0
}

function addIncome(account,amount){
    account.income = amount
}

function addExpense(account, amount){
    account.expenses = amount
}

function resetAccount(account){
    account.income = 0
    account.expenses = 0
}

function getAccountSummary(account){
    console.log(`Account for $${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses`)
}

getAccountSummary(myAccount)

addIncome(myAccount,1000)

addExpense(myAccount, 100)

getAccountSummary(myAccount)

resetAccount(myAccount)

getAccountSummary(myAccount)

