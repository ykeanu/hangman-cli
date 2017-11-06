// ==================== I. FUNCTIONS && DECLARATIONS ====================

// Letter constructor function
function Letter(letter) {
	this.letter = letter;
	this.display = '_';
}

// Displays letter
Letter.prototype.reveal = function() {
	this.display = this.letter;
}

// ==================== II. EXPORT TO Word.js ====================

module.exports = Letter;