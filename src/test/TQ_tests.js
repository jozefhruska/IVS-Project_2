QUnit.test("Addition test",function (assert)
{
	var zero=0;
	var normalNumber=123456789;
	var normalNegativeNumber=(-123456789);
	var bigNumber=9.999999999999999e200;
	var bigNegativeNumber=-9.999999999999999e200;
	var difExp1=2.0e10;
	var difExp2=3.5e9;
	
	assert.strictEqual( TQadd(zero,normalNumber),normalNumber,"Add zero test 1" );
	assert.strictEqual( TQadd(zero,normalNegativeNumber),normalNegativeNumber,"Add zero test 2" );
	assert.strictEqual( TQadd(normalNumber,normalNegativeNumber),zero,"Result 0 test 1" );
	assert.strictEqual( TQadd(bigNumber,bigNegativeNumber),zero,"Result 0 test 2" );
	assert.strictEqual( TQadd(bigNumber,bigNumber),1.9999999999999998e201,"Big number twice test 1" );
	assert.strictEqual( TQadd(bigNegativeNumber,bigNegativeNumber),-1.9999999999999998e201,"Big number twice test 2" );
	assert.strictEqual( TQadd(difExp1,difExp2),2.35e10,"Different exponent" );
	assert.notEqual( TQadd(zero,normalNumber),normalNumber+1,"False test - add zero" );
	assert.notEqual( TQadd(normalNumber,normalNegativeNumber),1,"False test - add normal to negative" );
	assert.notEqual( TQadd(normalNumber,normalNegativeNumber),-1,"False test - add normal to negative" );
	assert.notEqual( TQadd(bigNumber,bigNegativeNumber),1,"Flase test - addition of big numbers" );
	assert.notEqual( TQadd(bigNumber,bigNegativeNumber),-1,"Flase test - addition of big numbers" );
	assert.notEqual( TQadd(difExp1,difExp2),23.5e10,"False test - addition different exponents" );
}
);

QUnit.test("Subtraction test",function (assert)
{
	var zero=0;
	var normalNumber=123456789;
	var normalNegativeNumber=(-123456789);
	var bigNumber=9.999999999999999e200;
	var bigNegativeNumber=-9.999999999999999e200;
	var difExp1=2.0e10;
	var difExp2=3.5e9;

	assert.strictEqual( TQsub(zero,normalNumber),normalNegativeNumber,"Subtract from zero test 1" );
	assert.strictEqual( TQsub(zero,normalNegativeNumber),normalNumber,"Subtract from zero test 2" );
	assert.strictEqual( TQsub(normalNumber,zero),normalNumber,"Subtract zero test 1" );
	assert.strictEqual( TQsub(normalNegativeNumber,zero),normalNegativeNumber,"Subtract zero text 2" );
	assert.strictEqual( TQsub(bigNumber,bigNegativeNumber),1.9999999999999998e201,"big number subtraction 1" );
	assert.strictEqual( TQsub(bigNegativeNumber,bigNegativeNumber),zero,"big number subtraction 2" );
	assert.strictEqual( TQsub(bigNumber,bigNumber),zero,"big number subtraction" );
	assert.strictEqual( TQsub(bigNegativeNumber,bigNumber),-1.9999999999999998e201,"big number subtraction" );
	assert.strictEqual( TQsub(difExp1,difExp2),1.65e10,"Different exponent test 1" );
	assert.strictEqual( TQsub(difExp2,difExp1),-1.65e10,"Different exponent test 2" );
	assert.notEqual( TQsub(zero,normalNegativeNumber),normalNegativeNumber,"False test - zero subtraction" );
	assert.notEqual( TQsub(zero,normalNumber),123456789,"False test - zero subtraction" );
	assert.notEqual( TQsub(difExp1,difExp2),1.65e9,"False test - Different exponent" );
}
);

