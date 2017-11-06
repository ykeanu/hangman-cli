// ==================== NODE PACKAGES ====================
const inquirer = require('inquirer');
// const app = require('./game.js');

// ==================== FUNCTIONS && DECLARATIONS ====================
let game = {};

function start() {
    inquirer.prompt([
    {
        type: "list",
        name: "letter",
        message: "Would you like to play hangman?",
        choices: ["YES", "NO"]
    }
    ]).then(function(answer) {
        if (answer.letter === "YES") {
            // game = new Hangman();
            // game.startGame();
            userInput();
        } else if (answer.letter === "NO") {
            console.log("Retype 'node app.js' if you want to play later!")
        }
    });
}

function userInput() {
    
    console.log("HI");
}

// ==================== MAIN PROCESS ====================
start();