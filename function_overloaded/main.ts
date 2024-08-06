// Function Type Expressions
// The simplest way to describe a function is with a function type expression. 
// These types are syntactically similar to arrow functions:

function greet (fn: (a:string) => void) {
    fn("HELLO, WORLD");
};
function print(s:string){
    console.log(s);
};
greet(print)

// function g(a:string) {
//     console.log("hello world"); 
// }
// g(a)       //dont called as simple function 



// The syntax (a: string) => void means “a function with one parameter, named a, of type 
// string, that doesn’t have a return value”. Just like with function declarations, if a 
// parameter type isn’t specified, it’s implicitly any.

// Step 1: Define the overload signatures

function myFunction(x: number): void;
function myFunction(x: number, y: number): void;
function myFunction(x: number, y: number, z?: number): void;

// Step 2: Implement the function

function myFunction(x: number, y?: number, z?: number): void {
    if (typeof y === 'undefined') {
        console.log(`Called with x: ${x}`);
    } else if (typeof z === 'undefined') {
        console.log(`Called with x: ${x}, y: ${y}`);
    } else {
        console.log(`Called with x: ${x}, y: ${y}, z: ${z}`);
    }
}

// Usage examples

myFunction(1);             // Output: Called with x: 1
myFunction(1, 2);          // Output: Called with x: 1, y: 2
myFunction(1, 2,3);       // Output: Called with x: 1, y: 2, z: 3




// Step 1: Define the overload signatures

// Login with username and password
function login(username: string, password: string): void;
// Login with an OAuth token
function login(token: string): void;

// Step 2: Implement the function

function login(arg1: string, arg2?: string): void {
    if (typeof arg2 === 'undefined') {
        // Handle OAuth token login
        console.log(`Logging in with OAuth token: ${arg1}`);
        // Simulate OAuth token login process
        if (arg1 === 'valid-token') {
            console.log('Login successful with token');
        } else {
            console.log('Invalid token');
        }
    } else {
        // Handle username and password login
        console.log(`Logging in with username: ${arg1} and password: ${arg2}`);
        // Simulate username and password login process
        if (arg1 === 'user' && arg2 === 'pass') {
            console.log('Login successful with username and password');
        } else {
            console.log('Invalid username or password');
        }
    }
}

// Usage examples

login('user', 'pass');           // Output: Logging in with username: user and password: pass
                                 //         Login successful with username and password

login('user', 'wrongpass');      // Output: Logging in with username: user and password: wrongpass
                                 //         Invalid username or password

login('valid-token');            // Output: Logging in with OAuth token: valid-token
                                 //         Login successful with token

login('invalid-token');          // Output: Logging in with OAuth token: invalid-token
                                 //         Invalid token










