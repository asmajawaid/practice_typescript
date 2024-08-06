//slide operators are 6
//arthmatic 
//urinary
//combining
//relational
// logical
//assignment

//UNARY OPERATORS
let x: number = 5
x++ // ++ is an unary operator
console.log(x) // 6

//Binary operator 
let a1: number = 1,
  b1: number = 2
let c1: number = a1 + b1 // + is a binary operator
console.log(c1) // 3

// Ternary operator
// let aa: number = 5
// console.log(aa > 5 ? 'greater than 5' : 'less than or equal to 5')
// the above console.log statement will print "less than or equal to 5"
// it's like an if-else block
// if(a>5) console.log("greater than 5");
// else console.log("less than or equal to 5");

//...............start type operators..............................................

//====OPERATORS====  1) arthmetic ==============
//ADDITION
let apple: number = 10;
let appleEat: number = 5;
let fridge: number = apple + appleEat;
console.log(fridge);
//SUBTR
let banana: number = 10;
let bananaEat: number = 5;
let onTable: number = banana - bananaEat;
console.log(onTable);
//MULTI
let kiwi: number = 10;
let kiwiEat: number = 5;
let cart: number = kiwi * kiwiEat;
console.log(cart);
// DIVISIO
let mango: number = 10;
let mangoEat: number = 5;
let Bowl: number = kiwi / kiwiEat;
console.log(Bowl);
//EXPONENT 
let MoneyPlant: number = 10;
let GrowPlant: number = 10;
let totalBabyPlant: number = MoneyPlant ** 2;
console.log(totalBabyPlant);
// MODULUS
let apples: number = 15;
let applesEat: number = 2;
let Topfridge: number = apples % applesEat;
console.log(Topfridge);
//.....................end.............

//====OPERATORS==== 2) unary (prefix an postfix operators)
// Increment (++): increases the value of the variable by one.
//  Decrement (--): decreases the value of the variable by one.
let a = 5;
let b = 5;
        //6 + (6+1)7 + (5-1)4 + (4-1)3 + 5 + (3+1)4 + 5 = 34 
let c =  ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
//----------------------------------------------------------
let d = 5;
let e = 2; 
d++
e--
console.log(d);// output 6
console.log(e); //output 1
//-----------------------------------------------------------
let z = 3;
z++; 
console.log(z);   // Output: 4

let a2 = 10;
a2--;
console.log(a2);   // Output: 9
//------------------------------------------------------------
let y = 1;
console.log(typeof(y));
console.log(typeof(+y));

console.log(+y);
console.log(-y);
//---------------------------------------------------------
console.log(+"100")                 //100 Tries to convert any operand to a number
console.log(+"100.5175")            //100.5175
 
//Empty string & null is zero
console.log(+"")                    //0 It converts empty string / Null to 0
console.log(+" ")                   //0
// console.log(+null)                  //0
 
//Undefined
// console.log(+undefined)             //Nan 
 
//Infinity
console.log(+Infinity)              //Infinity
 
//Boolean
console.log(+true)                  //1 True is 1 and False is 0
console.log(+false)                 //0
 
//Hexadecimal        Converts Octal/Hexa numbers to decimal.
console.log(+"0x22")                //34
console.log(+"0022")                //22
console.log(+"0o51")                //41
console.log(+"3.125e7")             //31250000
 
//If fails to convert to number, then returns NaN
console.log(+"10AA0.5175")          //NaN    In case it fails to convert, then returns NaN
console.log(+"35 35")               //NaN
console.log(+"AB 35")               //NaN
console.log(+'hello');              //NaN

//...................end.........................

// ====OPERATORS==== 3) COMBINING
//Concatenation operators in TypeScript are used to combine strings and values together.
          // {2 + (5*4)}= {2 +20}=22 
let result = 2 + 5 * 4;
result++;
console.log(result); //answer 23
//------------------------------------------------------
let Myage =30;
let message= "I'm"+" " + Myage +" "+ "years old." 
console.log(message);

//...........................end........................

// ====OPERATORS==== 4) ASSIGNMENT
//----------------------------------------
//a)=assign operator
 let k: number = 5 // = or assign operator
 console.log(k);

 //-----------------------------------------------------
//b)+= add and assign operator
let m: number = 5,
  n: number = 10
n += m // n = n + m (10+5)
console.log(n) // 15

 //-------------------------------------------------
//c)-= operator or Subtract and assign operator :
let aaa: number = 5,
  bbb: number = 10
bbb -= aaa // bbb = bbb - aaa (10-5)
console.log(bbb) // 5
//---------------------------------------------------
//d) *= operator or Multiply and assign operator :
let ab: number = 5,
  cd: number = 10
cd *= ab // cd = cd * ab (10*5)
console.log(cd) // 50
//--------------------------------------------------------
//e) /= operator or Divide and assign operator :
let ax: number = 5,
  bx: number = 10
bx /= ax // bx = bx / ax (10/5)
console.log(bx) // 2
//------------------------------------------------
//f) %= operator or Modulus and assign operator :
let az: number = 5,
  bz: number = 10
bz %= az // bz = bz % az
console.log(bz) // 0
//...............end...................
 
// ====OPERATORS==== 5) Comparison (Relational)
//a) == operator or Is equal to the operator
let aq: number = 3,
  bq: number = 3
// == or is the equal operator
if (aq == bq) console.log('equal') //output equal
//-------------------------------------------------
//b) === operator or Is identical to the operator:(mean we define also type of variable)
let aw: number = 3,
  bw: number = 3
// === or identical operator
if (aw === bw) console.log("identical")
//---------------------------------------------------
//c) != operator or Not equal to the operator:
let ae: number = 3,
  be: number = 2
//!= or not equal operator
if (ae != be) console.log('not equal')
 //-------------------------------------------------
//d) > operator or Greater than operator :
let ar: number = 3,
  br: number = 2
// > or greater than the operator
if (ar > br) console.log('greater than')
//------------------------------------------
//e) >= operator or Greater than or equal to the operator :
let at : number = 3,
    bt : number =3
    // >= or greater than or equal to the operator
    if (at >= bt) console.log('greater than or equal to');
    //else console.log('false');
//---------------------------------------------------
// f) < operator or Less than operator :
let ay: number = 3,
  by: number = 2
// < or less than the operator
if (by < ay) console.log('less than')
//-------------------------------------------------
//g) <= operator or Less than or equal to the operator :
let au: number = 3,
  bu: number = 3
// <= or less than or equal to the operator
if (au <= bu) console.log('less than or equal to')
  //------------------------------------------------------

//.........................end......................................

// ====OPERATORS==== 6) Logical Operators 
// {that result is only true or false}
//a) && operator or Logical AND operator :
let as = 5;
let ja = 2;
let and = (as>0) && (ja<5);

console.log(and) // true
//-----------------------------------------------------------------
//b) || operator or Logical OR operator :
let or = (as<0) || (ja>0); //true
console.log(or);
//c) ! operator or Logical NOT operator 
let not = !(as > 0);
console.log(not); //false 
//---------------------------------------------
console.log(false && true) // false

//...............................end...................................


// ====OPERATORS==== 7) arthmetic
// ====OPERATORS==== 8) arthmetic











