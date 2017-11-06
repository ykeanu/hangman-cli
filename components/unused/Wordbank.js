// ==================== I. FUNCTIONS && DECLARATIONS ====================

// Wordbank constructor function
function Wordbank() {
	this.words = ["Diplo", "MuraMasa", "Porter", "Chainsmokers", "Zedd"];
	this.random = this.words[Math.floor(Math.random() * words.length)].toLowerCase();
}

// ==================== II. EXPORT TO Word.js ====================

module.exports = Wordbank;