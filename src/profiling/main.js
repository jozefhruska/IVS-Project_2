const getStdin = require('get-stdin');

// Import Math library
const MathLib = require('../inc/math');

var numArray = new Array();
getStdin().then(str => {
	str.split(" ").forEach(function(number) {
		numArray.push(Number.parseFloat(number));
	});

	let avg = 0;
	for (let i = 0; i < numArray.length; i++) {
		avg += numArray[i];
	}
	avg = MathLib.TQdiv(avg, numArray.length);

	let s = 0;
	for (let i = 0; i < numArray.length; i++) {
		s += MathLib.TQpow(MathLib.TQsub(numArray[i], avg), 2);
	}

	s = MathLib.TQsqrt(MathLib.TQdiv(s, MathLib.TQsub(numArray.length, 1)));

	process.stdout.write(Number.parseFloat(s).toString());
});