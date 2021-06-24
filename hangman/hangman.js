// silly Challenge

const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function(){

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    // const letterUnguessed = this.word.filter((letter)=>{
    //     return this.guessedLetters.includes(letter)
    // })
    // const finished = letterUnguessed.length === 0

    /*    First way
    
    let finished = true

    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter)){
            
        }else{
            finished = false
    }})
*/
    if(this.remainingGuesses === 0){
        this.status = 'failed'
    }else if (finished){
        this.status = 'finished'
    }else {
        this.status = 'playing'
    }

}

Hangman.prototype.getStatusMessage = function(){
    if(this.status === 'playing'){
        return `Gusses left ${this.remainingGuesses}`
    }else if (this.status === 'failed'){
        return `Nice try! the word was "${this.word.join('')}".`
    }else {
        return 'Great work you guessed the work'
    }
}

Hangman.prototype.getPuzzel = function(){
    let puzzel = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' '){
            puzzel += letter
        }else{
            puzzel += '*'
        }
    })

    return puzzel
}

Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(this.status !== 'playing'){
        return 
    }

    if(isUnique){
        this.guessedLetters.push(guess)
    }
    if(isUnique && isBadGuess){
        this.remainingGuesses--
    }

    this.calculateStatus()
}

