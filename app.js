// ==================== I. NODE PACKAGES && FILE IMPORTS ====================

const inquirer = require('inquirer');
const Hangman = require('./Hangman.js');

// ==================== II. FUNCTIONS && DECLARATIONS ====================

const ui = new inquirer.ui.BottomBar();
let game = {};

// Prompts user to begin game
function start() {
    inquirer.prompt([{
        type: "list",
        name: "letter",
        message: "Would you like to play hangman?",
        choices: ["YES", "NO"]
    }]).then(function(answer) {
        if (answer.letter === "YES") {
            // game = new Hangman();
            // game.startGame();
            userInput();
        } else if (answer.letter === "NO") {
            console.log("Retype 'node app.js' if you want to play later!");
            process.exit();
        }
    })
}

function userInput() {
    inquirer.prompt([
    	{
            type: "input",
            name: "answer",
            message: `Guess a letter! You have ${game.guesses} remaining...`,
            validate: validateUserInput
        }
        ]).then(function(answer) {
            game.checkAnswer(answer);
            ui.log.write(game.word.wordText);
            console.log(game.displayMessage);
            if (game.isRunning) {
                userGuess();
            } else if (!game.isRunning)
                restart();
        })
}

function validateUserInput(input) {
    if (input.length === 1)
        return true;
    else
        return "Please enter one character at a time.";
}


function restart() {
    inquirer.prompt([
    	{
	        type: "list",
	        name: "restart",
	        message: "Do you want to restart?",
	        choices: ["YES", "NO"]
        }
        ]).then(function(answer) {
            if (answer.restart === "YES") {
                start();
            } else if (answer.restart === "NO") {
                console.log('Thanks for playing!');
                process.exit();
            }
        })
}


// ==================== III. MAIN PROCESS ====================

start();