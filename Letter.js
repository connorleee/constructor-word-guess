// Letter constructor
// Create a string value to store under an index position
// create boolean value to store whether a letter has been guessed or not
// create function that returns string value if guessed, or placeholder
// create funciton that takes a character as argument and checks it against strings.
    // if matched, change boolean to display string

const Letter = function(targetLetter){
    this.correctLetter = targetLetter
    this.isGuessed = false
    this.display = function(){
        if(this.isGuessed){
            return this.correctLetter
        } else {
            return "_ "
        }
    }
    this.boolCheck = function(guess){
        if(guess === this.correctLetter){
            this.isGuessed = true
        }
    }
}

module.exports = Letter