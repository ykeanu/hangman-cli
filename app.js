// ==================== NODE PACKAGES ====================
const inquirer = require('inquirer');
const app = require('./game.js');
let game = {};

// ==================== FUNCTIONS && DECLARATIONS ====================

function startGame() {
    inquirer.prompt([ /* Pass your questions in here */ 
    	{
            type: 'list',
            name: 'letter',
            message: 'Would you like to play hangman?',
            choices: ['YES', 'NO']
        }
    ]).then(function(answer) {
        app new
        app.startGame();
        userInput();

        // Use user feedback for... whatever!!
    });

}

function userInput() {
	console.log("HI");
}



// ==================== MAIN PROCESS ====================
startGame();