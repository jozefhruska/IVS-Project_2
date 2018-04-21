/**
 * Copyright 2018 Tough Question
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @file Calculator core class
 * @author Jozef Hruška <xhrusk25@vutbr.cz>
 */

'use strict'

var LOG_PREFIX = "calculator.js: "

// Get Timber dependency
const timber = require('electron-timber');


/**
 * Functions as calculator core. Handles communication with calculator screen.
 *
 * @class Calculator
 */
class Calculator {

	/**
	 * Create an instance of Calculator.
	 *
	 * @constructor
	 * @memberof Calculator
	 */
	constructor() {
		this.isClear = true;
		this.isDecimal = false;
		this.activeOp = new Array(4).fill(false);
		this.history = new Array();
	}

	/**
	 * Clear Calculator to it's default state
	 *
	 * @memberof Calculator
	 */
	clear() {
		this.isClear = true;
		this.isDecimal = false;
		this.activeOp = [false, false, false, false];
		this.history = new Array();
	}

	/**
	 * Set active operator (+, -, /, *)
	 *
	 * @param {number} index Array position of operator (0: /, 1: *, 2: -, 3: +)
	 * @memberof Calculator
	 */
	setActiveOp(index) {
		for (let i = 0; i < this.activeOp.length; i++) {
			this.activeOp[i] = false;
		}

		this.activeOp[index] = true;
		timber.log(LOG_PREFIX + "SetActiveOp: " + index);
	}

	/**
	 * Clear array of operators (sets no active operation)
	 *
	 * @memberof Calculator
	 */
	clearActiveOp() {
		for (let i = 0; i < this.activeOp.length; i++) {
			this.activeOp[i] = false;
		}

		timber.log(LOG_PREFIX + "ClearActiveOp: " + "ok");
	}

	/**
	 * Get the currently active operation
	 *
	 * @returns Operation array position or false if no operation is active
	 * @see setActiveOp
	 * @memberof Calculator
	 */
	getActiveOp() {
		for (let i = 0; i < calculator.activeOp.length; i++) {
			if (this.activeOp[i]) return i;
		}

		return false;
	}

	/**
	 * Append new value to the end of history(results) array
	 *
	 * @param {number} value Newest value(result) returned by calculator
	 * @memberof Calculator
	 */
	append(value) {
		this.isClear = true;
		this.history.push(value);
		timber.log(LOG_PREFIX + "Append \"" + value + "\" on index " + (this.history.length - 1));
	}
}

// Export class
module.exports = Calculator;