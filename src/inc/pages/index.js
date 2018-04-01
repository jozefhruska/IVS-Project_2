'use strict'

var LOG_PREFIX = "index.js: "

// Get all dependencies
window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
window.Bootstrap = require('bootstrap')
const timber = require('electron-timber');

// Get all elements
const keys = document.querySelectorAll("[data-key]");
const EQ = $("#EQ");
const displayMain = $("#display-main");
const displayHistory = $("#display-history");

// Toggle between colors on displayHistory and EQ elements
function toggleClass (color) {
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

// Set OnClick listener for every key but EQ
for (let i = 0; i < keys.length; i++) {
	keys[i].onclick = function (e) {

		switch (i) {
			case 3:
				toggleClass("red");
				break;
			case 7:
				toggleClass("green");
				break;
			case 11:
				toggleClass("blue");
				break;
			case 15:
				toggleClass("yellow");
				break;
		}

		// Log click event - DO NOT DELETE
		timber.log(LOG_PREFIX + "onClick key ID = " + i);
	}
}