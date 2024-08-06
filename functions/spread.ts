//array expansion
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//function argument
// function sum(x, y, z) {
//     return x + y + z;
//   }
//   const numbers = [1, 2, 3];
//   console.log(sum(...numbers)); // Output: 6

  //object expansion
  const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

//
let crayons = ['red', 'blue', 'green'];
let moreCrayons = ['yellow', 'purple', 'orange'];

// Using the spread operator to combine all crayons into one big pile
let allCrayons = [...crayons, ...moreCrayons];

console.log(allCrayons); // ['red', 'blue', 'green', 'yellow', 'purple', 'orange']

