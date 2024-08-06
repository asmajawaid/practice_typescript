// let big1 = 9007199254740991n;
// console.log(typeof(big1))
// console.log(big1);
// let big2 = BigInt(9007199254099);
// console.log(big2);
// console.log(typeof(big2));
//SYMBOL
// let sym1 = Symbol();
// let sym2 = Symbol("key"); // optional string key
// console.log(sym1);
// console.log(sym2);
function sayHi() {
    console.log('Hi!');
}
let speech = sayHi();
console.log(speech); //Output: undefined
let nothing = undefined;
// let num1: void = 1; // Error
console.log(nothing);
export {};
