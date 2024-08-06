// ++a --a is pre increment and decrement
// a++ a-- is post increment and decrement
// increment: pre => oehle. post => bad me=>
let aa = 10;
let bb = 10;
export {};
// bb =aa++ //post increment
// console.log(aa)//11
// console.log(bb)//10
// =============================================
// bb=++aa;  //pre increment
// console.log(aa) //11
// console.log(bb) //11
// ==================================================
// bb= --aa   //pre decrement
// console.log(aa) //9
// console.log(bb) //9
// =====================================================
// bb= aa--  // post decrement
// console.log(aa) //9
// console.log(bb) //10
// =================================================
// let a0=0
// console.log(++a0) //1
// =================================
// let a1=5
// let b1=2
// console.log(++a) //6
// console.log(--b1 + b1-- + b1++) //1
// =================================================
// let a=5
// let b=2
// let c= ++a + a++ + --b + b-- + a + b++ + b
// console.log("total" + c );
// c= (5+1)  (6+1) (1-2) (1-1)  6   (0+1)  1
// console.log( --b + b-- + b++ + b ) 
//3 1+1+0+1 post increment me pehle value assign karey gy bad me next step pr change kareygy
// console.log( ++a + a++ + a) 
//19 6+7+6
