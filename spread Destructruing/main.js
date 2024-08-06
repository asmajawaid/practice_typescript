// The spread operator in Typescript, denoted by three dots (`…`), is a powerful 
// tool, that allows you to spread the elements of an array or objects into 
// another array or objects. This operator makes it easy to copy arrays, combine 
// arrays, or create shallow copies of iterable.
// this is new feature. can be use two ways:
// 1.Initializing arrays and objects from another array or object
// 2.Object de-structuring
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//SPREAD SYNTAX
var arr2 = [9, 8, 7]; //Array ko object me convert karna
var obj1 = __assign({}, arr2); //print key value pair me convert hoker hoga 
console.log(obj1);
// ====================================================
//ager mery pas function he jo 3 value return karta he 
function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}
var obj = sum(9, 8, 3); //print 20
console.log(obj);
// ================================================================
//REACT and NODE.JS me use hota he object me se ksi ak property ki value change karna.
var obj2 = {
    name: "asma",
    comapny: "company xyz",
    address: "XYZ"
};
console.log({ obj2: obj2, name: "hifza" });
// // ==========================================================
function halfFryEgg(egg) {
    if (egg === void 0) { egg = 1; }
    var ingrediants = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingrediants[_i - 1] = arguments[_i];
    }
    console.log(egg);
    console.log.apply(console, ingrediants);
}
console.log(1, 1.5, 2, 5);
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
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var aa = arr1[0], bb = arr1[1], cc = arr1[2], restt = arr1.slice(3);
console.log.apply(console, __spreadArray([aa, bb, cc], restt, false));
// ============================================
// let arr = [1,2,3,4,5,6,7,8,9]
// let [a, , , ...rest] = arr //ager a=1 rest=4 5 6 7 8 9 so b and c ki value skip hojaye gi
// console.log(a, rest)
// ====================================================
// let arr = [1,2,3,4,5,6,7,8,9]
// let [a, ,b, ...rest] = arr // print a1 b3 rest 4 to 9
// console.log(a,b, rest)
// ===============================================
var arr = [10, 25, 68, 45, 9, 16];
var y = arr[0], x = arr[1], rest = arr.slice(2);
console.log(x, y, rest);
// ============================================
var _a = { a: 5, b: 9 }, a = _a.a, b = _a.b;
console.log(a, b);
// =================================================
