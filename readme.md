51. Write a TypeScript function that takes two parameters (a and b) of type number and returns their sum.

typescript
Copy code
function addNumbers(a: number, b: number): number {
    return a + b;
}
52. Implement a TypeScript interface named Person with name (string) and age (number) properties.

typescript
Copy code
interface Person {
    name: string;
    age: number;
}
53. Write a TypeScript function named printPerson that accepts a parameter person of type Person and prints their name and age.

typescript
Copy code
function printPerson(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}
54. Define a TypeScript type alias named Coordinate for an array with two numbers representing x and y coordinates.

typescript
Copy code
type Coordinate = [number, number];
55. Create a TypeScript function calculateDistance that takes two parameters of type Coordinate and calculates the Euclidean distance between them.

typescript
Copy code
function calculateDistance(coord1: Coordinate, coord2: Coordinate): number {
    const [x1, y1] = coord1;
    const [x2, y2] = coord2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
56. Define a TypeScript class named Circle with properties radius (number) and color (string). Include a method getArea() that returns the area of the circle (π * radius^2).

typescript
Copy code
class Circle {
    radius: number;
    color: string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
57. Implement a TypeScript function filterNumbers that takes an array of mixed types and returns only the elements that are numbers.

typescript
Copy code
function filterNumbers(arr: (number | string | boolean)[]): number[] {
    return arr.filter(item => typeof item === 'number') as number[];
}
58. Write a TypeScript function flattenArray that flattens a nested array of any depth into a single array.

typescript
Copy code
function flattenArray<T>(arr: T[][]): T[] {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val as any[]) : val), []);
}
59. Create a TypeScript interface Shape with an abstract method getArea() that returns a number representing the area of the shape.

typescript
Copy code
interface Shape {
    getArea(): number;
}
60. Define a TypeScript class Rectangle that implements the Shape interface with properties width and height. Implement the getArea() method to return the area of the rectangle (width * height).

typescript
Copy code
class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}


61. Write a TypeScript function that takes a number (n) as input and prints all numbers from 1 to n.

typescript
Copy code
function printNumbers(n: number): void {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
62. Implement a TypeScript function that calculates the factorial of a number (n).

typescript
Copy code
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
63. Write a TypeScript function that checks if a given number (num) is prime. Return true if it is prime, otherwise false.

typescript
Copy code
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    if (num === 2 || num === 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}
64. Implement a TypeScript function that reverses a string (str).

typescript
Copy code
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
65. Write a TypeScript function that takes an array of numbers (arr) and returns the sum of all positive numbers in the array.

typescript
Copy code
function sumOfPositiveNumbers(arr: number[]): number {
    return arr.filter(num => num > 0).reduce((acc, val) => acc + val, 0);
}
66. Create a TypeScript function that checks if a given string (str) is a palindrome. Return true if it is, otherwise false.

typescript
Copy code
function isPalindrome(str: string): boolean {
    const normalizedStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}
67. Implement a TypeScript function that finds and returns the largest number in an array of numbers (arr).

typescript
Copy code
function findLargestNumber(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error('Array must not be empty');
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
68. Write a TypeScript function that converts a temperature in Celsius (celsius) to Fahrenheit.

typescript
Copy code
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}
69. Create a TypeScript function countOccurrences that counts how many times a specific element (value) appears in an array (arr).

typescript
Copy code
function countOccurrences<T>(arr: T[], value: T): number {
    return arr.reduce((count, current) => {
        return current === value ? count + 1 : count;
    }, 0);
}
70. Implement a TypeScript function that removes falsy values (false, null, 0, "", undefined, and NaN) from an array (arr).

typescript
Copy code
function removeFalsyValues(arr: any[]): any[] {
    return arr.filter(Boolean);
}