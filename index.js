const inquirer = require("inquirer")
const prompt = require("prompt")
const Word = require("./Word")
const Letter = require("./Letter")

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

    inquirePrompts()

}

function inquirePrompts(){
    inquirer
        .prompt([
            {
                name: "guess",
                message: "Guess a letter!",
                type: "input",
                choices: allowableGuesses
            }
        ])
        .then(answers => {
            console.log(answers.guess)
            // Use user feedback for... whatever!!
        });
}

playGame()