QUnit.test("Multiplication test",function (assert)
{
	var zero=0;
	var normalNumber=123456789;
	var normalNegativeNumber=-123456789;
	var bigNumber=9.999999999999999e200;
	var bigNegativeNumber=-9.999999999999999e200;
	var difExp1=2.0e10;
	var difExp2=3.5e9;
	var difExp3=4.8e20;
	var Pi=3.1415926535897932;
	
	assert.strictEqual( TQmul(zero,normalNumber),zero,"Zero test 1" );
	assert.strictEqual( TQmul(zero,normalNegativeNumber),zero,"Zero test 2" );
	assert.strictEqual( TQmul(zero,bigNegativeNumber),zero,"Zero test 3" );
	assert.strictEqual( TQmul(zero,bigNumber),zero,"Zero test 4" );
	assert.strictEqual( TQmul(normalNumber,normalNegativeNumber),-15241578750190521,"Positive*Negative test 1" );
	assert.strictEqual( TQmul(bigNumber,-1),bigNegativeNumber,"Positive*Negative test 2" );
	assert.strictEqual( TQmul(bigNegativeNumber,-1),bigNumber, "Positive*Negative test 3");
	assert.strictEqual( TQmul(difExp1,difExp2),7e19,"Different exponent test" );
	assert.strictEqual( TQmul(difExp1,difExp3),9.6e30,"Different exponent test" );
	assert.strictEqual( TQmul(Pi,1),Pi,"Pi test" );
	assert.notEqual( TQmul(Pi,1),'3.1415926535897925',"False test - pi 1" );
	assert.notEqual( TQmul(Pi,1),'3.141592653589794',"False test - pi 2" );
	assert.notEqual( TQmul(bigNegativeNumber,-1),bigNegativeNumber, "False test - positive*negative");
}
);

QUnit.test("Division test",function (assert)
{
	var zero=0;
	var normalNumber=123456789;
	var normalNegativeNumber=-123456789;
	var bigNumber=9.999999999999999e200;
	var bigNegativeNumber=-9.999999999999999e200;
	var difExp1=2.0e9;
	var difExp2=4.0e10;
	var difExp3=4.8e20;
	var Pi=3.1415926535897932;

	assert.strictEqual( TQdiv(normalNegativeNumber,normalNumber),-1,"Pos/neg division 1" );
	assert.strictEqual( TQdiv(normalNumber,normalNegativeNumber),-1,"Pos/neg division 2" );
	assert.strictEqual( TQdiv(normalNumber,normalNumber),1,"Normal division" );
	assert.strictEqual( TQdiv(normalNegativeNumber,normalNegativeNumber),1,"Negative division" );
	assert.strictEqual( TQdiv(bigNumber,9),1.111111111111111e200,"big number division" );
	assert.strictEqual( TQdiv(difExp2,difExp1),20,"Different exponent test 1" );
	assert.strictEqual( TQdiv(difExp1,difExp2),0.05,"Different exponent test 1" );
	assert.strictEqual( TQdiv(difExp3,difExp1),2.4e11,"Different exponent test 1" );
	assert.throws( TQdiv(zero,zero),"Exception - division by 0" );
	assert.throws( TQdiv(normalNumber,zero),"Exception - division by 0" );
	assert.throws( TQdiv(normalNegativeNumber,zero),"Exception - division by 0" );
	assert.throws( TQdiv(bigNumber,zero),"Exception - division by 0" );
	assert.throws( TQdiv(bigNegativeNumber,zero),"Exception - division by 0" );
	assert.throws( TQdiv(Pi,zero),"Exception - division by 0" );
	assert.notEqual( TQdiv(Pi,1),'3.141592653589794',"Flase test - pi" )
}
);

QUnit.test( "Factorial test", function (assert)
{
	var zero=0;
	var one=1;
	var smallNumber=5;
	var normalNumber=50;
	var seemDecNum=0.5e2;
	var normalNegativeNumber=-123456789;
	var bigNumber=9.999999999999999e200;
	var bigNegativeNumber=-9.999999999999999e200;
	var Pi=3.1415926535897932;

	assert.strictEqual(  TQfact(zero),1,"Zero test" );
	assert.strictEqual( TQfact(one),1,"One test" );
	assert.strictEqual( TQfact(smallNumber),120,"Small number test" );
	assert.strictEqual( TQfact(normalNumber),30414093201713378043612608166064768844377641568960512000000000000,"Normal Number" );
	assert.strictEqual( TQfact(seemDecNum),30414093201713378043612608166064768844377641568960512000000000000,"Seemingly Decimal Number" );
	assert.throws( TQfact(normalNegativeNumber),"Exception - negative number" );
	assert.throws( TQfact(bigNegativeNumber),"Exception - negative number" );
	assert.throws( TQfact(Pi),"Exception - Not an integer" );
	assert.throws( TQfact(bigNumber),"Exception - too big number" );
}
);

