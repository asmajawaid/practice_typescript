"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exampleFunction(...args) {
    // args is an array containing the passed arguments, all of type number
    console.log(args);
}
exampleFunction(1, 2, 3);
function sum12(...numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}
console.log(sum12(1, 2, 3)); // Output: 6
console.log(sum12(4, 5)); // Output: 9
console.log(sum12(7)); // Output: 7
function exampleFunction1(...args) {
    console.log(args);
}
function example(a, b, ...rest) {
    console.log(a, b, rest);
}
example(1, 2, 2, 3, 4, 5);
function example1(a = 1, b = 2, ...rest) {
    console.log(a, b, rest);
}
example1(3, 4, 5, 6); // Output: 3 4 [5, 6]
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3 (spread operator)
function example2(...args) {
    console.log(args);
}
example2(1, 2, 3); // Output: [1, 2, 3] (rest parameter)
function greet(greeting, ...names) {
    names.forEach(name => {
        console.log(`${greeting}, ${name}!`);
    });
}
greet('Hello', 'Alice', 'Bob', 'Charlie');
// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
// //function parameters
// function sum0(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sum0(1, 2, 3, 4)); // Output: 10
// //Destructuring Arrays:
// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(rest);   // Output: [3, 4, 5]
// //
// function inviteFriends(firstFriend, ...otherFriends) {
//   console.log('First friend: ' + firstFriend);
//   console.log('Other friends: ' + otherFriends.join(', '));
// }
// inviteFriends('Alice', 'Bob', 'Charlie', 'David');
