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
 * @file Main calculator screen - renderer process
 * @author Jozef Hruška <xhrusk25@vutbr.cz>
 * @author Patrik Strnad <xstrna11@vutbr.cz>
 */
'use strict'

var LOG_PREFIX = "index.js: ";

// Import Math library
import * as MathLib from "../math";

// Get all dependencies
window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
window.Bootstrap = require('bootstrap')
const timber = require('electron-timber');
import fitty from 'fitty';

// Get all elements
const keys = $("*[data-key]");
const EQ = $("#EQ");
const displayMain = $("#display-main");
var displayFitty = fitty('#display-main');
const displayHistory = $("#display-history");
const menuToggle = $("#menu-toggle");
const menuKeys = $("*[data-menu]");

// Initialize calculator
var Calculator = require("../calculator");
var calculator = new Calculator();

// Toggle between colors on displayHistory and EQ elements
function toggleClass(color) {
	displayHistory.removeClass("red");
	displayHistory.removeClass("green");
	displayHistory.removeClass("blue");
	displayHistory.removeClass("yellow");
	displayHistory.addClass(color);

	EQ.removeClass("red");
	EQ.removeClass("green");
	EQ.removeClass("blue");
	EQ.removeClass("yellow");
	EQ.addClass(color);
}

// Parse and trim number to 6 digits
function parseAndTrim(number, digits = 6) {
	number = Number.parseFloat(number);
	let length = number.toString().length;
	return length > digits ? number.toPrecision(digits) : number;
}

// Refresh calculator screen after action
function refresh() {
	calculator.isDecimal = false;
	calculator.isPercent = false;
	calculator.cache = null;

	displayMain.css("font-size", "65px");

	if (calculator.history.length) displayMain.html(parseAndTrim(calculator.history[calculator.history.length - 1], 7));
	else {
		displayMain.html(0);
		keys.eq(0).children("span").html("C");
	 }

	switch (calculator.history.length) {
		case 0:
		case 1:
			displayHistory.children("#history-1").hide();
			displayHistory.children("#history-2").hide();
			displayHistory.children("#history-3").hide();
			break;
		case 2:
			displayHistory.children("#history-1").hide();
			displayHistory.children("#history-2").hide();
			displayHistory.children("#history-3").show();

			displayHistory.children("#history-3").html(parseAndTrim(calculator.history[calculator.history.length - 2]));
			break;
		case 3:
			displayHistory.children("#history-1").hide();
			displayHistory.children("#history-2").show();
			displayHistory.children("#history-3").show();

			displayHistory.children("#history-2").html(parseAndTrim(calculator.history[calculator.history.length - 3]));
			displayHistory.children("#history-3").html(parseAndTrim(calculator.history[calculator.history.length - 2]));
			break;
		case 4:
			displayHistory.children("#history-1").show();
			displayHistory.children("#history-2").show();
			displayHistory.children("#history-3").show();

			displayHistory.children("#history-1").html(parseAndTrim(calculator.history[calculator.history.length - 4]));
			displayHistory.children("#history-2").html(parseAndTrim(calculator.history[calculator.history.length - 3]));
			displayHistory.children("#history-3").html(parseAndTrim(calculator.history[calculator.history.length - 2]));
			break;
		default:
			displayHistory.children("#history-1").show();
			displayHistory.children("#history-2").show();
			displayHistory.children("#history-3").show();

			displayHistory.children("#history-1").html(parseAndTrim(calculator.history[calculator.history.length - 4]));
			displayHistory.children("#history-2").html(parseAndTrim(calculator.history[calculator.history.length - 3]));
			displayHistory.children("#history-3").html(parseAndTrim(calculator.history[calculator.history.length - 2]));
	}

	if (!calculator.getActiveOp()) toggleClass("");
}

