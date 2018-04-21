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
	assert.notOk( MathLib.TQdiv(zero,zero),"Exception - division by 0" );
	assert.notOk( MathLib.TQdiv(normalNumber,zero),"Exception - division by 0" );
	assert.notOk( MathLib.TQdiv(normalNegativeNumber,zero),"Exception - division by 0" );
	assert.notOk( MathLib.TQdiv(bigNumber,zero),"Exception - division by 0" );
	assert.notOk( MathLib.TQdiv(bigNegativeNumber,zero),"Exception - division by 0" );
	assert.notOk( MathLib.TQdiv(Pi,zero),"Exception - division by 0" );
	assert.notEqual( MathLib.TQdiv(Pi,1),'3.141592653589794',"Flase test - pi" )
}
);


QUnit.test( "Power test", function (assert)
{
	let zero=0;
	let one=1;
	let mOne=-1;
	let normalNumber=123456789;
	let normalNegativeNumber=-123456789;
	let bigNumber=9.0e300;
	let bigNegativeNumber=-9.0e300;
	let difExp=2.0e9;
	let Pi=3.1415926535897932;
	let dec1=5.4;
	let dec2=1.25;

	assert.strictEqual( MathLib.TQpow(zero,zero),1,"Zero test 1" );
	assert.strictEqual( MathLib.TQpow(zero,5),0,"Zero test 2" );
	assert.strictEqual( MathLib.TQpow(normalNumber,zero),1,"Zero test 3" );
	assert.strictEqual( MathLib.TQpow(normalNegativeNumber,zero),1,"Zero test 4" );
	assert.strictEqual( MathLib.TQpow(bigNumber,zero),1,"Zero test 5" );
	assert.strictEqual( MathLib.TQpow(bigNegativeNumber,zero),1,"Zero test 6" );
	assert.strictEqual( MathLib.TQpow(difExp,zero),1,"Zero test 7" );
	assert.strictEqual( MathLib.TQpow(Pi,zero),1,"Zero test 8" );
	assert.strictEqual( MathLib.TQpow(one,normalNumber),1,"One test 1" );
	assert.strictEqual( MathLib.TQpow(one,normalNegativeNumber),1,"One test 2" );
	assert.strictEqual( MathLib.TQpow(one,bigNumber),1,"One test 3" );
	assert.strictEqual( MathLib.TQpow(one,bigNegativeNumber),1,"One test 4" );
	assert.strictEqual( MathLib.TQpow(one,difExp),1,"One test 5" );
	assert.strictEqual( MathLib.TQpow(mOne,normalNumber),-1,"Minus one test 1" );
	assert.strictEqual( MathLib.TQpow(mOne,2),1,"Minus one test 2" );
	assert.strictEqual( MathLib.TQpow(normalNumber,10),8.225262591471026e80,"Normal number test" );
	assert.strictEqual( MathLib.TQpow(normalNegativeNumber,10),8.225262591471026e80,"Normal negative number test" );
	assert.strictEqual( MathLib.TQpow(bigNumber,3),7.29e902,"Big number test 1" );
	assert.strictEqual( MathLib.TQpow(bigNegativeNumber,3),-7.29e902,"Big number test 2" );
	assert.strictEqual( MathLib.TQpow(bigNegativeNumber,2),8.1e901,"Big number test 3" );
	assert.strictEqual( MathLib.TQpow(5,-3),0.008,"Negative exponent 1" );
	assert.strictEqual( MathLib.TQpow(5,-3),8.0e-3,"Negative exponent 2" );
	assert.strictEqual( MathLib.TQpow(dec1,2),29.16,"Decimal test 1" );
	assert.strictEqual( MathLib.TQpow(dec1,5),4591.65024,"Decimal test 2" );
	assert.strictEqual( MathLib.TQpow(dec2,2),1.5625,"Decimal test 3" );
	assert.strictEqual( MathLib.TQpow(dec2,5),3.051757813,"Decimal test 4" );
	assert.strictEqual( MathLib.TQpow(dec2,mOne),0.8,"Decimal test 5" );
	assert.notOk( MathLib.TQpow(0,mOne),"Exception - zero with negative exponent" );
	assert.notOk( MathLib.TQpow(difExp,2.3),"Exception - exponent not an integer" );
}
);

