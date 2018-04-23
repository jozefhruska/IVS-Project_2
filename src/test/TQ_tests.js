const assert = require('assert');
const MathLib = require('../inc/math');

QUnit.test("Addition test",function (assert)
{
	let zero=0;
	let normalNumber=123456789;
	let normalNegativeNumber=(-123456789);
	let bigNumber=9.999999999999999e200;
	let bigNegativeNumber=-9.999999999999999e200;
	let difExp1=2.0e10;
	let difExp2=3.5e9;
	
	assert.strictEqual( MathLib.TQadd(zero,normalNumber),normalNumber,"Add zero test 1" );
	assert.strictEqual( MathLib.TQadd(zero,normalNegativeNumber),normalNegativeNumber,"Add zero test 2" );
	assert.strictEqual( MathLib.TQadd(normalNumber,normalNegativeNumber),zero,"Result 0 test 1" );
	assert.strictEqual( MathLib.TQadd(bigNumber,bigNegativeNumber),zero,"Result 0 test 2" );
	assert.strictEqual( MathLib.TQadd(bigNumber,bigNumber),1.9999999999999998e201,"Big number twice test 1" );
	assert.strictEqual( MathLib.TQadd(bigNegativeNumber,bigNegativeNumber),-1.9999999999999998e201,"Big number twice test 2" );
	assert.strictEqual( MathLib.TQadd(difExp1,difExp2),2.35e10,"Different exponent" );
	assert.notEqual( MathLib.TQadd(zero,normalNumber),normalNumber+1,"False test - add zero" );
	assert.notEqual( MathLib.TQadd(normalNumber,normalNegativeNumber),1,"False test - add normal to negative" );
	assert.notEqual( MathLib.TQadd(normalNumber,normalNegativeNumber),-1,"False test - add normal to negative" );
	assert.notEqual( MathLib.TQadd(bigNumber,bigNegativeNumber),1,"Flase test - addition of big numbers" );
	assert.notEqual( MathLib.TQadd(bigNumber,bigNegativeNumber),-1,"Flase test - addition of big numbers" );
	assert.notEqual( MathLib.TQadd(difExp1,difExp2),23.5e10,"False test - addition different exponents" );
}
);

QUnit.test("Subtraction test",function (assert)
{
	let zero=0;
	let normalNumber=123456789;
	let normalNegativeNumber=(-123456789);
	let bigNumber=9.999999999999999e200;
	let bigNegativeNumber=-9.999999999999999e200;
	let difExp1=2.0e10;
	let difExp2=3.5e9;

	assert.strictEqual( MathLib.TQsub(zero,normalNumber),normalNegativeNumber,"Subtract from zero test 1" );
	assert.strictEqual( MathLib.TQsub(zero,normalNegativeNumber),normalNumber,"Subtract from zero test 2" );
	assert.strictEqual( MathLib.TQsub(normalNumber,zero),normalNumber,"Subtract zero test 1" );
	assert.strictEqual( MathLib.TQsub(normalNegativeNumber,zero),normalNegativeNumber,"Subtract zero text 2" );
	assert.strictEqual( MathLib.TQsub(bigNumber,bigNegativeNumber),1.9999999999999998e201,"big number subtraction 1" );
	assert.strictEqual( MathLib.TQsub(bigNegativeNumber,bigNegativeNumber),zero,"big number subtraction 2" );
	assert.strictEqual( MathLib.TQsub(bigNumber,bigNumber),zero,"big number subtraction" );
	assert.strictEqual( MathLib.TQsub(bigNegativeNumber,bigNumber),-1.9999999999999998e201,"big number subtraction" );
	assert.strictEqual( MathLib.TQsub(difExp1,difExp2),1.65e10,"Different exponent test 1" );
	assert.strictEqual( MathLib.TQsub(difExp2,difExp1),-1.65e10,"Different exponent test 2" );
	assert.notEqual( MathLib.TQsub(zero,normalNegativeNumber),normalNegativeNumber,"False test - zero subtraction" );
	assert.notEqual( MathLib.TQsub(zero,normalNumber),123456789,"False test - zero subtraction" );
	assert.notEqual( MathLib.TQsub(difExp1,difExp2),1.65e9,"False test - Different exponent" );
}
);

QUnit.test("Multiplication test",function (assert)
{
	let zero=0;
	let normalNumber=123456789;
	let normalNegativeNumber=-123456789;
	let bigNumber=9.999999999999999e200;
	let bigNegativeNumber=-9.999999999999999e200;
	let difExp1=2.0e10;
	let difExp2=3.5e9;
	let difExp3=4.8e20;
	let Pi=3.1415926535897932;
	
	assert.strictEqual( MathLib.TQmul(zero,normalNumber),zero,"Zero test 1" );
	assert.strictEqual( MathLib.TQmul(zero,normalNegativeNumber),zero,"Zero test 2" );
	assert.strictEqual( MathLib.TQmul(zero,bigNegativeNumber),zero,"Zero test 3" );
	assert.strictEqual( MathLib.TQmul(zero,bigNumber),zero,"Zero test 4" );
	assert.strictEqual( MathLib.TQmul(normalNumber,normalNegativeNumber),-15241578750190521,"Positive*Negative test 1" );
	assert.strictEqual( MathLib.TQmul(bigNumber,-1),bigNegativeNumber,"Positive*Negative test 2" );
	assert.strictEqual( MathLib.TQmul(bigNegativeNumber,-1),bigNumber, "Positive*Negative test 3");
	assert.strictEqual( MathLib.TQmul(difExp1,difExp2),7e19,"Different exponent test" );
	assert.strictEqual( MathLib.TQmul(difExp1,difExp3),9.6e30,"Different exponent test" );
	assert.strictEqual( MathLib.TQmul(Pi,1),Pi,"Pi test" );
	assert.notEqual( MathLib.TQmul(Pi,1),'3.1415926535897925',"False test - pi 1" );
	assert.notEqual( MathLib.TQmul(Pi,1),'3.141592653589794',"False test - pi 2" );
	assert.notEqual( MathLib.TQmul(bigNegativeNumber,-1),bigNegativeNumber, "False test - positive*negative");
}
);

