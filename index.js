const inquirer = require("inquirer")
const Word = require("./Word")

const wordList = [
    "audi",
    "bmw",
    "cadillac",
    "chevrolet",
    "chrysler",
    "dodge",
    "ferrari",
    "ford",
    "honda",
    "jaguar",
    "jeep",
    "lamborghini",
    "lexus",
    "mazda",
    "mercedes",
    "nissan",
    "porsche",
    "subaru",
    "tesla",
    "toyota",
    "volkswagon",
    "volvo"
]
let playWord


function rndWord() {
    let choicesQty = wordList.length
    let choiceIndex = Math.floor(Math.random() * choicesQty)
    playWord = wordList[choiceIndex]

    return playWord
}

function playGame() {
    rndWord()
    console.log(playWord) /* Here for testing */

    // Define target word object from the rndWord
    const TargetWord = new Word(playWord)

    inquirePrompts(TargetWord)
}

// used in the every() method for the condition where user guesses all letters. boolean.
function endCase(value) {
    return value.isGuessed === true
}

function inquirePrompts(target) {
    // condition for while loop. checks to see if every letter is guessed
    let isEnded = target.letterArr.every(endCase)
    console.log(isEnded)

    console.log(target.wordStatus())

    if (isEnded) {
        playGame()
    }

    inquirer
        .prompt([
            {
                name: "guess",
                message: "Guess a letter!",
                type: "input",
                validate: function(value){
                    if(target.allowableGuesses.includes(value)){
                        return true
                    }
                }
            }
        ])
        .then(answers => {
            const input = answers.guess

            // replaces "_" with correct letter if correct and switches isGuessed to true
            target.guessCheck(input)

            console.log(target.allowableGuesses)

            inquirePrompts(target)

        });
}

playGame()