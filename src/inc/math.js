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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * @file Mathematical library
 * @author Dominika Pločicová <xploci00@vutbr.cz>
 * @author Tomáš Čikel <xcikel00@vutbr.cz>
 */
'use strict'


function PercentCheck(x, y) {
    //RegExp for removing characters which we dont need
    if (/^\d+(\.\d+)?%$/.test(x)) {
        x = x.replace(/[^a-zA-Z0-9 ]/g, "");
        if (y == "") return (x)
        else return (x / 100 * y);
    } else return (x);
}


/**
 * Addition
 *
 * @param {number} a First number to add
 * @param {number} b Second number to add
 * @returns Sum of arguments 'a' and 'b' or undefined if arguments are not correct
 */

function TQadd(a, b) {
    a = PercentCheck(a, "");
    b = PercentCheck(b, a);
    a = Number(a);
    b = Number(b);

    return ((a != null && b != null) ? a + b : undefined)
}

/**
 * Subtraction
 *
 * @param {number} a First number from which will be subtracted
 * @param {number} b Second number which will be substracted
 * @returns Difference of arguments 'a' and 'b' or false if arguments are not correct
 */

function TQsub(a, b) {
    a = PercentCheck(a, "");
    b = PercentCheck(b, a);
    a = Number(a);
    b = Number(b);

    return ((a != null && b != null) ? a - b : undefined)
}

/**
 * Division
 *
 * @param {number} a First number (Divident)
 * @param {number} b Second number (Divisor)
 * @returns Division of arguments 'a' and 'b' or undefined if arguments are not correct
 */

function TQdiv(a, b) {
    a = PercentCheck(a, "");
    b = PercentCheck(b, a);
    a = Number(a);
    b = Number(b);


    return ((a != null && b != null && b != 0) ? a / b : undefined)
}

/**
 * Multiplication
 *
 * @param {number} a First number to multiplicate
 * @param {number} b Second number to multiplicate
 * @returns Multiplication of arguments 'a' and 'b' or false if arguments are not correct
 */

function TQmul(a, b) {
    a = PercentCheck(a, "");
    b = PercentCheck(b, a);
    a = Number(a);
    b = Number(b);

    return ((a != null && b != null) ? a * b : undefined)
}

/**
 * Factorial
 *
 * @param {number} a
 * @returns Factorial of argument 'a' or undefined if argument is not correct
 */

function TQfact(a) {
    a = Number(a);
    if (a < 80) {
        if (a == 0 || a == 1)
            return 1;
        if (a != null && a >= 0 && (a % 1 == 0)) {
            for (let i = a - 1; i > 0; i--) {
                a = a * i;
            }
            return a;
        } else return undefined;
    } else return undefined;
}

/**
 * Exponentation
 *
 * @param {number} a First number (Base)
 * @param {number} n Second number (Exponent)

 * @returns Argument 'a' to the power of 'n' or undefined if a argument is too big or if no argument was given
 */

function TQpow(a, n) {
    a = Number(a);
    n = Number(n);
    let b = a;

    if (a == 1)
        return 1;
    if (a != null && n != null && (n % 1 == 0)) {
        if (n > 0) {
            for (let i = n; i > 1; i--) {
                b = b * a;
                if (b > 7.1569457e118) {
                    return undefined;
                }
            }
        } else if (n < 0) {
            if (a == 0) {
                return undefined;
            }
            for (let i = Math.abs(n); i > 1; i--) {
                b = b * a;
                if (b > 7.1569457e118) {
                    return undefined;
                }
            }
            b = 1 / b;
        } else {
            b = 1;
        }
        return b;
    } else return undefined;
}

/**
 * Square root - using Newton's method
 *
 * @param {number} a
 * @returns Square root of argument 'a' or undefined if argument is a negative number
 */

function TQsqrt(a) {
    a = Number(a);
    let guess = Math.ceil(a / 2);
    let nextguess;
    let num_itr = 0;

    if (a != null && a < 0) return undefined;
    else {
        if (a == 0) {
            nextguess = 0;
        } else {
            while (num_itr < 50) {
                nextguess = guess - ((TQpow(guess, 2) - a) / (2 * (guess)));
                guess = nextguess;
                num_itr++;
            }
        }
    }
    return (a != null) ? nextguess : undefined;
}