QUnit.test("Division test",function (assert)
{
	let zero=0;
	let normalNumber=123456789;
	let normalNegativeNumber=-123456789;
	let bigNumber=9.999999999999999e200;
	let bigNegativeNumber=-9.999999999999999e200;
	let difExp1=2.0e9;
	let difExp2=4.0e10;
	let difExp3=4.8e20;
	let Pi=3.1415926535897932;

	assert.strictEqual( MathLib.TQdiv(normalNegativeNumber,normalNumber),-1,"Pos/neg division 1" );
	assert.strictEqual( MathLib.TQdiv(normalNumber,normalNegativeNumber),-1,"Pos/neg division 2" );
	assert.strictEqual( MathLib.TQdiv(normalNumber,normalNumber),1,"Normal division" );
	assert.strictEqual( MathLib.TQdiv(normalNegativeNumber,normalNegativeNumber),1,"Negative division" );
	assert.strictEqual( MathLib.TQdiv(bigNumber,9),1.111111111111111e200,"big number division" );
	assert.strictEqual( MathLib.TQdiv(difExp2,difExp1),20,"Different exponent test 1" );
	assert.strictEqual( MathLib.TQdiv(difExp1,difExp2),0.05,"Different exponent test 1" );
	assert.strictEqual( MathLib.TQdiv(difExp3,difExp1),2.4e11,"Different exponent test 1" );
	assert.ok(isNaN( MathLib.TQdiv(zero,zero)),"Exception - division by 0" );
	assert.ok(isNaN( MathLib.TQdiv(normalNumber,zero)),"Exception - division by 0" );
	assert.ok(isNaN( MathLib.TQdiv(normalNegativeNumber,zero)),"Exception - division by 0" );
	assert.ok(isNaN( MathLib.TQdiv(bigNumber,zero)),"Exception - division by 0" );
	assert.ok(isNaN( MathLib.TQdiv(bigNegativeNumber,zero)),"Exception - division by 0" );
	assert.ok(isNaN( MathLib.TQdiv(Pi,zero)),"Exception - division by 0" );
	assert.notEqual( MathLib.TQdiv(Pi,1),'3.141592653589794',"Flase test - pi" )
}
);

QUnit.test( "Factorial test", function (assert)
{
	let zero=0;
	let one=1;
	let smallNumber=5;
	let normalNumber=50;
	let seemDecNum=0.5e2;
	let normalNegativeNumber=-123456789;
	let Pi=3.1415926535897932;

	assert.strictEqual(  MathLib.TQfact(zero),1,"Zero test" );
	assert.strictEqual( MathLib.TQfact(one),1,"One test" );
	assert.strictEqual( MathLib.TQfact(smallNumber),120,"Small number test" );
	assert.strictEqual( MathLib.TQfact(normalNumber),30414093201713378043612608166064768844377641568960512000000000000,"Normal Number" );
	assert.strictEqual( MathLib.TQfact(seemDecNum),30414093201713378043612608166064768844377641568960512000000000000,"Seemingly Decimal Number" );
	assert.ok(isNaN( MathLib.TQfact(normalNegativeNumber)),"Exception - negative number" );
	assert.ok(isNaN( MathLib.TQfact(Pi)),"Exception - Not an integer" );
}
);

