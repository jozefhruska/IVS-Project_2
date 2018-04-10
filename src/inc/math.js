// Math library
// Passing the value as a String

str 
var operand = ['+','-','*','/']

for(var i = 0; i<str.length; i++){ 
    isNaN(i);

}



function TQadd(a,b){ 
    return a+b;
} 


function TQsub(a,b){ 
    return a-b;
} 



function TQdiv(a,b){ 
    return a/b;
} 


function TQmul(a,b){ 
    return a*b;
}

function TQfact(a){   //return factorial of an var a
    for(var i=a; i>1;--i){ 
        a=a*i;
    }
    return a;

}

function TQpow(a,n){
    var b;
    for( var i=n; i>1;i--){ 
     b=a*a;
 }
 return b;
}

function TQsqrt(a){  //getting sqrt of var "a" using newton's method
 var guess= Math.ceil(a/2);
 var nextguess;
 var 

 while(nextguess.length < 10){ 

nextguess=guess - (TQpow(guess,2)/derative);
guess=nextguess;



function derative(x){
    
    var dx = dx || .00001;
    var p= TQpow(dx+x,2);
    return (p-TQpow(x))/dx;

}



return nextguess;


 } 
}