QUnit.test( "Square root test", function(assert)
{
	let zero=0;
	let one=1;
	let mOne=-1;
	let normalNumber=1314135001;
	let normalNegativeNumber=-123456789;
	let bigNumber=100000000000000000000000000000000000000000000000000000000000000000000000000;
	let bigNegativeNumber=-100000000000000000000000000000000000000000000000000000000000000000000000000;
	let normalDec=27.5625;
	let longDec=152402072.9957399025;

	assert.strictEqual( MathLib.TQsqrt(zero),0,"Zero test" );
	assert.strictEqual( MathLib.TQsqrt(one),1,"One test" );
	assert.notOk( MathLib.TQsqrt(mOne),"Exception - minus one" );
	assert.strictEqual( MathLib.TQsqrt(normalNumber),36251,"Normal number test" );
	assert.notOk( MathLib.TQsqrt(normalNegativeNumber),"Exception - negative number" );
	assert.strictEqual( MathLib.TQsqrt(bigNumber),10000000000000000000000000000000000000,"Big number test" );
	assert.notOk( MathLib.TQsqrt(bigNegativeNumber),"Exception - negative big number" );
	assert.strictEqual( MathLib.TQsqrt(normalDec),5.25,"Decimal number test" );
	assert.strictEqual( MathLib.TQsqrt(longDec),12345.12345,"Long decimal number test 1" );
	assert.notEqual( MathLib.TQsqrt(longDec),12345.123456,"Long decimal number test 2" );
}
);