QUnit.test( "Power test", function (assert)
{
	var zero=0;
	var one=1;
	var mOne=-1;
	var normalNumber=123456789;
	var normalNegativeNumber=-123456789;
	var bigNumber=9.0e300;
	var bigNegativeNumber=-9.0e300;
	var difExp=2.0e9;
	var Pi=3.1415926535897932;
	var dec1=5.4;
	var dec2=1.25;

	assert.strictEqual( TQpow(zero,zero),1,"Zero test 1" );
	assert.strictEqual( TQpow(zero,5),0,"Zero test 2" );
	assert.strictEqual( TQpow(normalNumber,zero),1,"Zero test 3" );
	assert.strictEqual( TQpow(normalNegativeNumber,zero),1,"Zero test 4" );
	assert.strictEqual( TQpow(bigNumber,zero),1,"Zero test 5" );
	assert.strictEqual( TQpow(bigNegativeNumber,zero),1,"Zero test 6" );
	assert.strictEqual( TQpow(difExp,zero),1,"Zero test 7" );
	assert.strictEqual( TQpow(Pi,zero),1,"Zero test 8" );
	assert.strictEqual( TQpow(one,normalNumber),1,"One test 1" );
	assert.strictEqual( TQpow(one,normalNegativeNumber),1,"One test 2" );
	assert.strictEqual( TQpow(one,bigNumber),1,"One test 3" );
	assert.strictEqual( TQpow(one,bigNegativeNumber),1,"One test 4" );
	assert.strictEqual( TQpow(one,difExp),1,"One test 5" );
	assert.strictEqual( TQpow(mOne,normalNumber),-1,"Minus one test 1" );
	assert.strictEqual( TQpow(mOne,2),1,"Minus one test 2" );
	assert.strictEqual( TQpow(normalNumber,10),8.225262591471026e80,"Normal number test" );
	assert.strictEqual( TQpow(normalNegativeNumber,10),8.225262591471026e80,"Normal negative number test" );
	assert.strictEqual( TQpow(bigNumber,3),7.29e902,"Big number test 1" );
	assert.strictEqual( TQpow(bigNegativeNumber,3),-7.29e902,"Big number test 2" );
	assert.strictEqual( TQpow(bigNegativeNumber,2),8.1e901,"Big number test 3" );
	assert.strictEqual( TQpow(5,-3),0.008,"Negative exponent 1" );
	assert.strictEqual( TQpow(5,-3),8.0e-3,"Negative exponent 2" );
	assert.strictEqual( TQpow(dec1,2),29.16,"Decimal test 1" );
	assert.strictEqual( TQpow(dec1,5),4591.65024,"Decimal test 2" );
	assert.strictEqual( TQpow(dec2,2),1.5625,"Decimal test 3" );
	assert.strictEqual( TQpow(dec2,5),3.051757813,"Decimal test 4" );
	assert.strictEqual( TQpow(dec2,mOne),0.8,"Decimal test 5" );
	assert.throws( TQpow(0,mOne),"Exception - zero with negative exponent" );
	assert.throws( TQpow(difExp,2.3),"Exception - exponent not an integer" );
}
);

QUnit.test( "Square root test", function(assert)
{
	var zero=0;
	var one=1;
	var mOne=-1;
	var normalNumber=1314135001;
	var normalNegativeNumber=-123456789;
	var bigNumber=100000000000000000000000000000000000000000000000000000000000000000000000000;
	var bigNegativeNumber=-100000000000000000000000000000000000000000000000000000000000000000000000000;
	var normalDec=27.5625;
	var longDec=152402072.9957399025;

	assert.strictEqual( TQsqrt(zero),0,"Zero test" );
	assert.strictEqual( TQsqrt(one),1,"One test" );
	assert.throws( TQsqrt(mOne),"Exception - minus one" );
	assert.strictEqual( TQsqrt(normalNumber),36251,"Normal number test" );
	assert.throws( TQsqrt(normalNegativeNumber),"Exception - negative number" );
	assert.strictEqual( TQsqrt(bigNumber),10000000000000000000000000000000000000,"Big number test" );
	assert.throws( TQsqrt(bigNegativeNumber),"Exception - negative big number" );
	assert.strictEqual( TQsqrt(normalDec),5.25,"Decimal number test" );
	assert.strictEqual( TQsqrt(longDec),12345.12345,"Long decimal number test 1" );
	assert.notEqual( TQsqrt(longDec),12345.123456,"Long decimal number test 2" );
}
);