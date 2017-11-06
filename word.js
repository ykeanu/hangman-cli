// ==================== I. NPM PACKAGES && IMPORTS ====================

const Letter = require('./Letter.js');

// ==================== II. FUNCTIONS && DECLARATIONS ====================

// Word constructor function
function Word() {
	this.wordBank = ["Diplo", "MuraMasa", "Porter", "Chainsmokers", "Zedd"];
	this.letterArray = [];
	this.letterObjectArray = [];
	this.wordText = '';
}

// Retrieves random word for word bank and splits into array
Word.prototype.randomWord = function() {
	this.random = this.wordBank[Math.floor(Math.random() * this.wordBank.length)].toLowerCase();
	this.letterArray = this.random.split('');
}

// Creates a new letter object and pushes into array
Word.prototype.letterObjects = function() {
	this.letterArray.forEach(function(letter){
		let newLetter = new Letter(letter);
		this.letterObjectArray.push(newLetter);
	}.bind(this));
	this.combineLetters();
}

// Create letter arrays
Word.prototype.pinLetters = function() {
	this.randomWord();
	this.letterObjects();
}

// Converts array into a string to display on terminal
Word.prototype.combineLetters = function() {
	// ES6 map funct
	this.wordText = this.letterObjectArray.map(function(letter) {
		return letter.placeHolder;
	}).join(' ');
}

// ==================== III. EXPORT TO Hangman.js ====================

module.exports = Word;