QUnit.test("Sinus test", function(assert)
{
	let sin45=MathLib.TQsqrt(2)/2;
	let neg45=MathLib.TQsqrt(2)/(-2);
	let sin60=MathLib.TQsqrt(3)/2;
	let neg60=MathLib.TQsqrt(3)/(-2);

	assert.strictEqual(MathLib.TQsin(0),0,"Zero test 1");
	assert.strictEqual(MathLib.TQsin(180),0,"Zero test 2");
	assert.strictEqual(MathLib.TQsin(360),0,"Zero test 3");
	assert.strictEqual(MathLib.TQsin(540),0,"Zero test 4");
	assert.strictEqual(MathLib.TQsin(720),0,"Zero test 5");
	assert.strictEqual(MathLib.TQsin(90),1,"One test 1");
	assert.strictEqual(MathLib.TQsin(270),-1,"One test 2");
	assert.strictEqual(MathLib.TQsin(450),1,"One test 3");
	assert.strictEqual(MathLib.TQsin(630),-1,"One test 4");
	assert.strictEqual(MathLib.TQsin(30),0.5,"Table test sin 30");
	assert.strictEqual(MathLib.TQsin(150),0.5,"Table test sin 150");
	assert.strictEqual(MathLib.TQsin(210),-0.5,"Table test sin 210");
	assert.strictEqual(MathLib.TQsin(330),-0.5,"Table test sin 330");
	assert.strictEqual(MathLib.TQsin(390),0.5,"Table test sin 390");
	assert.strictEqual(MathLib.TQsin(510),0.5,"Table test sin 510");
	assert.strictEqual(MathLib.TQsin(570),-0.5,"Table test sin 570");
	assert.strictEqual(MathLib.TQsin(690),-0.5,"Table test sin 690");
	assert.strictEqual(MathLib.TQsin(750),0.5,"Table test sin 750");
	assert.strictEqual(MathLib.TQsin(870),0.5,"Table test sin 870");
	assert.strictEqual(MathLib.TQsin(930),-0.5,"Table test sin 930");
	assert.strictEqual(MathLib.TQsin(1050),-0.5,"Table test sin 1050");
	assert.equal(MathLib.TQsin(45),sin45,"Table test sin 45");
	assert.equal(MathLib.TQsin(135),sin45,"Table test sin 135");
	assert.equal(MathLib.TQsin(225),neg45,"Table test sin 225");
	assert.equal(MathLib.TQsin(315),neg45,"Table test sin 315");
	assert.equal(MathLib.TQsin(405),sin45,"Table test sin 405");
	assert.equal(MathLib.TQsin(495),sin45,"Table test sin 495");
	assert.equal(MathLib.TQsin(585),neg45,"Table test sin 585");
	assert.equal(MathLib.TQsin(675),neg45,"Table test sin 675");
	assert.equal(MathLib.TQsin(765),sin45,"Table test sin 765");
	assert.equal(MathLib.TQsin(855),sin45,"Table test sin 855");
	assert.equal(MathLib.TQsin(945),neg45,"Table test sin 945");
	assert.equal(MathLib.TQsin(1035),neg45,"Table test sin 1035");
	assert.equal(MathLib.TQsin(60),sin60,"Table test sin 60");
	assert.equal(MathLib.TQsin(120),sin60,"Table test sin 120");
	assert.equal(MathLib.TQsin(240),neg60,"Table test sin 240");
	assert.equal(MathLib.TQsin(300),neg60,"Table test sin 300");
	assert.equal(MathLib.TQsin(420),sin60,"Table test sin 420");
	assert.equal(MathLib.TQsin(480),sin60,"Table test sin 480");
	assert.equal(MathLib.TQsin(600),neg60,"Table test sin 600");
	assert.equal(MathLib.TQsin(660),neg60,"Table test sin 660");
	assert.equal(MathLib.TQsin(780),sin60,"Table test sin 780");
	assert.equal(MathLib.TQsin(840),sin60,"Table test sin 840");
	assert.equal(MathLib.TQsin(960),neg60,"Table test sin 960");
	assert.equal(MathLib.TQsin(1020),neg60,"Table test sin 1020");
	
	assert.strictEqual(MathLib.TQsin(-180),0,"Negative zero test 1");
	assert.strictEqual(MathLib.TQsin(-360),0,"Negative zero test 2");
	assert.strictEqual(MathLib.TQsin(-540),0,"Negative zero test 3");
	assert.strictEqual(MathLib.TQsin(-720),0,"Negative zero test 4");
	assert.strictEqual(MathLib.TQsin(-90),-1,"Negative one test 1");
	assert.strictEqual(MathLib.TQsin(-270),1,"Negative one test 2");
	assert.strictEqual(MathLib.TQsin(-450),-1,"Negative one test 3");
	assert.strictEqual(MathLib.TQsin(-630),1,"Negative one test 4");
	assert.strictEqual(MathLib.TQsin(-30),0.5,"Table test sin -30");
	assert.strictEqual(MathLib.TQsin(-150),0.5,"Table test sin -150");
	assert.strictEqual(MathLib.TQsin(-210),-0.5,"Table test sin -210");
	assert.strictEqual(MathLib.TQsin(-330),-0.5,"Table test sin -330");
	assert.strictEqual(MathLib.TQsin(-390),0.5,"Table test sin -390");
	assert.strictEqual(MathLib.TQsin(-510),0.5,"Table test sin -510");
	assert.strictEqual(MathLib.TQsin(-570),-0.5,"Table test sin -570");
	assert.strictEqual(MathLib.TQsin(-690),-0.5,"Table test sin -690");
	assert.strictEqual(MathLib.TQsin(-750),0.5,"Table test sin -750");
	assert.strictEqual(MathLib.TQsin(-870),0.5,"Table test sin -870");
	assert.strictEqual(MathLib.TQsin(-930),-0.5,"Table test sin -930");
	assert.strictEqual(MathLib.TQsin(-1050),-0.5,"Table test sin -1050");
	assert.equal(MathLib.TQsin(-45),neg45,"Table test sin -45");
	assert.equal(MathLib.TQsin(-135),neg45,"Table test sin -135");
	assert.equal(MathLib.TQsin(-225),sin45,"Table test sin -225");
	assert.equal(MathLib.TQsin(-315),sin45,"Table test sin -315");
	assert.equal(MathLib.TQsin(-405),neg45,"Table test sin -405");
	assert.equal(MathLib.TQsin(-495),neg45,"Table test sin -495");
	assert.equal(MathLib.TQsin(-585),sin45,"Table test sin -585");
	assert.equal(MathLib.TQsin(-675),sin45,"Table test sin -675");
	assert.equal(MathLib.TQsin(-765),neg45,"Table test sin -765");
	assert.equal(MathLib.TQsin(-855),neg45,"Table test sin -855");
	assert.equal(MathLib.TQsin(-945),sin45,"Table test sin -945");
	assert.equal(MathLib.TQsin(-1035),sin45,"Table test sin -1035");
	assert.equal(MathLib.TQsin(-60),neg60,"Table test sin -60");
	assert.equal(MathLib.TQsin(-120),neg60,"Table test sin -120");
	assert.equal(MathLib.TQsin(-240),sin60,"Table test sin -240");
	assert.equal(MathLib.TQsin(-300),sin60,"Table test sin -300");
	assert.equal(MathLib.TQsin(-420),neg60,"Table test sin -420");
	assert.equal(MathLib.TQsin(-480),neg60,"Table test sin -480");
	assert.equal(MathLib.TQsin(-600),sin60,"Table test sin -600");
	assert.equal(MathLib.TQsin(-660),sin60,"Table test sin -660");
	assert.equal(MathLib.TQsin(-780),neg60,"Table test sin -780");
	assert.equal(MathLib.TQsin(-840),neg60,"Table test sin -840");
	assert.equal(MathLib.TQsin(-960),sin60,"Table test sin -960");
	assert.equal(MathLib.TQsin(-1020),sin60,"Table test sin -1020");
}
);

