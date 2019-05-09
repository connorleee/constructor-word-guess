// Create array of new Letter objects representing letters of the word to guess. (string length)
// create function that returns string representing the word. calls the function on each letter object
    // displays character or underscore
    // concatenates all together
// create function that takes a character as argument and calls the guess function on each letter object

const Letter = require("./Letter")

const Word = function(targetWord){
    this.letterArr = []
    for (let i = 0; i < targetWord.length; i++) {
        let letter = new Letter(targetWord[i])
        this.letterArr.push(letter)        
    }

    this.wordStatus = function(){
        let currentWord = ""
        for (let j = 0; j < this.letterArr.length; j++) {
            currentWord += this.letterArr[j].display()
        }

        return currentWord
    }
    
    this.guessCheck = function(character){
        for (let k = 0; k < this.letterArr.length; k++) {
            this.letterArr[k].boolCheck(character)
        }

        return "guess: " + character
    }
}

// Testing below
    // let word1 = new Word("torment")

    // console.log(word1.wordStatus())
    // console.log(word1.guessCheck('t'))
    // console.log(word1.wordStatus())

module.exports = Word