QUnit.test( "Power test", function (assert)
{
	let zero=0;
	let one=1;
	let mOne=-1;
	let normalNumber=123456789;
	let normalNegativeNumber=-123456789;
	let difExp=2.0e9;
	let Pi=3.1415926535897932;
	let dec1=5.4;
	let dec2=1.25;

	assert.strictEqual( MathLib.TQpow(zero,zero),1,"Zero test 1" );
	assert.strictEqual( MathLib.TQpow(zero,5),0,"Zero test 2" );
	assert.strictEqual( MathLib.TQpow(normalNumber,zero),1,"Zero test 3" );
	assert.strictEqual( MathLib.TQpow(normalNegativeNumber,zero),1,"Zero test 4" );
	assert.strictEqual( MathLib.TQpow(difExp,zero),1,"Zero test 7" );
	assert.strictEqual( MathLib.TQpow(Pi,zero),1,"Zero test 8" );
	assert.strictEqual( MathLib.TQpow(one,normalNumber),1,"One test 1" );
	assert.strictEqual( MathLib.TQpow(one,normalNegativeNumber),1,"One test 2" );
	assert.strictEqual( MathLib.TQpow(one,difExp),1,"One test 3" );
	assert.strictEqual( MathLib.TQpow(mOne,normalNumber),-1,"Minus one test 1" );
	assert.strictEqual( MathLib.TQpow(mOne,2),1,"Minus one test 2" );
	assert.ok(isNaN( MathLib.TQpow(normalNumber,10)),"Normal number test" );
	assert.ok(isNaN( MathLib.TQpow(normalNegativeNumber,10)),"Normal negative number test" );
	assert.strictEqual( MathLib.TQpow(5,-3),0.008,"Negative exponent 1" );
	assert.strictEqual( MathLib.TQpow(5,-3),8.0e-3,"Negative exponent 2" );
	assert.strictEqual( MathLib.TQpow(dec1,2),Math.pow(dec1,2),"Decimal test 1" );
	assert.strictEqual( MathLib.TQpow(dec1,5),Math.pow(dec1,5),"Decimal test 2" );
	assert.strictEqual( MathLib.TQpow(dec2,2),Math.pow(dec2,2),"Decimal test 3" );
	assert.strictEqual( MathLib.TQpow(dec2,5),Math.pow(dec2,5),"Decimal test 4" );
	assert.strictEqual( MathLib.TQpow(dec2,mOne),0.8,"Decimal test 5" );
	assert.ok(isNaN( MathLib.TQpow(0,mOne)),"Exception - zero with negative exponent" );
	assert.ok(isNaN( MathLib.TQpow(difExp,2.3)),"Exception - exponent not an integer" );
}
);

QUnit.test( "Square root test", function(assert)
{
	let zero=0;
	let one=1;
	let mOne=-1;
	let normalNumber=1314135001;
	let normalNegativeNumber=-123456789;
	let bigNumber=100000000000000000000;
	let bigNegativeNumber=-100000000000000000000;
	let normalDec=27.5625;
	let longDec=152402072.9957399025;

	assert.strictEqual( MathLib.TQsqrt(zero),0,"Zero test" );
	assert.strictEqual( MathLib.TQsqrt(one),1,"One test" );
	assert.ok(isNaN( MathLib.TQsqrt(mOne)),"Exception - minus one" );
	assert.strictEqual( MathLib.TQsqrt(normalNumber),36251,"Normal number test" );
	assert.ok(isNaN( MathLib.TQsqrt(normalNegativeNumber)),"Exception - negative number" );
	assert.strictEqual( MathLib.TQsqrt(bigNumber),10000000000,"Big number test" );
	assert.ok(isNaN( MathLib.TQsqrt(bigNegativeNumber)),"Exception - negative big number" );
	assert.strictEqual( MathLib.TQsqrt(normalDec),5.25,"Decimal number test" );
	assert.strictEqual( MathLib.TQsqrt(longDec),12345.12345,"Long decimal number test 1" );
	assert.notEqual( MathLib.TQsqrt(longDec),12345.123456,"Long decimal number test 2" );
}
);