QUnit.test("Cosinus test", function(assert)
{
	let cos30=MathLib.TQsqrt(3)/2;
	let neg30=MathLib.TQsqrt(3)/(-2);
	let cos45=MathLib.TQsqrt(2)/2;
	let neg45=MathLib.TQsqrt(2)/(-2);
	
	assert.strictEqual(MathLib.TQcos(0),1,"One test 1");
	assert.strictEqual(MathLib.TQcos(180),-1,"One test 2");
	assert.strictEqual(MathLib.TQcos(360),1,"One test 3");
	assert.strictEqual(MathLib.TQcos(540),-1,"One test 4");
	assert.strictEqual(MathLib.TQcos(720),1,"One test 5");
	assert.strictEqual(MathLib.TQcos(90),0,"Zero test 1");
	assert.strictEqual(MathLib.TQcos(270),0,"Zero test 2");
	assert.strictEqual(MathLib.TQcos(450),0,"Zero test 3");
	assert.strictEqual(MathLib.TQcos(630),0,"Zero test 4");
	assert.strictEqual(MathLib.TQcos(60),0.5,"Table test cos 60");
	assert.strictEqual(MathLib.TQcos(120),-0.5,"Table test cos 120");
	assert.strictEqual(MathLib.TQcos(240),-0.5,"Table test cos 240");
	assert.strictEqual(MathLib.TQcos(300),0.5,"Table test cos 300");
	assert.strictEqual(MathLib.TQcos(420),0.5,"Table test cos 420");
	assert.strictEqual(MathLib.TQcos(480),-0.5,"Table test cos 480");
	assert.strictEqual(MathLib.TQcos(600),-0.5,"Table test cos 600");
	assert.strictEqual(MathLib.TQcos(660),0.5,"Table test cos 660");
	assert.strictEqual(MathLib.TQcos(780),0.5,"Table test cos 780");
	assert.strictEqual(MathLib.TQcos(840),-0.5,"Table test cos 840");
	assert.strictEqual(MathLib.TQcos(960),-0.5,"Table test cos 960");
	assert.strictEqual(MathLib.TQcos(1020),0.5,"Table test cos 1020");
	assert.equal(MathLib.TQcos(45),cos45,"Table test cos 45");
	assert.equal(MathLib.TQcos(135),neg45,"Table test cos 135");
	assert.equal(MathLib.TQcos(225),neg45,"Table test cos 225");
	assert.equal(MathLib.TQcos(315),cos45,"Table test cos 315");
	assert.equal(MathLib.TQcos(405),cos45,"Table test cos 405");
	assert.equal(MathLib.TQcos(495),neg45,"Table test cos 495");
	assert.equal(MathLib.TQcos(585),neg45,"Table test cos 585");
	assert.equal(MathLib.TQcos(675),cos45,"Table test cos 675");
	assert.equal(MathLib.TQcos(765),cos45,"Table test cos 765");
	assert.equal(MathLib.TQcos(855),neg45,"Table test cos 855");
	assert.equal(MathLib.TQcos(945),neg45,"Table test cos 945");
	assert.equal(MathLib.TQcos(1035),cos45,"Table test cos 1035");
	assert.equal(MathLib.TQcos(30),cos30,"Table test cos 30");
	assert.equal(MathLib.TQcos(150),neg30,"Table test cos 150");
	assert.equal(MathLib.TQcos(210),neg30,"Table test cos 210");
	assert.equal(MathLib.TQcos(330),cos30,"Table test cos 330");
	assert.equal(MathLib.TQcos(390),cos30,"Table test cos 390");
	assert.equal(MathLib.TQcos(510),neg30,"Table test cos 510");
	assert.equal(MathLib.TQcos(570),neg30,"Table test cos 570");
	assert.equal(MathLib.TQcos(690),cos30,"Table test cos 690");
	assert.equal(MathLib.TQcos(750),cos30,"Table test cos 750");
	assert.equal(MathLib.TQcos(870),neg30,"Table test cos 870");
	assert.equal(MathLib.TQcos(930),neg30,"Table test cos 930");
	assert.equal(MathLib.TQcos(1050),cos30,"Table test cos 1050");
	
	assert.strictEqual(MathLib.TQcos(-180),1,"Negative one test 1");
	assert.strictEqual(MathLib.TQcos(-360),-1,"Negative one test 2");
	assert.strictEqual(MathLib.TQcos(-540),1,"Negative one test 3");
	assert.strictEqual(MathLib.TQcos(-720),-1,"Negative one test 4");
	assert.strictEqual(MathLib.TQcos(-90),0,"Zero test 1");
	assert.strictEqual(MathLib.TQcos(-270),0,"Zero test 2");
	assert.strictEqual(MathLib.TQcos(-450),0,"Zero test 3");
	assert.strictEqual(MathLib.TQcos(-630),0,"Zero test 4");
	assert.strictEqual(MathLib.TQcos(-60),-0.5,"Table test cos -60");
	assert.strictEqual(MathLib.TQcos(-120),0.5,"Table test cos -120");
	assert.strictEqual(MathLib.TQcos(-240),0.5,"Table test cos -240");
	assert.strictEqual(MathLib.TQcos(-300),-0.5,"Table test cos -300");
	assert.strictEqual(MathLib.TQcos(-420),-0.5,"Table test cos -420");
	assert.strictEqual(MathLib.TQcos(-480),0.5,"Table test cos -480");
	assert.strictEqual(MathLib.TQcos(-600),0.5,"Table test cos -600");
	assert.strictEqual(MathLib.TQcos(-660),-0.5,"Table test cos -660");
	assert.strictEqual(MathLib.TQcos(-780),-0.5,"Table test cos -780");
	assert.strictEqual(MathLib.TQcos(-840),0.5,"Table test cos -840");
	assert.strictEqual(MathLib.TQcos(-960),0.5,"Table test cos -960");
	assert.strictEqual(MathLib.TQcos(-1020),-0.5,"Table test cos -1020");
	assert.equal(MathLib.TQcos(-45),neg45,"Table test cos -45");
	assert.equal(MathLib.TQcos(-135),cos45,"Table test cos -135");
	assert.equal(MathLib.TQcos(-225),cos45,"Table test cos -225");
	assert.equal(MathLib.TQcos(-315),neg45,"Table test cos -315");
	assert.equal(MathLib.TQcos(-405),neg45,"Table test cos -405");
	assert.equal(MathLib.TQcos(-495),cos45,"Table test cos -495");
	assert.equal(MathLib.TQcos(-585),cos45,"Table test cos -585");
	assert.equal(MathLib.TQcos(-675),neg45,"Table test cos -675");
	assert.equal(MathLib.TQcos(-765),neg45,"Table test cos -765");
	assert.equal(MathLib.TQcos(-855),cos45,"Table test cos -855");
	assert.equal(MathLib.TQcos(-945),cos45,"Table test cos -945");
	assert.equal(MathLib.TQcos(-1035),neg45,"Table test cos -1035");
	assert.equal(MathLib.TQcos(-30),neg30,"Table test cos -30");
	assert.equal(MathLib.TQcos(-150),cos30,"Table test cos -150");
	assert.equal(MathLib.TQcos(-210),cos30,"Table test cos -210");
	assert.equal(MathLib.TQcos(-330),neg30,"Table test cos -330");
	assert.equal(MathLib.TQcos(-390),neg30,"Table test cos -390");
	assert.equal(MathLib.TQcos(-510),cos30,"Table test cos -510");
	assert.equal(MathLib.TQcos(-570),cos30,"Table test cos -570");
	assert.equal(MathLib.TQcos(-690),neg30,"Table test cos -690");
	assert.equal(MathLib.TQcos(-750),neg30,"Table test cos -750");
	assert.equal(MathLib.TQcos(-870),cos30,"Table test cos -870");
	assert.equal(MathLib.TQcos(-930),cos30,"Table test cos -930");
	assert.equal(MathLib.TQcos(-1050),neg30,"Table test cos -1050");
}
);

