// Create array of new Letter objects representing letters of the word to guess. (string length)
// create function that returns string representing the word. calls the function on each letter object
    // displays character or underscore
    // concatenates all together
// create function that takes a character as argument and calls the guess function on each leatter object

var Letter = require("Letter")

var Word = function(targetWord){
    letterArr = []
    for (let i = 0; i < targetWord.length; i++) {
        letterArr.push(targetWord[i])        
    }
    this.wordStatus = function(){
        for (let j = 0; j < letterArr.length; j++) {
            var currentWord = ""
            letterArr[j].displayString(guess)
            currentWord += letterArr[j].guessCheck()
        }
    }
    
}