// Set OnClick listener for every key but EQ
keys.click(function () {

	let result;
	switch (this.dataset.key) {
		case "0":
			if (!calculator.isClear) {
				$(this).children("span").html("AC")
				displayMain.html("0");
				calculator.isClear = true;
				calculator.isDecimal = false;
				displayMain.css("font-size", "65px");
			} else {
				calculator.clear();
				refresh();
			}
			break;
		case "1":
			displayMain.html(parseAndTrim(displayMain.html(), 14) * -1)
			break;
		case "2":
			if (!calculator.isPercent) {
				calculator.isDecimal = true;
				calculator.isPercent = true;
				if (displayMain.html() == "0" || calculator.isClear == true) {
					calculator.isClear = false;
					displayMain.html($(this).children("span").html())
				} else displayMain.append($(this).children("span").html());
			}
			break;
			break;
		case "3":
			toggleClass("red");

			if (!calculator.getActiveOp()) {
				if (!calculator.history.length) calculator.append(parseAndTrim(displayMain.html(), 14));
				calculator.setActiveOp(0);
				refresh();
			} else {
				if (!calculator.isClear) {
					switch (calculator.getActiveOp()) {
						case 0:
							if (calculator.cache != null) result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 1:
							if (calculator.cache != null) result = MathLib.TQmul(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQmul(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 2:
							if (calculator.cache != null) result = MathLib.TQsub(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQsub(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 3:
							if (calculator.cache != null) result = MathLib.TQadd(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQadd(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
					}

					calculator.append(result);
				}

				calculator.setActiveOp(0);
				refresh();
			}
			break;
		case "7":
			toggleClass("green");

			if (!calculator.getActiveOp()) {
				if (!calculator.history.length) calculator.append(parseAndTrim(displayMain.html(), 14));
				calculator.setActiveOp(1);
				refresh();
			} else {
				if (!calculator.isClear) {
					switch (calculator.getActiveOp()) {
						case 0:
							if (calculator.cache != null) result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 1:
							if (calculator.cache != null) result = MathLib.TQmul(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQmul(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 2:
							if (calculator.cache != null) result = MathLib.TQsub(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQsub(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 3:
							if (calculator.cache != null) result = MathLib.TQadd(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQadd(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
					}

					calculator.append(result);
				}

				calculator.setActiveOp(1);
				refresh();
			}
			break;
		case "11":
			toggleClass("blue");

			if (!calculator.getActiveOp()) {
				if (!calculator.history.length) calculator.append(parseAndTrim(displayMain.html(), 14));
				calculator.setActiveOp(2);
				refresh();
			} else {
				if (!calculator.isClear) {
					switch (calculator.getActiveOp()) {
						case 0:
							if (calculator.cache != null) result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 1:
							if (calculator.cache != null) result = MathLib.TQmul(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQmul(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 2:
							if (calculator.cache != null) result = MathLib.TQsub(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQsub(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 3:
							if (calculator.cache != null) result = MathLib.TQadd(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQadd(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
					}

					calculator.append(result);
				}

				calculator.setActiveOp(2);
				refresh();
			}
			break;
		case "15":
			toggleClass("yellow");

			if (!calculator.getActiveOp()) {
				if (!calculator.history.length) calculator.append(parseAndTrim(displayMain.html(), 14));
				calculator.setActiveOp(3);
				refresh();
			} else {
				if (!calculator.isClear) {
					switch (calculator.getActiveOp()) {
						case 0:
							if (calculator.cache != null) result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 1:
							if (calculator.cache != null) result = MathLib.TQmul(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQmul(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 2:
							if (calculator.cache != null) result = MathLib.TQsub(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQsub(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
						case 3:
							if (calculator.cache != null) result = MathLib.TQadd(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
							else result = MathLib.TQadd(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
							break;
					}

					calculator.append(result);
				}

				calculator.setActiveOp(3);
				refresh();
			}
			break;

		case "18":
			if (!calculator.isDecimal) {
				calculator.isDecimal = true;
				if (displayMain.html() == "0" || calculator.isClear == true) {
					calculator.isClear = false;
					displayMain.html($(this).children("span").html())
				} else displayMain.append($(this).children("span").html());
			}
			break;

		default:
			if (displayMain.html() == "0" || calculator.isClear == true) {
				calculator.isClear = false;
				displayMain.html($(this).children("span").html())
			} else displayMain.append($(this).children("span").html());
	}
});

// EQ button onClick listener
EQ.click(function () {
	let result;

	if (calculator.cache != null) {
		result = MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14));
		menuKeys.eq(1).toggleClass("active");
	}

	switch (calculator.getActiveOp()) {
		case 0:
			if (calculator.cache != null) result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
			else result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
			break;
		case 1:
			if (calculator.cache != null) result = MathLib.TQmul(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
			else result = MathLib.TQmul(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
			break;
		case 2:
			if (calculator.cache != null) result = MathLib.TQsub(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
			else result = MathLib.TQsub(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
			break;
		case 3:
			if (calculator.cache != null) result = MathLib.TQadd(calculator.history[calculator.history.length - 1], MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14)));
			else result = MathLib.TQadd(calculator.history[calculator.history.length - 1], parseAndTrim(displayMain.html(), 14));
			break;
	}

	calculator.append(result);
	calculator.clearActiveOp();
	refresh();
});

// Menu toggle onClick listener
menuToggle.click(function () {
	$(this.parentNode).children("ul").slideToggle(300);
});

// Menu - list onClick listeners
menuKeys.click(function () {
	let result;

	switch (this.dataset.menu) {
		case "1":
			result = MathLib.TQsqrt(parseAndTrim(displayMain.html(), 14));
			break;
		case "3":
			result = MathLib.TQsin(parseAndTrim(displayMain.html(), 14));
			break;
		case "4":
			result = MathLib.TQcos(parseAndTrim(displayMain.html(), 14));
			break;
		case "5":
			result = MathLib.TQtan(parseAndTrim(displayMain.html(), 14));
			break;
		case "6":
			result = MathLib.TQfact(parseAndTrim(displayMain.html(), 14));
			break;
	}

	// POW
	if (this.dataset.menu == "2") {
		$(this).toggleClass("active");

		if (calculator.cache == null) {
			calculator.cache = parseAndTrim(displayMain.html(), 14);
			calculator.isClear = true;
		} else {
			result = MathLib.TQpow(calculator.cache, parseAndTrim(displayMain.html(), 14));
			switch (calculator.getActiveOp()) {
				case 0:
					result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], result);
					break;
				case 1:
					result = MathLib.TQmul(calculator.history[calculator.history.length - 1], result);
					break;
				case 2:
					result = MathLib.TQsub(calculator.history[calculator.history.length - 1], result);
					break;
				case 3:
					result = MathLib.TQadd(calculator.history[calculator.history.length - 1], result);
					break;
			}

			calculator.append(result);
			calculator.clearActiveOp();
			refresh();
		}
	} else {
		if (calculator.getActiveOp()) {
			switch (calculator.getActiveOp()) {
				case 0:
					result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], result);
					break;
				case 1:
					result = MathLib.TQmul(calculator.history[calculator.history.length - 1], result);
					break;
				case 2:
					result = MathLib.TQsub(calculator.history[calculator.history.length - 1], result);
					break;
				case 3:
					result = MathLib.TQadd(calculator.history[calculator.history.length - 1], result);
					break;
			}
		}

		calculator.append(result);
		calculator.clearActiveOp();
		refresh();
	}
});

// History onClick listeners
$("#history-1").click(function () {
	calculator.clearActiveOp();
	calculator.undo(3);
	refresh();
});

$("#history-2").click(function () {
	calculator.clearActiveOp();
	calculator.undo(2);
	refresh();
});

$("#history-3").click(function () {
	calculator.clearActiveOp();
	calculator.undo(1);
	refresh();
});