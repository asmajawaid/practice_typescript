// The spread operator (`...`) and the rest parameter (`...`) in JavaScript both use the three-dot syntax, but they serve different purposes and are used in different contexts. Here's a breakdown of the differences between the two:

// ### Spread Operator

// 1. **Purpose**: The spread operator is used to expand or spread elements of an iterable (like an array or string) into individual elements.
// 2. **Usage**:
//    - **Array**: It can be used to create a shallow copy of an array, concatenate arrays, or pass array elements as arguments to a function.
//    - **Object**: It can be used to create a shallow copy of an object or merge objects.
// 3. **Example**:

//    ```javascript
//    // Array example
//    const arr1 = [1, 2, 3];
//    const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

//    // Function example
//    const sum = (a, b, c) => a + b + c;
//    const numbers = [1, 2, 3];
//    console.log(sum(...numbers)); // 6

//    // Object example
//    const obj1 = { a: 1, b: 2 };
//    const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
//    ```

// ### Rest Parameter

// 1. **Purpose**: The rest parameter is used to collect multiple function arguments into an array.
// 2. **Usage**: It allows a function to accept an indefinite number of arguments as an array.
// 3. **Example**:

//    ```javascript
//    function sum(...args) {
//      return args.reduce((acc, val) => acc + val, 0);
//    }

//    console.log(sum(1, 2, 3, 4)); // 10

//    function concatenate(separator, ...strings) {
//      return strings.join(separator);
//    }

//    console.log(concatenate(', ', 'Hello', 'World', 'from', 'JavaScript')); // 'Hello, World, from, JavaScript'
//    ```

// ### Key Differences

// 1. **Context of Use**:
//    - The spread operator is used to expand an array or object into individual elements.
//    - The rest parameter is used to gather multiple function arguments into a single array.

// 2. **Position**:
//    - The spread operator can be used anywhere in an array or object literal and function calls.
//    - The rest parameter must be the last parameter in a function definition.

// 3. **Nature**:
//    - The spread operator spreads elements.
//    - The rest parameter collects elements.

// Understanding these differences helps in choosing the right one depending on the context in which you are working.