QUnit.test("Tangent test",function(assert)
{
	let tan30=MathLib.TQsqrt(3)/3;
	let neg30=MathLib.TQsqrt(3)/(-3);
	let tan60=MathLib.TQsqrt(3);
	let neg60=MathLib.TQsqrt(3)*(-1);
	
	assert.strictEqual(MathLib.TQtan(0),0,"Zero test 1");
	assert.strictEqual(MathLib.TQtan(180),0,"Zero test 2");
	assert.strictEqual(MathLib.TQtan(360),0,"Zero test 3");
	assert.strictEqual(MathLib.TQtan(540),0,"Zero test 4");
	assert.strictEqual(MathLib.TQtan(720),0,"Zero test 5");
	assert.strictEqual(MathLib.TQtan(45),1,"Table test tan 45");
	assert.strictEqual(MathLib.TQtan(135),-1,"Table test tan 135");
	assert.strictEqual(MathLib.TQtan(225),1,"Table test tan 225");
	assert.strictEqual(MathLib.TQtan(315),-1,"Table test tan 315");
	assert.strictEqual(MathLib.TQtan(405),1,"Table test tan 405");
	assert.strictEqual(MathLib.TQtan(495),-1,"Table test tan 495");
	assert.strictEqual(MathLib.TQtan(585),1,"Table test tan 585");
	assert.strictEqual(MathLib.TQtan(675),-1,"Table test tan 675");
	assert.strictEqual(MathLib.TQtan(765),1,"Table test tan 765");
	assert.strictEqual(MathLib.TQtan(855),-1,"Table test tan 855");
	assert.strictEqual(MathLib.TQtan(945),1,"Table test tan 945");
	assert.strictEqual(MathLib.TQtan(1035),-1,"Table test tan 1035");
	assert.equal(MathLib.TQtan(30),tan30,"Table test tan 30");
	assert.equal(MathLib.TQtan(150),neg30,"Table test tan 150");
	assert.equal(MathLib.TQtan(210),tan30,"Table test tan 210");
	assert.equal(MathLib.TQtan(330),neg30,"Table test tan 330");
	assert.equal(MathLib.TQtan(390),tan30,"Table test tan 390");
	assert.equal(MathLib.TQtan(510),neg30,"Table test tan 510");
	assert.equal(MathLib.TQtan(570),tan30,"Table test tan 570");
	assert.equal(MathLib.TQtan(690),neg30,"Table test tan 690");
	assert.equal(MathLib.TQtan(750),tan30,"Table test tan 750");
	assert.equal(MathLib.TQtan(870),neg30,"Table test tan 870");
	assert.equal(MathLib.TQtan(930),tan30,"Table test tan 930");
	assert.equal(MathLib.TQtan(1050),neg30,"Table test tan 1050");
	assert.equal(MathLib.TQtan(60),tan60,"Table test tan 60");
	assert.equal(MathLib.TQtan(120),neg60,"Table test tan 120");
	assert.equal(MathLib.TQtan(240),tan60,"Table test tan 240");
	assert.equal(MathLib.TQtan(300),neg60,"Table test tan 300");
	assert.equal(MathLib.TQtan(420),tan60,"Table test tan 420");
	assert.equal(MathLib.TQtan(480),neg60,"Table test tan 480");
	assert.equal(MathLib.TQtan(600),tan60,"Table test tan 600");
	assert.equal(MathLib.TQtan(660),neg60,"Table test tan 660");
	assert.equal(MathLib.TQtan(780),tan60,"Table test tan 780");
	assert.equal(MathLib.TQtan(840),neg60,"Table test tan 840");
	assert.equal(MathLib.TQtan(960),tan60,"Table test tan 960");
	assert.equal(MathLib.TQtan(1020),neg60,"Table test tan 1020");
	
	assert.strictEqual(MathLib.TQtan(-180),0,"Zero test 1");
	assert.strictEqual(MathLib.TQtan(-360),0,"Zero test 2");
	assert.strictEqual(MathLib.TQtan(-540),0,"Zero test 3");
	assert.strictEqual(MathLib.TQtan(-720),0,"Zero test 4");
	assert.strictEqual(MathLib.TQtan(-45),-1,"Table test tan -45");
	assert.strictEqual(MathLib.TQtan(-135),1,"Table test tan -135");
	assert.strictEqual(MathLib.TQtan(-225),-1,"Table test tan -225");
	assert.strictEqual(MathLib.TQtan(-315),1,"Table test tan -315");
	assert.strictEqual(MathLib.TQtan(-405),-1,"Table test tan -405");
	assert.strictEqual(MathLib.TQtan(-495),1,"Table test tan -495");
	assert.strictEqual(MathLib.TQtan(-585),-1,"Table test tan -585");
	assert.strictEqual(MathLib.TQtan(-675),1,"Table test tan -675");
	assert.strictEqual(MathLib.TQtan(-765),-1,"Table test tan -765");
	assert.strictEqual(MathLib.TQtan(-855),1,"Table test tan -855");
	assert.strictEqual(MathLib.TQtan(-945),-1,"Table test tan -945");
	assert.strictEqual(MathLib.TQtan(-1035),1,"Table test tan -1035");
	assert.equal(MathLib.TQtan(-30),neg30,"Table test tan -30");
	assert.equal(MathLib.TQtan(-150),tan30,"Table test tan -150");
	assert.equal(MathLib.TQtan(-210),neg30,"Table test tan -210");
	assert.equal(MathLib.TQtan(-330),tan30,"Table test tan -330");
	assert.equal(MathLib.TQtan(-390),neg30,"Table test tan -390");
	assert.equal(MathLib.TQtan(-510),tan30,"Table test tan -510");
	assert.equal(MathLib.TQtan(-570),neg30,"Table test tan -570");
	assert.equal(MathLib.TQtan(-690),tan30,"Table test tan -690");
	assert.equal(MathLib.TQtan(-750),neg30,"Table test tan -750");
	assert.equal(MathLib.TQtan(-870),tan30,"Table test tan -870");
	assert.equal(MathLib.TQtan(-930),neg30,"Table test tan -930");
	assert.equal(MathLib.TQtan(-1050),tan30,"Table test tan -1050");
	assert.equal(MathLib.TQtan(-60),neg60,"Table test tan -60");
	assert.equal(MathLib.TQtan(-120),tan60,"Table test tan -120");
	assert.equal(MathLib.TQtan(-240),neg60,"Table test tan -240");
	assert.equal(MathLib.TQtan(-300),tan60,"Table test tan -300");
	assert.equal(MathLib.TQtan(-420),neg60,"Table test tan -420");
	assert.equal(MathLib.TQtan(-480),tan60,"Table test tan -480");
	assert.equal(MathLib.TQtan(-600),neg60,"Table test tan -600");
	assert.equal(MathLib.TQtan(-660),tan60,"Table test tan -660");
	assert.equal(MathLib.TQtan(-780),neg60,"Table test tan -780");
	assert.equal(MathLib.TQtan(-840),tan60,"Table test tan -840");
	assert.equal(MathLib.TQtan(-960),neg60,"Table test tan -960");
	assert.equal(MathLib.TQtan(-1020),tan60,"Table test tan -1020");
	assert.notOk(MathLib.TQtan(90),"Exception - tan undefined for 90");
	assert.notOk(MathLib.TQtan(270),"Exception - tan undefined for 270");
	assert.notOk(MathLib.TQtan(450),"Exception - tan undefined for 450");
	assert.notOk(MathLib.TQtan(630),"Exception - tan undefined for 630");
	assert.notOk(MathLib.TQtan(810),"Exception - tan undefined for 810");
	assert.notOk(MathLib.TQtan(990),"Exception - tan undefined for 990");
}
);