/**
 * Sinus 
 * 
 * @param {number} a
 * @returns Sin of argument 'a' or undefined if no argument was given 
 */

function TQsin(a) {
    a = Number(a);
    let negA = false;
    let negSin = false;
    let mOne = 2;
    let result = 0;

    if (a < 0) {
        negA = true;
    }
    a = Math.abs(a);
    while (a > 360) {
        a = a - 360;
    }
    if (a == 0 || a == 180 || a == 360) {
        return 0;
    }
    if (a == 90) {
        if (negA == true) {
            return -1
        } else {
            return 1;
        }
    }
    if (a == 270) {
        if (negA == true) {
            return 1;
        } else {
            return -1;
        }
    }
    if (a > 90 && a < 180) {
        a = 180 - a;
    } else if (a > 180 && a < 270) {
        a = a - 180;
        negSin = true;
    } else if (a > 270 && a < 360) {
        a = 360 - a;
        negSin = true;
    }

    a = (Math.PI / 180) * a;
    for (let i = 1; i < 70; i += 2) {
        result = result + (TQpow(-1, mOne) * TQpow(a, i) / TQfact(i));
        mOne++;
    }
    a = result;
    a = a.toPrecision(14);
    if (negSin == true) {
        a = 0 - a;
    }
    if (negA == true) {
        a = 0 - a;
    }
    return (a != null) ? a : undefined;
}

/**
 * Cosinus
 * 
 * @param {number} a 
 * @returns Cosinus of argument 'a' or undefined if now argument was given
 */

function TQcos(a) {
    a = Number(a);
    let negA = false;
    let negCos = false;
    let mOne = 2;
    let result = 0;

    if (a < 0) {
        negA = true;
    }
    a = Math.abs(a);
    while (a > 360) {
        a = a - 360;
    }

    if (a == 0 || a == 360) {
        return 1;
    }
    if (a == 180) {
        return -1;
    }
    if (a == 90 || a == 270) {
        return 0;
    }
    if (a > 90 && a < 180) {
        a = 180 - a;
        negCos = true;
    } else if (a > 180 && a < 270) {
        a = a - 180;
        negCos = true;
    } else if (a > 270 && a < 360) {
        a = 360 - a;
    }
    a = (Math.PI / 180) * a;
    for (let i = 0; i < 71; i += 2) {
        result = result + (TQpow(-1, mOne) * TQpow(a, i) / TQfact(i));
        mOne++;
    }
    a = result;
    a = a.toPrecision(14);
    if (negCos == true) {
        a = 0 - a;
    }
    if (negA == true) {
        a = 0 - a;
    }
    return (a != null) ? a : undefined;
}

/**
 * Tangens
 * 
 * @param {number} a 
 * @returns Tangens of argument 'a' or undefined if no argument was given or the angle is "undefined" 
 */

function TQtan(a) {
    let negA = false;
    let negTan = false;
    let result = 0;
    a = Number(a);

    if (a < 0) {
        negA = true;
    }
    a = Math.abs(a);
    while (a > 360) {
        a = a - 360;
    }
    if (a == 90 || a == 270) {
        return undefined;
    }
    if (a == 0 || a == 180 || a == 360) {
        return 0;
    }
    if (a == 45 || a == 225) {
        if (negA == true) {
            return -1;
        } else {
            return 1;
        }
    }
    if (a == 135 || a == 315) {
        if (negA == true) {
            return 1;
        } else {
            return -1;
        }
    }
    if (a > 90 && a < 180) {
        a = 180 - a;
        negTan = true;
    } else if (a > 180 && a < 270) {
        a = a - 180;
    } else if (a > 270 && a < 360) {
        a = 360 - a;
        negTan = true;
    }
    a = (Math.PI / 180) * a;
    for (let i = 20; i > 1; i--) {
        result = (a * a) / ((2 * i - 1) - result);
    }
    result = a / (1 - result);
    a = result;
    a = a.toPrecision(14);
    if (negTan == true) {
        a = 0 - a;
    }
    if (negA == true) {
        a = 0 - a;
    }
    return (a != null) ? a : undefined;
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
    TQsin: TQsin,
    TQcos: TQcos,
    TQtan: TQtan
};