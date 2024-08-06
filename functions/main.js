"use strict";
// basic function: jab chaye jaha chaye or jitni bar chaye line of code ko exicute 
// karwa sakty he 
// function myNumber () { //function name variable.parameter.
// console.log("1")
// }
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")
// console.log("7")
// console.log("8")
// console.log("9")
// console.log("10")
// myNumber()
// =======================================================================
Object.defineProperty(exports, "__esModule", { value: true });
//write a ts programe thats calculte sum of two number 10, 20 using function
// function sum (){
//     let num1:number=10;
//     let num2:number=20;
//     let result:number=num1+num2
//     console.log("result is addition: ", result);
// }
// sum()
//===========PROBLEM=============
//write a ts programe thats calculte sum of two number 20, 30 using function
//when we calculate diferent value so we write uper whole programme again and change 
// the value its not correct.its create reduncy.so we pass the variable in parameters
// when we call sum then we pass value and function return addition of sum. 
// function sum2 (num1:number, num2:number){ //parameters
//     let result:number=num1+num2 //operation
//     console.log("result is addition: ", result);               //{}function defination
// }
// sum2(20,30) //input value
// ======================================================================
//write a ts programe thats calculte sum of two number 5, 2 using function
// sum2(5,2) //function calling and arguments
// ======================================================================
//   ASSIGNMENT
//Q.write a programme using function to convert the tempreture from celsius to fahrenheit?
// function cToFTemprature(_temp:number){
//     let tempF:Number=_temp * (9/5) + 32;
//     console.log("temprature in fahrenheight=" , tempF);
// }
// cToFTemprature(36);
// cToFTemprature(40);
// // ==========================================================================
//Q.write a programe using function to creat percentage.
// function calculatePercentage (marksObtain:number, totalMarks:number){
//     let percentage:number= (marksObtain / totalMarks) * 100;
//     console.log("percentage is:", percentage);
// }
// calculatePercentage(1045,1100);
// ====================================
function halfFryEgg() {
    let cooked = 1 + 1.5 + 2;
    console.log(cooked);
}
halfFryEgg(); //invoking or calling function
// ======================RETURN FUNCTION================================
// function halfFryEgg():number{
//           let cooked = 1 + 1.5 + 2
//           return cooked
// }
// let response:number = halfFryEgg()
// console.log(Response)
// ====================================
function myFunction() {
    console.log("abc");
    console.log("xyz"); // is method me output ksi input pr depend nahe karta
}
myFunction(); //invoke krna
// myFunction() //invoke krna
// myFunction() //invoke krna
// myFunction() //invoke krna
// myFunction() //invoke krna
// ====================================================================
// =================================RETURN==========================================
//write a ts programe thats calculte sum of two number 10, 20 using function and add 
// number 5 in result after the calculation?
//=========================PROBLEM============================
//Hum requirment k hisab se 5 add karey gy but jab hum same function ko nechy call 
// karey ge to waha bhi addition 5 ayega but hmy 
// 40 add chaye to isko hum return function se pas karwaye gy.or phr jab hum nechy 
// call karey gy to variable me pass kar k us variable ko over write kardegy then hum 
// us me hum apne requiremnt k hisab se add number kar sakty he
function sum9(num1, num2) {
    let result = num1 + num2;
    // result = result + 5;
    // console.log("result is addition: ", result); // yaha console nhe kry gy           
    return result;
}
let sumResult = sum9(10, 20);
sumResult = sumResult + 5;
console.log("return function add number:", sumResult);
//write a ts programe thats calculte sum of two number 20, 30 using function and add 
// number 40 in result after the calculation?
let addRsult = sum9(20, 30);
addRsult = addRsult + 40;
console.log("second sum add 40:", addRsult);
// ===============================================================================
//ARROW FUNCTION
let fryEgg2 = () => 1 + 1.5 + 2;
let action2 = fryEgg2();
console.log(action2);
// ======================================
let fryEgg = (egg, butter, salt) => (egg + butter + salt);
let actions = fryEgg(1, 1.5, 5);
console.log(actions);
// ===============================================
let fryEgg1 = () => { return 1 + 1.5 + 5; };
let action1 = fryEgg1();
console.log(action1);
// =============================================================
// let sumArrow = ()=>{
// let num1:number=10;
// let num2:number=20;
// let result:number=num1+num2
//     console.log("sum result of arrow function:", result);
//  }                                
// sumArrow()
// =======================================
// let sumArrow = (num1:number,num2:number)=>{   //parameter bhi received kr sakta he
//     let result:number=num1+num2
//         console.log("sum result of arrow function:", result);
//      }                                
//     sumArrow(10,20); //or hum input bhi de sakty he
// =========================================================================
let sumArrow = (num1, num2) => {
    let result = num1 + num2;
    console.log("sum result of arrow function:", result);
    return result;
};
let samResult = sumArrow(10, 20) - 25; // ab return k sath hum extra operation krskty he
console.log("sum result of arrow return function:", samResult);
//  ================================================================================
//1 line ka code he to asa perform krny se automaticly return bhi kardeyga{} nhe lagny
let sumarrow = (num3, num4) => num3 + num4;
let calculation = sumarrow(50, 80);
//  console.log(typeof sumarrow)
console.log("without return keyword return function value:", calculation);
//  ====================================================================
// 1=global scop, 2=local scop, 3=block scop
//1=global k variable kahi bhi acesseable hoty hy
//2=local k variable serf usi function k block me accessable hy
//3= is me ager let ya const ka variable hu to bus block me assess karey ga 
// ager var se bnaye to wo bahr bhi acess kr sakta he
// ===============================DEFAULT PARAMETER========================================
//pehle se built in function. pehle se defult seeting 
// function halfFryEggs (egg:number=1,butter:number=1.5,salt:number=2):number{
//     return egg + butter + salt;
// }
// let response:number = halfFryEggs(1,1.5,3)
// console.log(response)
// ==========================REST PARAMETER====================================
function halfFryEggs(egg = 1, ...ingrediants) {
    console.log(egg);
    console.log(ingrediants);
}
halfFryEggs(1, 1.5, 2, 5);
// ==============================================
function halfFryEgg0(egg = 1, ...ingrediants) {
    console.log(egg);
    console.log(...ingrediants);
}
console.log("rest");
halfFryEgg0(1, 1.5, 2, 5);
// =========================PARAMETER AND ARGUMENTS===================================
//Q.create a function using the "function" keyword that takes a string as an 
// argument & returns the number of vowels in the string
//Q.creat an arrow function to perform the same task?
//Q.Write a javascript function that accept a string as a parameter and counts the number of vowels withiin the string?
//Q.Write a javascript function that accept a number as a parameter and checks wether it is prime or not using recursion ?
//Q.write a javascript function to find the first not repeat character?
//Q. write a function that returns the square of anumber?
//Q.function 'displayMessage()' prints "Hello world" string using console.log() function?
