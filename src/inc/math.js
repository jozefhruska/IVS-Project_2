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
 * @file Mathematical library
 * @author Dominika Pločicová <xploci00@vutbr.cz>
 * @author Tomáš Čikel <xcikel00@vutbr.cz>
 */
'use strict'

/**
 * Addition
 *
 * @param {number} a First number to add
 * @param {number} b Second number to add
 * @returns Sum of arguments 'a' and 'b' or false if arguments are not correct
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
 * @returns Difference of arguments 'a' and 'b' or false if arguments are not correct
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
 * @returns Division of arguments 'a' and 'b' or false if arguments are not correct
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
 * @returns Multiplication of arguments 'a' and 'b' or false if arguments are not correct
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
 * @returns Factorial of argument 'a' or false if argument is not correct
 */
function TQfact(a) {
    a = Number(a);
    if(a<=50){

    if (a != null && a >= 0) {
        for (let i = a - 1; i > 0; i--) {
            a = a * i;
        }
        return a;
    } else return false;

}else return false;

}

/**
 * Exponentation
 *
 * @param {number} a First number (Base)
 * @param {number} n Second number (Exponent)

 * @returns Argument 'a' to the power of 'n'
 */
function TQpow(a, n) {
    a = Number(a);
    n = Number(n);
    let b = a;
    if (a != null && n != null) {
        if (n > 0) {
            for (let i = n; i > 1; i--) {
                b = b * a;
            }
        } else if (n < 0) {
            if (a == 0) {
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
 * @returns Square root of argument 'a' or false if argument is a negative number
 */
function TQsqrt(a) {
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
    return (a != null) ? nextguess : false;
}


/**
 * Sinus 
 * 
 * @param {number} a
 * @returns Sin of argument 'a' or flase if no argument was given 
 */
function TQsin(a) {
    a = Number(a);
    let negA = false;
    let negSin = false;
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
        if(negA==true){ 
            return -1
        }
        else{
        return 1;
        }
    }
    if(a == 270){ 
        if(negA==true){ 
            return 1;
        }
        else{
        return -1;
        }
    }
    if (a > 90 && a < 180) {
        a = 180 - a;
    } else if (a > 180 && a < 270) {
        a = a - 180;
        negSin = true;
    } else if(a>270 && a<360){
        a = 360 - a;
        negSin = true;
    }

    a = (Math.PI / 180) * a;
    a = a - TQpow(a, 3) / TQfact(3) + TQpow(a, 5) / TQfact(5) - TQpow(a, 7) / TQfact(7) + TQpow(a,9) / TQfact(9) - TQpow(a,11) / TQfact(11);
    if (negSin == true) {
        a = 0 - a;
    }
    if (negA == true) {
        a = 0 - a;
    }

    
    return (a != null) ? a : false;
}


/**
 * Cosinus
 * 
 * @param {number} a 
 * @returns Cosinus of argument 'a' or false if now argument was given
 */


function TQcos(a) {
    a = Number(a);
    let negA = false;
    let negCos = false;
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
    if(a ==180){
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
    } else if(a>270 && a<360) {
        a = 360 - a;
    }
    a = (Math.PI / 180) * a;
    a = 1 - TQpow(a, 2) / TQfact(2) + TQpow(a, 4) / TQfact(4) - TQpow(a, 6) / TQfact(6) + TQpow(a,8) / TQfact(8) - TQpow(a,10) / TQfact(10);
    if (negCos == true) { 
        a = 0 - a;
    }
    if (negA == true) {
        a = 0 - a;
    }
    return (a != null) ? a : false;

}

/**
 * Tangens
 * 
 * @param {number} a 
 * @returns Tangens of argument 'a' or false if a given angle is undefined
 */

function TQtan(a){
    let negA=false;
    a=Number(a);
    if (a < 0){
        negA=true;
    }
    a = Math.abs(a);
    while(a > 360){
        a=a-360;
    }
    if(a==0 || a==180 || a==360){
        return 0;
    }
    else if (a==45){
        if(negA==true){
            return -1;
        }
        else{
        return 1;
        } 
    }
    else if(a==90 || a==270){
        return false;
    }
    else{
        a=TQsin(a)/TQcos(a);
        return a;
    }

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