QUnit.test("Sinus test", function(assert)
{
	let sin45=MathLib.TQsqrt(2)/2;
	sin45=sin45.toPrecision(14);
	let neg45=MathLib.TQsqrt(2)/(-2);
	neg45=neg45.toPrecision(14);
	let sin60=MathLib.TQsqrt(3)/2;
	sin60=sin60.toPrecision(14);
	let neg60=MathLib.TQsqrt(3)/(-2);
	neg60=neg60.toPrecision(14);

	assert.strictEqual(MathLib.TQsin(0,true),0,"Zero test 1");
	assert.strictEqual(MathLib.TQsin(180,true),0,"Zero test 2");
	assert.strictEqual(MathLib.TQsin(360,true),0,"Zero test 3");
	assert.strictEqual(MathLib.TQsin(540,true),0,"Zero test 4");
	assert.strictEqual(MathLib.TQsin(720,true),0,"Zero test 5");
	assert.strictEqual(MathLib.TQsin(0,false),0,"Zero test 6");
	assert.strictEqual(MathLib.TQsin(90,true),1,"One test 1");
	assert.strictEqual(MathLib.TQsin(Math.PI/2,false),1,"One test 2");
	assert.strictEqual(MathLib.TQsin(270,true),-1,"One test 3");
	assert.strictEqual(MathLib.TQsin(Math.PI*3/4,false),-1,"One test 4");
	assert.strictEqual(MathLib.TQsin(450,true),1,"One test 5");
	assert.strictEqual(MathLib.TQsin(630,true),-1,"One test 6");
	assert.equal(MathLib.TQsin(30,true),0.5,"Table test sin 30");
	assert.equal(MathLib.TQsin(150,true),0.5,"Table test sin 150");
	assert.equal(MathLib.TQsin(210,true),-0.5,"Table test sin 210");
	assert.equal(MathLib.TQsin(7*Math.PI/6,false),-0.5,"Table test sin 7*PI/6");
	assert.equal(MathLib.TQsin(330,true),-0.5,"Table test sin 330");
	assert.equal(MathLib.TQsin(390,true),0.5,"Table test sin 390");
	assert.equal(MathLib.TQsin(510,true),0.5,"Table test sin 510");
	assert.equal(MathLib.TQsin(570,true),-0.5,"Table test sin 570");
	assert.equal(MathLib.TQsin(690,true),-0.5,"Table test sin 690");
	assert.equal(MathLib.TQsin(750,true),0.5,"Table test sin 750");
	assert.equal(MathLib.TQsin(870,true),0.5,"Table test sin 870");
	assert.equal(MathLib.TQsin(930,true),-0.5,"Table test sin 930");
	assert.equal(MathLib.TQsin(1050,true),-0.5,"Table test sin 1050");
	assert.equal(MathLib.TQsin(45,true),sin45,"Table test sin 45");
	assert.equal(MathLib.TQsin(135,true),sin45,"Table test sin 135");
	assert.equal(MathLib.TQsin(3*Math.PI/4,false),sin45,"Table test sin 3*PI/4");
	assert.equal(MathLib.TQsin(225,true),neg45,"Table test sin 225");
	assert.equal(MathLib.TQsin(315,true),neg45,"Table test sin 315");
	assert.equal(MathLib.TQsin(405,true),sin45,"Table test sin 405");
	assert.equal(MathLib.TQsin(495,true),sin45,"Table test sin 495");
	assert.equal(MathLib.TQsin(585,true),neg45,"Table test sin 585");
	assert.equal(MathLib.TQsin(675,true),neg45,"Table test sin 675");
	assert.equal(MathLib.TQsin(765,true),sin45,"Table test sin 765");
	assert.equal(MathLib.TQsin(855,true),sin45,"Table test sin 855");
	assert.equal(MathLib.TQsin(945,true),neg45,"Table test sin 945");
	assert.equal(MathLib.TQsin(1035,true),neg45,"Table test sin 1035");
	assert.equal(MathLib.TQsin(60,true),sin60,"Table test sin 60");
	assert.equal(MathLib.TQsin(120,true),sin60,"Table test sin 120");
	assert.equal(MathLib.TQsin(240,true),neg60,"Table test sin 240");
	assert.equal(MathLib.TQsin(4*Math.PI/3,false),neg60,"Table test sin 4/3*PI");
	assert.equal(MathLib.TQsin(300,true),neg60,"Table test sin 300");
	assert.equal(MathLib.TQsin(420,true),sin60,"Table test sin 420");
	assert.equal(MathLib.TQsin(480,true),sin60,"Table test sin 480");
	assert.equal(MathLib.TQsin(600,true),neg60,"Table test sin 600");
	assert.equal(MathLib.TQsin(660,true),neg60,"Table test sin 660");
	assert.equal(MathLib.TQsin(11*Math.PI/3,false),neg60,"Table test 11/3*PI");
	assert.equal(MathLib.TQsin(780,true),sin60,"Table test sin 780");
	assert.equal(MathLib.TQsin(840,true),sin60,"Table test sin 840");
	assert.equal(MathLib.TQsin(960,true),neg60,"Table test sin 960");
	assert.equal(MathLib.TQsin(1020,true),neg60,"Table test sin 1020");
	
	assert.strictEqual(MathLib.TQsin(-180,true),0,"Negative zero test 1");
	assert.strictEqual(MathLib.TQsin(-360,true),0,"Negative zero test 2");
	assert.strictEqual(MathLib.TQsin(-540,true),0,"Negative zero test 3");
	assert.strictEqual(MathLib.TQsin(-720,true),0,"Negative zero test 4");
	assert.strictEqual(MathLib.TQsin(-90,true),-1,"Negative one test 1");
	assert.strictEqual(MathLib.TQsin(Math.PI/(-2),false),-1,"Negative one test 2");
	assert.strictEqual(MathLib.TQsin(-270,true),1,"Negative one test 3");
	assert.strictEqual(MathLib.TQsin(-450,true),-1,"Negative one test 4");
	assert.strictEqual(MathLib.TQsin(-630,true),1,"Negative one test 5");
	assert.strictEqual(MathLib.TQsin(-30,true),-0.5,"Table test sin -30");
	assert.strictEqual(MathLib.TQsin(-150,true),-0.5,"Table test sin -150");
	assert.strictEqual(MathLib.TQsin(-210,true),0.5,"Table test sin -210");
	assert.equal(MathLib.TQsin(7*Math.PI/(-6),false),0.5,"Table test sin -7*PI/6");
	assert.strictEqual(MathLib.TQsin(-330,true),0.5,"Table test sin -330");
	assert.strictEqual(MathLib.TQsin(-390,true),-0.5,"Table test sin -390");
	assert.strictEqual(MathLib.TQsin(-510,true),-0.5,"Table test sin -510");
	assert.strictEqual(MathLib.TQsin(-570,true),0.5,"Table test sin -570");
	assert.strictEqual(MathLib.TQsin(-690,true),0.5,"Table test sin -690");
	assert.strictEqual(MathLib.TQsin(-750,true),-0.5,"Table test sin -750");
	assert.strictEqual(MathLib.TQsin(-870,true),-0.5,"Table test sin -870");
	assert.strictEqual(MathLib.TQsin(-930,true),0.5,"Table test sin -930");
	assert.strictEqual(MathLib.TQsin(-1050,true),0.5,"Table test sin -1050");
	assert.equal(MathLib.TQsin(-45,true),neg45,"Table test sin -45");
	assert.equal(MathLib.TQsin(-135,true),neg45,"Table test sin -135");
	assert.equal(MathLib.TQsin(-225,true),sin45,"Table test sin -225");
	assert.equal(MathLib.TQsin(-315,true),sin45,"Table test sin -315");
	assert.equal(MathLib.TQsin(3*Math.PI/(-4),false),neg45,"Table test sin -3*PI/4");
	assert.equal(MathLib.TQsin(-405,true),neg45,"Table test sin -405");
	assert.equal(MathLib.TQsin(-495,true),neg45,"Table test sin -495");
	assert.equal(MathLib.TQsin(-585,true),sin45,"Table test sin -585");
	assert.equal(MathLib.TQsin(-675,true),sin45,"Table test sin -675");
	assert.equal(MathLib.TQsin(-765,true),neg45,"Table test sin -765");
	assert.equal(MathLib.TQsin(-855,true),neg45,"Table test sin -855");
	assert.equal(MathLib.TQsin(-945,true),sin45,"Table test sin -945");
	assert.equal(MathLib.TQsin(-1035,true),sin45,"Table test sin -1035");
	assert.equal(MathLib.TQsin(-60,true),neg60,"Table test sin -60");
	assert.equal(MathLib.TQsin(-120,true),neg60,"Table test sin -120");
	assert.equal(MathLib.TQsin(-240,true),sin60,"Table test sin -240");
	assert.equal(MathLib.TQsin(4*Math.PI/(-3),false),sin60,"Table test sin -4/3*PI");
	assert.equal(MathLib.TQsin(-300,true),sin60,"Table test sin -300");
	assert.equal(MathLib.TQsin(-420,true),neg60,"Table test sin -420");
	assert.equal(MathLib.TQsin(-480,true),neg60,"Table test sin -480");
	assert.equal(MathLib.TQsin(-600,true),sin60,"Table test sin -600");
	assert.equal(MathLib.TQsin(-660,true),sin60,"Table test sin -660");
	assert.equal(MathLib.TQsin(-780,true),neg60,"Table test sin -780");
	assert.equal(MathLib.TQsin(-840,true),neg60,"Table test sin -840");
	assert.equal(MathLib.TQsin(-960,true),sin60,"Table test sin -960");
	assert.equal(MathLib.TQsin(-1020,true),sin60,"Table test sin -1020");
}
);

