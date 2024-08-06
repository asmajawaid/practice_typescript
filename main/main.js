"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHi() {
    console.log('Hi!');
}
let speech = sayHi();
console.log(speech); // undefined
// function throwError(errorMsg: string): never { 
//     throw new Error(errorMsg); 
// } 
// function keepProcessing(): never { 
//     while (true) { 
//  console.log('I always does something and never ends.')
// }
// }
// throwError("error");
// keepProcessing()
// let nug = [1,2,3,4,5];
// let result = 0;
// for(let i=0; i<nug.length; i++){
//     result += nug[i];
// }
// console.log(result);
// function greet(name:string):string {
//     return `Hello! ${name}`
// }
// console.log(greet("Arshad"));
// let arr9: number[]=[4,6,8,10]
// let arr2 = arr9.map((num)=>{ num * 2}); //return nahe kya
// console.log(arr2); //undefinie array
// function myName() {
//     return "ASMA"
// }
// console.log(myName());
// let aj:number = 5;
// let bj:number = 10;
// bj = aj++;
// console.log(aj + bj); //11
// let a3 = 9;
// console.log("result", --a3 - a3--); //0
// let a =4;
// console.log(--a * a++); //9
// let p = 5;
// console.log(p++); //5
// let o = 4;
// console.log(o++ + o++);//9 =4+5
// let i = 7;
// console.log(i++ * i--); //56
// let u = 10;
// console.log(--u + u++);//18
// let y= 3;
// y *=  2;
// console.log(y--); //6
// let t = 5;
// console.log(t++ + ++t);//12=5+(1+6)
// let r=8;
// r--
// console.log(r); //7
// console.log(2+"2");//22
// let e =5;
// console.log(e++);//5
// let p1=5;
// let p2=2;
// let p3= ++p1 + p1++ + --p2 + p2-- + p1 + p2++ + p2;
// console.log(p3);// 6+5+1+2+6+1+2=22
// console.log(parseFloat("12")+3);//15
// console.log(Math.round(6.8));//7
// let fruit:string="apple"
// console.log(apple); //error
// let n = 5;
// n += 5;
// n++
// console.log(n); //11
// console.log(6<11);//true
// let pet = "cat"
// console.log("my pet is ${pet}"); // same string print hoga
// let x:any ="hammad"
// console.log(x.lenght);// undefine
// let a: number=10;
// let b: string="65";
// console.log(a+ Number(b)); // aloow to add numbers
// let xx =Number('ali')
// console.log(xx); // NaN
// let arr1:number[] =[1,2,3]
// let arr2:number[] =[4,5,6]
// const arr3 = arr1.concat(arr2)
// console.log(arr3.length);
// const arr:string[]=["a","b","c"]
// const result=arr.pop()
// console.log(result); //c
// // let person:number,{name:string, age: number}={name:"asma",age:21}
// // console.log(person.hasOwnProperty("gender"));
// let x1= Number('ali')
// console.log(x1);
// const str:string ="123"
// const aa = Number(str);
// console.log(typeof (aa)); //number
// const y:number=5;
// const z:number=3;
// console.log(`${y} + ${z} =${y+z}`); //5+3=8
const number1 = [1, 2, 3, 4];
const doubled = number1.map(num => num * 2);
console.log(doubled);
// let rst =[1,2,3];
// let yy=[...rst,4];
// rst[0]=5;
// console.log(yy);//[1 2 3 4]
// function example() {
//     let a = 10;
//     if (true){
//         let a =20;
//         console.log(a);
//     }
//     console.log(a);
// }
// example()
let arr = [1, 2, 3, 4, 5];
arr.push(6, 7);
arr.unshift(3);
arr.pop();
arr.shift();
arr.splice(1, 1, 5);
console.log(arr);
