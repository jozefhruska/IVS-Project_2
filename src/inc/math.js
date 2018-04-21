function PercentCheck(x,y)
{
	
	if (/^\d+(\.\d+)?%$/.test(x)) {
    x = x.replace(/[^a-zA-Z0-9 ]/g, "");
	if (y == "") return (x)
	else return (x/100*y)
	}
	else return(x);
}



	


/**
 * Addition
 *
 * @param {number} a First number to add
 * @param {number} b Second number to add
 * @returns {number|false} Sum of arguments 'a' and 'b' or false if arguments are not correct
 */
function TQadd(a, b) {
	a = PercentCheck(a,"");
	b = PercentCheck(b,a);
    a = Number(a);
    b = Number(b);

    return ((a != null && b != null) ? a + b : false)
}

/**
 * Subtraction
 *
 * @param {number} a First number from which will be subtracted
 * @param {number} b Second number which will be substracted
 * @returns {number|false} Difference of arguments 'a' and 'b' or false if arguments are not correct
 */
function TQsub(a, b) {
	a = PercentCheck(a,"");
	b = PercentCheck(b,a);
    a = Number(a);
    b = Number(b);

    return ((a != null && b != null) ? a - b : false)
}

/**
 * Division
 *
 * @param {number} a First number (Divident)
 * @param {number} b Second number (Divisor)
 * @returns {number|false} Division of arguments 'a' and 'b' or false if arguments are not correct
 */
function TQdiv(a, b) {
	a = PercentCheck(a,"");
	b = PercentCheck(b,a);
    a = Number(a);
    b = Number(b);

    return ((a != null && b != null && b != 0) ? a / b : false)
}

/**
 * Multiplication
 *
 * @param {number} a First number to multiplicate
 * @param {number} b Second number to multiplicate
 * @returns {number|false} Multiplication of arguments 'a' and 'b' or false if arguments are not correct
 */
function TQmul(a, b) {
	a = PercentCheck(a,"");
	b = PercentCheck(b,a);
    a = Number(a);
    b = Number(b);

    return ((a != null && b != null) ? a * b : false)
}

/**
 * Factorial
 *
 * @param {number} a
 * @returns {number, false} Factorial of argument 'a' or false if argument is not correct
 */
function TQfact(a) {
	a = PercentCheck(a,"");
    a = Number(a);

    if (a != null && a >= 0) {
        for (let i = a - 1; i > 0; i--) {
            a = a * i;
        }
    } else return false;
}

/**
 * Exponentation
 *
 * @param {number} a First number (Base)
 * @param {number} n Second number (Exponent)

 * @returns {number|false} Argument 'a' to the power of 'n'
 */
function TQpow(a, n) {
	a = PercentCheck(a,"");
	b = PercentCheck(b,a);
    a = Number(a);
    n = Number(n);

    if (a != null && n != null) {
        if (n > 0) {
            let b = a;
            for (let i = n; i > 1; i--) {
                b = b * a;
            }
        } else if (n < 0) {
            let b = a;
            if (a==0){
                return false;
            }
            for (let i = Math.abs(n); i > 1; i--) {
                b = b * a;
            }
            b = 1 / b;
        } else {
            b = 1;
        }

        return b;
    } else return false;
}

/**
 * Square root - using Newton's method
 *
 * @param {number} a
 * @returns {number|false} Square root of argument 'a' or false if argument is a negative number
 */
function TQsqrt(a) {
	a = PercentCheck(a,"");
    a = Number(a);

    let guess = Math.ceil(a / 2);
    let nextguess;
    let num_itr = 0;

    if (a != null && a < 0) return false;
    else {
        if (a == 0) {
            nextguess = 0;
        } else {
            while (num_itr < 8) {
                nextguess = guess - ((TQpow(guess, 2) - a) / (2 * (guess)));
                guess = nextguess;
                num_itr++;
            }
        }
    }
    return nextguess;
}

/**
 * @todo Function sinus
 */
function TQsin(a) {
    let negA=false;
    let negSin=false;
    if (a<0){
        negA=true;
    }
    a=Math.abs(a);
    if (a>360){
        while (a>360){
            a=a-360;
        }
    }
    if (a==0 || a==180 || a==360){
        return 0;
    }
    if (a==90 || a==270){
        return 1;
    }
    if (a>90 && a<180){
        a=180-a;
    }
    else if (a>180 && a<270){
        a=a-180;
        negSin=true;
    }
    else {
        a=360-a;
        negSin=true;
    }

    a=(Math.PI/180)*a;
    a=a-TQpow(a,3)

}

//Export library functions
module.exports = {
    TQadd: TQadd,
    TQsub: TQsub,
    TQmul: TQmul,
    TQdiv: TQdiv,
    TQfact: TQfact,
    TQpow: TQpow,
    TQsqrt: TQsqrt,

};