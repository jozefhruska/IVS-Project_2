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

// Get all elements
const keys = $("*[data-key]");
const EQ = $("#EQ");
const displayMain = $("#display-main");
const displayHistory = $("#display-history");
const menuToggle = $("#menu-toggle");
const buttonSQRT = $("#1");
const buttonPOW = $("#2");
const buttonSIN = $("#3");
const buttonFACT = $("#4");


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

// Refresh calculator screen after action
function refresh() {
	calculator.isDecimal = false;
	calculator.isPercent = false;
	displayMain.html(calculator.history[calculator.history.length - 1]);

	switch (calculator.history.length) {
		case 0:
			displayHistory.children().eq(0).hide();
			displayHistory.children().eq(1).hide();
			displayHistory.children().eq(2).hide();
			break;
		case 1:
			displayHistory.children().eq(0).hide();
			displayHistory.children().eq(1).hide();
			displayHistory.children().eq(2).show();
			break;
		case 2:
			displayHistory.children().eq(2).hide();
			displayHistory.children().eq(1).show();
			displayHistory.children().eq(0).show();
			break;
		case 3:
			displayHistory.children().eq(2).show();
			displayHistory.children().eq(1).show();
			displayHistory.children().eq(0).show();
			break;
		default:
			displayHistory.children().eq(2).show();
			displayHistory.children().eq(1).show();
			displayHistory.children().eq(0).show();
	}

	displayHistory.children().eq(0).html(calculator.history[calculator.history.length - 4])
	displayHistory.children().eq(1).html(calculator.history[calculator.history.length - 3])
	displayHistory.children().eq(2).html(calculator.history[calculator.history.length - 2])
}

// Set OnClick listener for every key but EQ
keys.click(function () {

	let result;
	switch (this.dataset.key) {
		case "0":
			toggleClass("");
			displayMain.html(0);
			calculator.clear();
			refresh();
			break;
		case "1":
			displayMain.html(displayMain.html() * -1)
			break;
		case "2":
			if (!calculator.isPercent)
				{
				calculator.isDecimal = true;
				calculator.isPercent = true;
				if (displayMain.html() == "0" || calculator.isClear == true) {
					calculator.isClear = false;
					displayMain.html($(this).children("span").html())
				}
				else displayMain.append($(this).children("span").html());
				}
			break;
			break;
		case "3":
			toggleClass("red");

			if (!calculator.getActiveOp()) {
				if (!calculator.history.length) calculator.append(displayMain.html());
				calculator.setActiveOp(0);
				refresh();
			} else {
				if (!calculator.isClear) {
					switch (calculator.getActiveOp()) {
						case 0:
							calculator.append(MathLib.TQdiv(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 1:
							calculator.append(MathLib.TQmul(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 2:
							calculator.append(MathLib.TQsub(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 3:
							calculator.append(MathLib.TQadd(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
					}
				}

				calculator.setActiveOp(0);
				refresh();
			}
			break;
		case "7":
			toggleClass("green");

			if (!calculator.getActiveOp()) {
				if (!calculator.history.length) calculator.append(displayMain.html());
				calculator.setActiveOp(1);
				refresh();
			} else {
				if (!calculator.isClear) {
					switch (calculator.getActiveOp()) {
						case 0:
							calculator.append(MathLib.TQdiv(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 1:
							calculator.append(MathLib.TQmul(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 2:
							calculator.append(MathLib.TQsub(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 3:
							calculator.append(MathLib.TQadd(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
					}
				}

				calculator.setActiveOp(1);
				refresh();
			}
			break;
		case "11":
			toggleClass("blue");

			if (!calculator.getActiveOp()) {
				if (!calculator.history.length) calculator.append(displayMain.html());
				calculator.setActiveOp(2);
				refresh();
			} else {
				if (!calculator.isClear) {
					switch (calculator.getActiveOp()) {
						case 0:
							calculator.append(MathLib.TQdiv(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 1:
							calculator.append(MathLib.TQmul(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 2:
							calculator.append(MathLib.TQsub(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 3:
							calculator.append(MathLib.TQadd(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
					}
				}

				calculator.setActiveOp(2);
				refresh();
			}
			break;
		case "15":
			toggleClass("yellow");

			if (!calculator.getActiveOp()) {
				if (!calculator.history.length) calculator.append(displayMain.html());
				calculator.setActiveOp(3);
				refresh();
			} else {
				if (!calculator.isClear) {
					switch (calculator.getActiveOp()) {
						case 0:
							calculator.append(MathLib.TQdiv(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 1:
							calculator.append(MathLib.TQmul(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 2:
							calculator.append(MathLib.TQsub(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
						case 3:
							calculator.append(MathLib.TQadd(calculator.history[calculator.history.length - 1], displayMain.html()));
							break;
					}
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
	switch (calculator.getActiveOp()) {
		case 0:
			result = MathLib.TQdiv(calculator.history[calculator.history.length - 1], displayMain.html());
			break;
		case 1:
			result = MathLib.TQmul(calculator.history[calculator.history.length - 1], displayMain.html());
			break;
		case 2:
			result = MathLib.TQsub(calculator.history[calculator.history.length - 1], displayMain.html());
			break;
		case 3:
			result = MathLib.TQadd(calculator.history[calculator.history.length - 1], displayMain.html());
			break;
	}

	calculator.clearActiveOp();
	calculator.append(result);
	refresh();
});

// Menu toggle onClick listener
menuToggle.click(function () {
	$(this.parentNode).children("ul").slideToggle(300);
});

//Buttons for the additional functions
buttonSQRT.click(function() {
calculator.clearActiveOp();
calculator.append(MathLib.TQsqrt(displayMain.html()));
refresh();
});

buttonPOW.click(function() {
calculator.clearActiveOp();
calculator.append(MathLib.TQpow(displayMain.html()));
refresh();
});

buttonSIN.click(function() {
calculator.clearActiveOp();
calculator.append(MathLib.TQsin(displayMain.html()));
refresh();
});

buttonFACT.click(function() {
calculator.clearActiveOp();
calculator.append(MathLib.TQfact(displayMain.html()));
refresh();
});
