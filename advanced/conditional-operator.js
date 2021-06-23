// const myAge = 24
// const message = myAge >= 18 ? 'you can vote' : 'You can not vote'
// console.log(message)

const myAge = 24
const showPage = () => {
    console.log('Showing the page.')
}
const showErrorPAge = () => {
    console.log('showing the error page.')
}

myAge >= 21 ? showPage() : showErrorPAge()

const team = ['Tyler' , 'Porter', 'Motasem', 'fayez', 'Bashar']

team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log('Too many people on your team')

