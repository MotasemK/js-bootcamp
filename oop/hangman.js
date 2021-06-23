// silly Challenge

const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c','e']
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

const game1 = new Hangman('cat', 2)
console.log(game1.getPuzzel())

const game2 = new Hangman('new jersey', 4)
console.log(game2.getPuzzel())