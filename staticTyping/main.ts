// TypeScript Example: Static Typing in JavaScript

// Let's define a simple function to add two numbers
function addNumber(a: number, b: number): number {
    return a + b;
  }
  
  // Now, let's use the function
  const resultl = addNumber(5, 10);
  
  // Uncomment the line below to see TypeScript's static typing in action
  // const invalidResult = addNumber(5, '10'); // Error: Argument of type 'string' is not 
//   assignable to parameter of type 'number'