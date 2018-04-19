'use strict'

var LOG_PREFIX = "calculator.js: "

// Get Timber dependency
const timber = require('electron-timber');

class Calculator {
	constructor() {
		this.isClear = true;
		this.isDecimal = false;
		this.activeOp = new Array(4).fill(false);
		this.history = new Array();
	}

	setActiveOp(index) {
		for (let i = 0; i < this.activeOp.length; i++) {
			this.activeOp[i] = false;
		}

		this.activeOp[index] = true;
		timber.log(LOG_PREFIX + "SetActiveOp: " + index);
	}

	clearActiveOp() {
		for (let i = 0; i < this.activeOp.length; i++) {
			this.activeOp[i] = false;
		}

		timber.log(LOG_PREFIX + "ClearActiveOp: " + "ok");
	}

	getActiveOp() {
		for (let i = 0; i < calculator.activeOp.length; i++) {
			if (this.activeOp[i]) return i;
		}

		return false;
	}

	clear() {
		this.isClear = true;
		this.isDecimal = false;
		this.activeOp = [false, false, false, false];
		this.history = new Array();
	}

	append(value) {
		this.isClear = true;
		this.history.push(value);
		timber.log(LOG_PREFIX + "Append \"" + value + "\" on index " + (this.history.length - 1));
	}
}

// Export class
module.exports = Calculator;