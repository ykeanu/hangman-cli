// ==================== I. NPM PACKAGES && IMPORTS ====================

const Word = require('./Word.js');

// ==================== II. FUNCTIONS && DECLARATIONS ====================

// Hangman constructor function
function Hangman() {
	this.isRunning = false,
	this.guesses = 12,
	this.word = new Word()
}

// Begins game and changes game state
Hangman.prototype.startGame = function() {
	this.isRunning = true;
	this.word.generateData();
}


Hangman.prototype.checkAnswer = function(answer) {
	if(this.isRunning === true) {
		this.guesses--;
		if(this.word.letterArray.indexOf(answer.answer) !== -1) {
			this.displayMessage = 'CORRECT!!!';
			this.revealLetter(answer.answer);
		}
		else if(this.word.letterArray.indexOf(answer.answer) === -1)
			this.displayMessage = 'WRONG!!!';
		this.word.stringLetters();
		this.gameOverCheck();
	}
}

Hangman.prototype.revealLetter = function(answer) {
	this.word.letterObjArray.forEach(function(letter){
		if (letter.letter.indexOf(answer) !== -1) 
			letter.reveal();
	})
}

Hangman.prototype.endGame = function() {
	this.isRunning = false;
}

Hangman.prototype.gameOverCheck = function() {
	if(this.guesses <= 0){
		this.displayMessage = 'You ran out of tries!  Would you like to try again? (y/n)'
		this.endGame();
	}
	else if(this.word.wordText.indexOf('_') === -1) {
		this.displayMessage = 'Congratulations!!!  Would you like to play again (y/n)?'
		this.endGame();
	}
}

// ==================== III. EXPORT TO app.js ====================

module.exports = Hangman;