QUnit.test("Cosinus test", function(assert)
{
	let cos30=MathLib.TQsqrt(3)/2;
	cos30=cos30.toPrecision(14);
	let neg30=MathLib.TQsqrt(3)/(-2);
	neg30=neg30.toPrecision(14);
	let cos45=MathLib.TQsqrt(2)/2;
	cos45=cos45.toPrecision(14);
	let neg45=MathLib.TQsqrt(2)/(-2);
	neg45=neg45.toPrecision(14);
	
	assert.strictEqual(MathLib.TQcos(0,true),1,"One test 1");
	assert.strictEqual(MathLib.TQcos(180,true),-1,"One test 2");
	assert.strictEqual(MathLib.TQcos(Math.PI,false),-1,"One test 3");
	assert.strictEqual(MathLib.TQcos(360,true),1,"One test 4");
	assert.strictEqual(MathLib.TQcos(540,true),-1,"One test 5");
	assert.strictEqual(MathLib.TQcos(720,true),1,"One test 6");
	assert.strictEqual(MathLib.TQcos(90,true),0,"Zero test 1");
	assert.strictEqual(MathLib.TQcos(270,true),0,"Zero test 2");
	assert.strictEqual(MathLib.TQcos(450,true),0,"Zero test 3");
	assert.strictEqual(MathLib.TQcos(630,true),0,"Zero test 4");
	assert.strictEqual(MathLib.TQcos(7*Math.PI/2,false),0,"Zero test 5");
	assert.equal(MathLib.TQcos(60,true),0.5,"Table test cos 60");
	assert.equal(MathLib.TQcos(120,true),-0.5,"Table test cos 120");
	assert.equal(MathLib.TQcos(240,true),-0.5,"Table test cos 240");
	assert.equal(MathLib.TQcos(300,true),0.5,"Table test cos 300");
	assert.equal(MathLib.TQcos(420,true),0.5,"Table test cos 420");
	assert.equal(MathLib.TQcos(7*Math.PI/3,false),0.5,"Table test 7/3*PI");
	assert.equal(MathLib.TQcos(480,true),-0.5,"Table test cos 480");
	assert.equal(MathLib.TQcos(600,true),-0.5,"Table test cos 600");
	assert.equal(MathLib.TQcos(660,true),0.5,"Table test cos 660");
	assert.equal(MathLib.TQcos(780,true),0.5,"Table test cos 780");
	assert.equal(MathLib.TQcos(840,true),-0.5,"Table test cos 840");
	assert.equal(MathLib.TQcos(960,true),-0.5,"Table test cos 960");
	assert.equal(MathLib.TQcos(1020,true),0.5,"Table test cos 1020");
	assert.equal(MathLib.TQcos(45,true),cos45,"Table test cos 45");
	assert.equal(MathLib.TQcos(Math.PI/4,false),cos45,"Table test PI/4");
	assert.equal(MathLib.TQcos(135,true),neg45,"Table test cos 135");
	assert.equal(MathLib.TQcos(225,true),neg45,"Table test cos 225");
	assert.equal(MathLib.TQcos(315,true),cos45,"Table test cos 315");
	assert.equal(MathLib.TQcos(405,true),cos45,"Table test cos 405");
	assert.equal(MathLib.TQcos(495,true),neg45,"Table test cos 495");
	assert.equal(MathLib.TQcos(585,true),neg45,"Table test cos 585");
	assert.equal(MathLib.TQcos(675,true),cos45,"Table test cos 675");
	assert.equal(MathLib.TQcos(765,true),cos45,"Table test cos 765");
	assert.equal(MathLib.TQcos(855,true),neg45,"Table test cos 855");
	assert.equal(MathLib.TQcos(945,true),neg45,"Table test cos 945");
	assert.equal(MathLib.TQcos(1035,true),cos45,"Table test cos 1035");
	assert.equal(MathLib.TQcos(30,true),cos30,"Table test cos 30");
	assert.equal(MathLib.TQcos(Math.PI/6,false),cos30,"Table test cos PI/6");
	assert.equal(MathLib.TQcos(150,true),neg30,"Table test cos 150");
	assert.equal(MathLib.TQcos(210,true),neg30,"Table test cos 210");
	assert.equal(MathLib.TQcos(330,true),cos30,"Table test cos 330");
	assert.equal(MathLib.TQcos(390,true),cos30,"Table test cos 390");
	assert.equal(MathLib.TQcos(510,true),neg30,"Table test cos 510");
	assert.equal(MathLib.TQcos(570,true),neg30,"Table test cos 570");
	assert.equal(MathLib.TQcos(690,true),cos30,"Table test cos 690");
	assert.equal(MathLib.TQcos(750,true),cos30,"Table test cos 750");
	assert.equal(MathLib.TQcos(870,true),neg30,"Table test cos 870");
	assert.equal(MathLib.TQcos(930,true),neg30,"Table test cos 930");
	assert.equal(MathLib.TQcos(1050,true),cos30,"Table test cos 1050");
	
	assert.strictEqual(MathLib.TQcos(-180,true),-1,"Negative one test 1");
	assert.strictEqual(MathLib.TQcos(-360,true),1,"Negative one test 2");
	assert.strictEqual(MathLib.TQcos(-540,true),-1,"Negative one test 3");
	assert.strictEqual(MathLib.TQcos(-720,true),1,"Negative one test 4");
	assert.strictEqual(MathLib.TQcos(Math.PI*(-1),false),1,"Negative one test 5");
	assert.strictEqual(MathLib.TQcos(-90,true),0,"Zero test 1");
	assert.strictEqual(MathLib.TQcos(-270,true),0,"Zero test 2");
	assert.strictEqual(MathLib.TQcos(-450,true),0,"Zero test 3");
	assert.strictEqual(MathLib.TQcos(-630,true),0,"Zero test 4");
	assert.strictEqual(MathLib.TQcos(7*Math.PI/(-2),false),0,"Zero test 5");
	assert.strictEqual(MathLib.TQcos(-60,true),-0.5,"Table test cos -60");
	assert.strictEqual(MathLib.TQcos(-120,true),0.5,"Table test cos -120");
	assert.strictEqual(MathLib.TQcos(-240,true),0.5,"Table test cos -240");
	assert.strictEqual(MathLib.TQcos(-300,true),-0.5,"Table test cos -300");
	assert.strictEqual(MathLib.TQcos(-420,true),-0.5,"Table test cos -420");
	assert.equal(MathLib.TQcos(7*Math.PI/(-3),false),-0.5,"Table test -7/3*PI");
	assert.strictEqual(MathLib.TQcos(-480,true),0.5,"Table test cos -480");
	assert.strictEqual(MathLib.TQcos(-600,true),0.5,"Table test cos -600");
	assert.strictEqual(MathLib.TQcos(-660,true),-0.5,"Table test cos -660");
	assert.strictEqual(MathLib.TQcos(-780,true),-0.5,"Table test cos -780");
	assert.strictEqual(MathLib.TQcos(-840,true),0.5,"Table test cos -840");
	assert.strictEqual(MathLib.TQcos(-960,true),0.5,"Table test cos -960");
	assert.strictEqual(MathLib.TQcos(-1020,true),-0.5,"Table test cos -1020");
	assert.equal(MathLib.TQcos(-45,true),neg45,"Table test cos -45");
	assert.equal(MathLib.TQcos(Math.PI/(-4),false),neg45,"Table test -PI/4");
	assert.equal(MathLib.TQcos(-135,true),cos45,"Table test cos -135");
	assert.equal(MathLib.TQcos(-225,true),cos45,"Table test cos -225");
	assert.equal(MathLib.TQcos(-315,true),neg45,"Table test cos -315");
	assert.equal(MathLib.TQcos(-405,true),neg45,"Table test cos -405");
	assert.equal(MathLib.TQcos(-495,true),cos45,"Table test cos -495");
	assert.equal(MathLib.TQcos(-585,true),cos45,"Table test cos -585");
	assert.equal(MathLib.TQcos(-675,true),neg45,"Table test cos -675");
	assert.equal(MathLib.TQcos(-765,true),neg45,"Table test cos -765");
	assert.equal(MathLib.TQcos(-855,true),cos45,"Table test cos -855");
	assert.equal(MathLib.TQcos(-945,true),cos45,"Table test cos -945");
	assert.equal(MathLib.TQcos(-1035,true),neg45,"Table test cos -1035");
	assert.equal(MathLib.TQcos(-30,true),neg30,"Table test cos -30");
	assert.equal(MathLib.TQcos(Math.PI/(-6),false),neg30,"Table test cos -PI/6");
	assert.equal(MathLib.TQcos(-150,true),cos30,"Table test cos -150");
	assert.equal(MathLib.TQcos(-210,true),cos30,"Table test cos -210");
	assert.equal(MathLib.TQcos(-330,true),neg30,"Table test cos -330");
	assert.equal(MathLib.TQcos(-390,true),neg30,"Table test cos -390");
	assert.equal(MathLib.TQcos(-510,true),cos30,"Table test cos -510");
	assert.equal(MathLib.TQcos(-570,true),cos30,"Table test cos -570");
	assert.equal(MathLib.TQcos(-690,true),neg30,"Table test cos -690");
	assert.equal(MathLib.TQcos(-750,true),neg30,"Table test cos -750");
	assert.equal(MathLib.TQcos(-870,true),cos30,"Table test cos -870");
	assert.equal(MathLib.TQcos(-930,true),cos30,"Table test cos -930");
	assert.equal(MathLib.TQcos(-1050,true),neg30,"Table test cos -1050");
}
);

