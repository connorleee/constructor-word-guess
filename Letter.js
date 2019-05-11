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