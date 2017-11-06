// ==================== I. NPM PACKAGES && IMPORTS ====================

const Letter = require('./Letter.js');

// ==================== II. FUNCTIONS && DECLARATIONS ====================

// Word constructor function
function Word() {
	this.wordBank = ["Diplo", "MuraMasa", "Porter", "Chainsmokers", "Zedd"];
	this.random = this.wordBank[Math.floor(Math.random() * this.wordBank.length)].toLowerCase();
	this.letterArray = [];
	this.letterObjArray = [];
	this.wordText = '';
}

Word.prototype.generateWords = function() {
	this.letterArray = this.random.split('');
}

Word.prototype.createLetters = function() {
	this.letterArray.forEach(function(l){
		let newLetter = new Letter(l);
		this.letterObjArray.push(newLetter);
	}.bind(this));
	this.stringLetters();
}

Word.prototype.generateData = function() {
	this.generateWords();
	this.createLetters();
}

Word.prototype.stringLetters = function() {
	this.wordText = this.letterObjArray.map(function(letter) {
		return letter.display;
	}).join(' ');
}

// ==================== III. EXPORT TO Hangman.js ====================

module.exports = Word;