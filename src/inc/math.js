// Math library
// Passing the value as a String










function TQadd(a,b){ 
    return a+b;
} 


function TQsub(a,b){ 
    return a-b;
} 


/*
@brief If var "b"is 0 throws an exepction
*/
function TQdiv(a,b){ 
    if (b==0){
        throw exception;
        return 0;
    }
    else { 
    return a/b;
    }
} 



function TQmul(a,b){ 
    return a*b;
}




function TQfact(a){  
    if (a<0){ 
    throw exception;
        return 0;
    } 
    else { 
    for(var i=0; i<a;i++){ 
        a=a*(a-i);
    
    }
    }  
    return a;

}


/*
 @brief Power function: take var "a" and "n" as input.
        Var "a" is the value which functio powers with var "n" 
*/

function TQpow(a,n){
    
    if(n>0){ 
    var b=a;
        for( var i=n; i>1;i--){ 
            b=b*a;
        }
    } 

    else if (n<0){ 
    var b=a;
        for ( var i=Math.abs(n); i>-1;i++){ 
            b=b*a;
        }
        b=1/b;
    }

    else {
        b=1;
    }

         

 return b;
}



/*
  @brief Sqrt function using Newton's method
  Returns exception if a input is a negative number
  Stops the calculation if a number of it
 */

function TQsqrt(a){  
 var guess= Math.ceil(a/2);
 var nextguess;
 var num_itr=0;

 if(a<0){ 
     throw exception;
     return 0;
 }
 else {
 while((''+guess).length < 8 || num_itr<8 ){ 

        nextguess=guess - ((TQpow(guess,2)-a)/(2*(guess)));
        guess=nextguess;
        num_itr++;
 } 
}  
return nextguess;

}

/*
@todo Function logarithm
*/

function TQlog(a){ 
       
}



module.exports = {
    TQadd: TQadd,
    TQsub: TQsub,
    TQmul: TQmul,
    TQdiv: TQdiv,
    TQfact: TQfact,
    TQpow: TQpow,
    TQsqrt: TQsqrt,

};