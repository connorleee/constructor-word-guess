// Letter constructor
// Create a string value to store under an index position
// create boolean value to store whether a letter has been guessed or not
// create function that returns string value if guessed, or placeholder
// create funciton that takes a character as argument and checks it against strings.
    // if matched, change boolean to display string

const Letter = function(targetLetter){
    this.correctLetter = targetLetter
    this.isGuessed = false

    // displays letter or _ depending if the letter is guessed
    this.display = function(){
        if(this.isGuessed){
            return this.correctLetter
        } else {
            return "_ "
        }
    }

    // checks if the guess matches the letter
    this.boolCheck = function(guess){
        if(guess === this.correctLetter){
            this.isGuessed = true
        }
    }
}

// Testing Below

    // let guess1 = process.argv[2]
    // let target = new Letter("s")

    // console.log(target.isGuessed)
    // console.log(target.display())

    // target.boolCheck(guess1)

    // console.log(target.isGuessed)
    // console.log(target.display())

module.exports = Letter