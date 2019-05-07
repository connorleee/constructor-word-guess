// Create array of new Letter objects representing letters of the word to guess. (string length)
// create function that returns string representing the word. calls the function on each letter object
    // displays character or underscore
    // concatenates all together
// create function that takes a character as argument and calls the guess function on each letter object

var Letter = require("Letter")

var Word = function(targetWord){
    letterArr = []
    for (let i = 0; i < targetWord.length; i++) {
        var letter = new Letter(targetWord[i])
        letterArr.push(letter)        
    }

    this.wordStatus = function(){
        for (let j = 0; j < letterArr.length; j++) {
            var currentWord = ""
            letterArr[j].boolCheck(guess)
            currentWord += letterArr[j].display()
        }

        return currentWord
    }
    
    this.guessCheck = function(character){
        for (let k = 0; k < letterArr.length; k++) {
            letterArr[k].boolCheck
        }
    }
}

// Testing below



module.exports = Words