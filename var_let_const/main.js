let x = "123";
{
    let x = "lkip";
    console.log(x);
}
// let x = "56" //not allowed
var b = "120";
{
    var b = "loe";
    // console.log(b);
}
console.log(b);
var b = "129";
var b = "lll";
let perform;
perform = 123;
// const gogle //not allowed
// const jj=1;
// jj=2 // not allow
var joging;
joging = "lpop";
var k = 2;
// let k = 3 //not allowed
{
    let y = 2;
    // let y= 3 //not allowed
}
let q = 5;
// var q= 3 //not allowed
// Redeclaring a variable with let, in another block, IS allowed:
let h = 1;
{
    let h = 2;
}
;
{
    let h = 3;
}
;
// function example() {
//     console.log(a);
//     var a = 10;
//     console.log(a);
// }
// example(); //undefine nad 10
// function example() {
//     console.log(a);
//     let a = 10;
//     console.log(a);
// }
// example(); //reference error and 10
const obj = { key: 'value' };
obj.key = 'newValue';
console.log(obj.key); //new value
if (true) {
    var a = 5;
}
console.log(a); //5
if (true) {
    let a = 5;
}
console.log(a); //reference error
// let n
// const m;
// {
// n=5
// m=6
// } //temporal dead zone 
// const a = { key: 'value' };
// a = { key: 'newValue' };
// console.log(a.key); //type error
// var a = 1;
// {
//     let a = 2;
//     {
//         var a = 3;
//     }
//     console.log(a);
// }
//const============not redeclared==reassigned==
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
// But you can NOT reassign the array:
const carss = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR
// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };
// You can change a property: but not reassigned object
car.color = "red";
export {};
// You can add a property:
// car.owner = "Johnson";