QUnit.test("Tangent test",function(assert)
{
	let tan30=MathLib.TQsqrt(3)/3;
	tan30=tan30.toPrecision(14);
	let neg30=MathLib.TQsqrt(3)/(-3);
	neg30=neg30.toPrecision(14);
	let tan60=MathLib.TQsqrt(3);
	tan60=tan60.toPrecision(14);
	let neg60=MathLib.TQsqrt(3)*(-1);
	neg60=neg60.toPrecision(14);
	
	assert.strictEqual(MathLib.TQtan(0,true),0,"Zero test 1");
	assert.strictEqual(MathLib.TQtan(180,true),0,"Zero test 2");
	assert.strictEqual(MathLib.TQtan(360,true),0,"Zero test 3");
	assert.strictEqual(MathLib.TQtan(540,true),0,"Zero test 4");
	assert.strictEqual(MathLib.TQtan(720,true),0,"Zero test 5");
	assert.strictEqual(MathLib.TQtan(Math.PI,false),0,"Zero test 6");
	assert.strictEqual(MathLib.TQtan(45,true),1,"Table test tan 45");
	assert.strictEqual(MathLib.TQtan(Math.PI/4,false),1,"Table test tan PI/4");
	assert.equal(MathLib.TQtan(135,true),-1,"Table test tan 135");
	assert.equal(MathLib.TQtan(225,true),1,"Table test tan 225");
	assert.equal(MathLib.TQtan(315,true),-1,"Table test tan 315");
	assert.equal(MathLib.TQtan(405,true),1,"Table test tan 405");
	assert.equal(MathLib.TQtan(495,true),-1,"Table test tan 495");
	assert.equal(MathLib.TQtan(585,true),1,"Table test tan 585");
	assert.equal(MathLib.TQtan(675,true),-1,"Table test tan 675");
	assert.equal(MathLib.TQtan(765,true),1,"Table test tan 765");
	assert.equal(MathLib.TQtan(855,true),-1,"Table test tan 855");
	assert.equal(MathLib.TQtan(945,true),1,"Table test tan 945");
	assert.equal(MathLib.TQtan(1035,true),-1,"Table test tan 1035");
	assert.equal(MathLib.TQtan(30,true),tan30,"Table test tan 30");
	assert.equal(MathLib.TQtan(Math.PI/6,false),tan30,"Table test tan PI/6");
	assert.equal(MathLib.TQtan(150,true),neg30,"Table test tan 150");
	assert.equal(MathLib.TQtan(210,true),tan30,"Table test tan 210");
	assert.equal(MathLib.TQtan(330,true),neg30,"Table test tan 330");
	assert.equal(MathLib.TQtan(390,true),tan30,"Table test tan 390");
	assert.equal(MathLib.TQtan(510,true),neg30,"Table test tan 510");
	assert.equal(MathLib.TQtan(570,true),tan30,"Table test tan 570");
	assert.equal(MathLib.TQtan(690,true),neg30,"Table test tan 690");
	assert.equal(MathLib.TQtan(750,true),tan30,"Table test tan 750");
	assert.equal(MathLib.TQtan(870,true),neg30,"Table test tan 870");
	assert.equal(MathLib.TQtan(930,true),tan30,"Table test tan 930");
	assert.equal(MathLib.TQtan(1050,true),neg30,"Table test tan 1050");
	assert.equal(MathLib.TQtan(60,true),tan60,"Table test tan 60");
	assert.equal(MathLib.TQtan(Math.PI/3,false),tan60,"Table test tan PI/3");
	assert.equal(MathLib.TQtan(120,true),neg60,"Table test tan 120");
	assert.equal(MathLib.TQtan(240,true),tan60,"Table test tan 240");
	assert.equal(MathLib.TQtan(300,true),neg60,"Table test tan 300");
	assert.equal(MathLib.TQtan(420,true),tan60,"Table test tan 420");
	assert.equal(MathLib.TQtan(480,true),neg60,"Table test tan 480");
	assert.equal(MathLib.TQtan(600,true),tan60,"Table test tan 600");
	assert.equal(MathLib.TQtan(660,true),neg60,"Table test tan 660");
	assert.equal(MathLib.TQtan(780,true),tan60,"Table test tan 780");
	assert.equal(MathLib.TQtan(840,true),neg60,"Table test tan 840");
	assert.equal(MathLib.TQtan(960,true),tan60,"Table test tan 960");
	assert.equal(MathLib.TQtan(1020,true),neg60,"Table test tan 1020");
	
	assert.strictEqual(MathLib.TQtan(-180,true),0,"Zero test 1");
	assert.strictEqual(MathLib.TQtan(-360,true),0,"Zero test 2");
	assert.strictEqual(MathLib.TQtan(-540,true),0,"Zero test 3");
	assert.strictEqual(MathLib.TQtan(-720,true),0,"Zero test 4");
	assert.strictEqual(MathLib.TQtan((-4)*Math.PI,false),0,"Zero test 5");
	assert.strictEqual(MathLib.TQtan(-45,true),-1,"Table test tan -45");
	assert.strictEqual(MathLib.TQtan(-135,true),1,"Table test tan -135");
	assert.strictEqual(MathLib.TQtan(-225,true),-1,"Table test tan -225");
	assert.strictEqual(MathLib.TQtan((-5)*Math.PI/4,false),-1,"Table test tan -5/4*PI");
	assert.strictEqual(MathLib.TQtan(-315,true),1,"Table test tan -315");
	assert.strictEqual(MathLib.TQtan(-405,true),-1,"Table test tan -405");
	assert.strictEqual(MathLib.TQtan(-495,true),1,"Table test tan -495");
	assert.strictEqual(MathLib.TQtan(-585,true),-1,"Table test tan -585");
	assert.strictEqual(MathLib.TQtan(-675,true),1,"Table test tan -675");
	assert.strictEqual(MathLib.TQtan(-765,true),-1,"Table test tan -765");
	assert.strictEqual(MathLib.TQtan(-855,true),1,"Table test tan -855");
	assert.strictEqual(MathLib.TQtan(-945,true),-1,"Table test tan -945");
	assert.strictEqual(MathLib.TQtan(-1035,true),1,"Table test tan -1035");
	assert.equal(MathLib.TQtan(-30,true),neg30,"Table test tan -30");
	assert.equal(MathLib.TQtan(-150,true),tan30,"Table test tan -150");
	assert.equal(MathLib.TQtan((-5)*Math.PI/6,false),tan30,"Table test tan -5/6*PI");
	assert.equal(MathLib.TQtan(-210,true),neg30,"Table test tan -210");
	assert.equal(MathLib.TQtan(-330,true),tan30,"Table test tan -330");
	assert.equal(MathLib.TQtan(-390,true),neg30,"Table test tan -390");
	assert.equal(MathLib.TQtan(-510,true),tan30,"Table test tan -510");
	assert.equal(MathLib.TQtan(-570,true),neg30,"Table test tan -570");
	assert.equal(MathLib.TQtan(-690,true),tan30,"Table test tan -690");
	assert.equal(MathLib.TQtan(-750,true),neg30,"Table test tan -750");
	assert.equal(MathLib.TQtan(-870,true),tan30,"Table test tan -870");
	assert.equal(MathLib.TQtan(-930,true),neg30,"Table test tan -930");
	assert.equal(MathLib.TQtan(-1050,true),tan30,"Table test tan -1050");
	assert.equal(MathLib.TQtan(-60,true),neg60,"Table test tan -60");
	assert.equal(MathLib.TQtan(Math.PI/(-3),false),neg60,"Table test tan -PI/3");
	assert.equal(MathLib.TQtan(-120,true),tan60,"Table test tan -120");
	assert.equal(MathLib.TQtan(-240,true),neg60,"Table test tan -240");
	assert.equal(MathLib.TQtan(-300,true),tan60,"Table test tan -300");
	assert.equal(MathLib.TQtan(-420,true),neg60,"Table test tan -420");
	assert.equal(MathLib.TQtan(-480,true),tan60,"Table test tan -480");
	assert.equal(MathLib.TQtan(-600,true),neg60,"Table test tan -600");
	assert.equal(MathLib.TQtan(-660,true),tan60,"Table test tan -660");
	assert.equal(MathLib.TQtan(-780,true),neg60,"Table test tan -780");
	assert.equal(MathLib.TQtan(-840,true),tan60,"Table test tan -840");
	assert.equal(MathLib.TQtan(-960,true),neg60,"Table test tan -960");
	assert.equal(MathLib.TQtan(-1020,true),tan60,"Table test tan -1020");
	assert.ok(isNaN(MathLib.TQtan(90,true)),"Exception - tan undefined for 90");
	assert.ok(isNaN(MathLib.TQtan(Math.PI/2,false)),"Exception - tan undefined for 90");
	assert.ok(isNaN(MathLib.TQtan(270,true)),"Exception - tan undefined for 270");
	assert.ok(isNaN(MathLib.TQtan(450,true)),"Exception - tan undefined for 450");
	assert.ok(isNaN(MathLib.TQtan(630,true)),"Exception - tan undefined for 630");
	assert.ok(isNaN(MathLib.TQtan(810,true)),"Exception - tan undefined for 810");
	assert.ok(isNaN(MathLib.TQtan(990,true)),"Exception - tan undefined for 990");
}
);