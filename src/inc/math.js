/**
 * Addition
 *
 * @param {number} a First number to add
 * @param {number} b Second number to add
 * @returns {number|false} Sum of arguments 'a' and 'b' or false if arguments are not correct
 */
function TQadd(a, b) {
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
    a = Number(a);

    if (a != null && a >= 0) {
        for (var i = 0; i < a; i++) {
            a = a * (a - i);
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
    a = Number(a);
    n = Number(n);

    if (a != null && n != null) {
        if (n > 0) {
            var b = a;
            for (var i = n; i > 1; i--) {
                b = b * a;
            }
        } else if (n < 0) {
            var b = a;
            for (var i = Math.abs(n); i > -1; i++) {
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
    a = Number(a);

    var guess = Math.ceil(a / 2);
    var nextguess;
    var num_itr = 0;

    if (a != null && a < 0) return false;
    else {
        while (('' + guess).length < 8 || num_itr < 8) {

            nextguess = guess - ((TQpow(guess, 2) - a) / (2 * (guess)));
            guess = nextguess;
            num_itr++;
        }
    }
    return nextguess;
}

/**
 * @todo Function logarithm
 */
function TQlog(a) {

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