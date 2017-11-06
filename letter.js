// ==================== I. FUNCTIONS && DECLARATIONS ====================

// Letter constructor function
function Letter(letter) {
	this.letter = letter;
	this.placeHolder = '_';
}

// Replaces placeholder with correct letter
Letter.prototype.show = function() {
	this.placeHolder = this.letter;
}

// ==================== II. EXPORT TO Word.js ====================

module.exports = Letter;