const Letter = require("./Letter")

const Word = function (targetWord) {

    // allowable guesses used for validation in inquirer
    this.allowableGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    this.remainingIncorrect = 5

    this.correctGuess = true

    this.letterArr = []
    for (let i = 0; i < targetWord.length; i++) {
        let letter = new Letter(targetWord[i])
        this.letterArr.push(letter)
    }

    // Displays the full word state 
    this.wordStatus = function () {
        let currentWord = ""
        for (let j = 0; j < this.letterArr.length; j++) {
            currentWord += this.letterArr[j].display()
        }

        return currentWord
    }

    // checks if the guess matches the letter of any of the letter objects
    this.guessCheck = function (guess) {
        for (let k = 0; k < this.letterArr.length; k++) {
            this.letterArr[k].boolCheck(guess)
        }

        // removes the guessed letter from allowable guesses
        let index = this.allowableGuesses.indexOf(guess)
        this.allowableGuesses.splice(index, 1)
    }
}

module.exports = Word