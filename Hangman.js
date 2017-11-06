// ==================== I. NPM PACKAGES && IMPORTS ====================

const Word = require('./Word.js');

// ==================== II. FUNCTIONS && DECLARATIONS ====================

// Hangman constructor function
function Hangman() {
	this.isRunning = false,
	this.guesses = 12,
	this.word = new Word()
}

// Begins game and changes game state to runnig
Hangman.prototype.startGame = function() {
	this.isRunning = true;
	this.word.pinLetters();
}

// Determines if answer is correct or incorrect
Hangman.prototype.testUserInput = function(answer) {
	if(this.isRunning === true) {
		if(this.word.letterArray.indexOf(answer.answer) !== -1) {
			this.terminalMessage = 'CORRECT!!!';
			this.showLetter(answer.answer);
		}
		else if(this.word.letterArray.indexOf(answer.answer) === -1)
			this.terminalMessage = 'WRONG!!!';
			this.guesses--;
		this.word.combineLetters();
		this.gameOver();
	}
}

// Displays correct letters onto terminal
Hangman.prototype.showLetter = function(answer) {
	this.word.letterObjectArray.forEach(function(letter){
		if (letter.letter.indexOf(answer) !== -1) 
			letter.show();
	})
}


// Displays message if user runs out of guesses or successfuly completes word
Hangman.prototype.gameOver = function() {
	if(this.guesses <= 0){
		this.terminalMessage = 
			`You ran out of gueses!!! The answer was: 
			${this.word.random}. Would you like to try again?`;
		this.endGame();
	}
	else if(this.word.wordText.indexOf('_') === -1) {
		this.terminalMessage = 
			`Congratulations!!! You guessed the correct answer: 
			${this.word.random}. Would you like to play again?`;
		this.endGame();
	}
}

// Changes game state to NOT running
Hangman.prototype.endGame = function() {
	this.isRunning = false;
}

// ==================== III. EXPORT TO app.js ====================

module.exports = Hangman;