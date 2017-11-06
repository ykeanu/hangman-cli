// ==================== I. NODE PACKAGES ====================

// ==================== II. FUNCTIONS && DECLARATIONS ====================

function Hangman() {
	this.gameState = false,
	this.guesses = 12,
	this.displayMessage = '';
	this.word = new word(),
}

Hangman.prototype.startGame = function() {
	this.gameState = true,
}

// ==================== III. MAIN PROCESS ====================

