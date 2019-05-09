const inquirer = require("inquirer")
const prompt = require("prompt")
const Word = require("./Word")
// const Letter = require("./Letter")

// In prompt, make sure to add cases that won't accept anything that is not a letter.
// Figure out logic with cap or lower case

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
const allowableGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
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

    inquirer
        .prompt([
            {
                name: "guess",
                message: "Guess a letter!",
                type: "input",
                // choices: allowableGuesses
            }
        ])
        .then(answers => {
            const input = answers.guess
            
            // replaces "_" with correct letter if correct and switches isGuessed to true
            target.guessCheck(input)
            
            console.log(target.letterArr)

            inquirePrompts(target)
        });
}

playGame()