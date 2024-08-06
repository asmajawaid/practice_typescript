// The spread operator in Typescript, denoted by three dots (`…`), is a powerful 
// tool, that allows you to spread the elements of an array or objects into 
// another array or objects. This operator makes it easy to copy arrays, combine 
// arrays, or create shallow copies of iterable.
// this is new feature. can be use two ways:
// 1.Initializing arrays and objects from another array or object
// 2.Object de-structuring


//SPREAD SYNTAX
 const arr2 =[9,8,7] //Array ko object me convert karna
const obj1 ={...arr2} //print key value pair me convert hoker hoga 
console.log(obj1)
// ====================================================
//ager mery pas function he jo 3 value return karta he 
function sum(v1:number, v2:number, v3:number) {
    return v1 + v2 + v3;
}
let obj = sum(9,8,3) //print 20
    console.log(obj)                               

// ================================================================
//REACT and NODE.JS me use hota he object me se ksi ak property ki value change karna.
let obj2 ={
    name: "asma",
    comapny: "company xyz",
    address: "XYZ"
}
console.log({obj2, name:"hifza"});
// // ==========================================================
function halfFryEgg (egg:number=1, ...ingrediants:number[]){
    console.log(egg)
    console.log(...ingrediants)
}
console.log(1, 1.5, 2,5)

// ====================================================================================

//DESTRUCTURING: Assignment is used to unpack values from an array or properties from objects, into distinct variables.

// let arr =[3,5] // if add 8 but console only a,b not c
// =========old method dont do this 
// let a =arr[0]
// let b = arr[1]                      1st
// console.log(a,b)
// ==============================
// let arr = [3,5]
// let [a, b] = arr //new one
// console.log(arr); // show in the array       2nd
// ======================================
// let arr=[3,5]
// let [a,b] = arr 
// console.log(a,b);
// ========================================
// let arr =[3,5,8]
// let [a,b,c] = arr
// console.log(a,b,c); // print 3 5 8
// =========================================
// let arr =[3,5,8,]
// let [a,b,c] = arr
// console.log(a,b,c,d); //print error bcoz d value not initializes
// ==========================================
// value with ...rest show in araay
let arr1 = [1,2,3,4,5,6,7,8,9]
let [aa,bb,cc, ...restt] = arr1
console.log(aa,bb,cc, ...restt)
// ============================================
// let arr = [1,2,3,4,5,6,7,8,9]
// let [a, , , ...rest] = arr //ager a=1 rest=4 5 6 7 8 9 so b and c ki value skip hojaye gi
// console.log(a, rest)
// ====================================================
// let arr = [1,2,3,4,5,6,7,8,9]
// let [a, ,b, ...rest] = arr // print a1 b3 rest 4 to 9
// console.log(a,b, rest)
// ===============================================
let arr = [10,25,68,45,9,16]
let [y,x,...rest]=arr
console.log(x,y,rest);

// ============================================
let {a,b}= {a:5, b:9}
console.log(a,b)
// =================================================





































