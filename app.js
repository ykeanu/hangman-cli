// ==================== i. NODE PACKAGES && FILES ====================

const inquirer = require('inquirer');
const Hangman = require('./Hangman.js');

// ==================== ii. FUNCTIONS && DECLARATIONS ====================

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
            console.log("Retype 'node app.js' if you want to play later!")
        }
    });
}

function userInput() {
    inquirer.prompt([{
            type: "input",
            name: "answer",
            message: `Guess a letter! You have ${game.guesses} remaining...`,
            validate: validateAnswerFormat
        }])
        .then(answer => {
            game.checkAnswer(answer);
            ui.log.write(game.word.wordText);
            console.log(game.displayMessage);
            if (game.isPlaying) {
                userGuess();
            } else if (!game.isPlaying)
                restartGame();
        });
}

function restartGame() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'restart',
            message: game.displayMessage,
            validate: validateRestartFormat
        }])
        .then(answer => {
            if (answer.restart.toLowerCase() === 'y')
                startGame();
            else if (answer.restart.toLowerCase() === 'n') {
                console.log('Thanks for playing!');
                process.exit();
            }
        })
}


function validateAnswerFormat(input) {
    if (input.length === 1)
        return true;
    else
        return 'You can only enter one character at a time';
}


function validateRestartFormat(input) {
    if (input.toLowerCase() !== 'y' && input.toLowerCase() !== 'n')
        return 'You must type y or n';
    else
        return true;
}

// ==================== iii. MAIN PROCESS ====================

start();