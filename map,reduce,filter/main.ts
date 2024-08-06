import { log } from "console";
// ============================ARRAY MAP mathod=====================================
// make a new Array with passing 3 argument if required. value is 10, index is 0, array is wholw array

let arr = [10, 11, 12];
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value * 2;
});
console.log(a);

// ====================================Array Filter method=============================
let arr2 = [10, 2, 23, 4, 95, 6, 0];
let a2 = arr2.filter((value) => {
  return value <= 10;
});
console.log(a2);

// ===========================
let ages = [32, 33, 16, 40, 0];
let result = ages.filter(checkKids);
function checkKids(age: number) {
  return age <= 18;
}
console.log(result);

// ==============================ARRAY REDUCE METHOD===================================
let arr3 = [1, 2, 3, 4, 5, 5];
let newArray = arr3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(newArray);

// ==================OR=====================
let reduce_function = (h1: number, h2: number) => {
  return h1 + h2;
};
let newArray3 = arr3.reduce(reduce_function);
console.log(newArray3);
