// ==================== I. NPM PACKAGES && IMPORTS ====================

const inquirer = require('inquirer');
const Hangman = require('./Hangman.js');

// ==================== II. FUNCTIONS && DECLARATIONS ====================

// Pushes messages to bottom of screen
const ui = new inquirer.ui.BottomBar();
let game = {};

// Prompts user to begin game
function start() {
    inquirer.prompt([{
        type: "list",
        name: "letter",
        message: "Would you like to play Hangman: EDM edition?",
        choices: ["YES", "NO"]
    }]).then(function(answer) {
        //
        if (answer.letter === "YES") {
            game = new Hangman();
            game.startGame();
            userInput();
        } else if (answer.letter === "NO") {
            console.log("Type 'node app.js' if you want to play later!");
            process.exit();
        }
    })
}

// User guesses a letter
function userInput() {
    inquirer.prompt([{
        type: "input",
        name: "answer",
        message: `Guess a letter! You have ${game.guesses} remaining...`,
        validate: userInputValidate
    }]).then(function(answer) {
        game.testUserInput(answer);
        ui.log.write(game.word.wordText);
        console.log(game.terminalMessage);
        if (game.isRunning) {
            userInput();
        } else if (!game.isRunning) {
            restart();
        }
    })
}

// Validates user input to ensure one letter
function userInputValidate(input) {
    if (input.length === 1)
        return true;
    else
        return "Please use the correct format and enter one character at a time.";
}

// Restarts game
function restart() {
    inquirer.prompt([{
        type: "list",
        name: "restart",
        message: "Do you want to restart?",
        choices: ["YES", "NO"]
    }]).then(function(answer) {
        if (answer.restart === "YES") {
            start();
        } else if (answer.restart === "NO") {
            console.log('Thanks for playing Hangman!');
            process.exit();
        }
    })
}

// ==================== III. MAIN PROCESS ====================

start();