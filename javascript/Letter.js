// Letter constructor
// Create a string value to store under an index position
// create boolean value to store whether a letter has been guessed or not
// create function that returns string value if guessed, or placeholder
// create funciton that takes a character as argument and checks it against strings.
    // if matched, change boolean to display string

var Letter = function(targetLetter){
    this.correctLetter = targetLetter
    this.isGuessed = false
    this.guessCheck = function(){
        if(this.isGuessed){
            return this.correctLetter
        } else {
            return "_ "
        }
    }
    this.displayString = function(guess){
        if(guess === this.correctLetter){
            this.isGuessed = true
        }
    }
}


// Initial testing below

// var targetLetter1 = new Letter("T")
// var targetLetter2 = new Letter("E")
// var targetLetter3 = new Letter("X")
// var targetLetter4 = new Letter("T")

// var guess = process.argv[2]

// targetLetter1.displayString(guess)
// console.log(targetLetter1.guessCheck())

module.exports = Letter