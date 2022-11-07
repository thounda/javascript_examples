/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let a = 5;
let b = 4;
let c = 3.2;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

// Addition operator
let result1 = a + b;
console.log("Result: ", result1);

let result2 = a - b;
console.log("Result: ", result2);

let result3 = a / b;
console.log("Result: ", result3);

let result4 = a * b;
console.log("Result: ", result4);

// more advanced calculations - example 1
let result5 = (a + b) / 2;
console.log("Result: ", result5);

// more advanced calculations - example 2
let result6 = (a + b) / c;
console.log("Result: ", result6);

// modulus operator
let result7 = a % b;
console.log("Result: ", result7);

// exponential operator
let result = a ** b;
console.log("Result: ", result);

// Increment value before displaying
console.log("Result: ", ++a);
console.log(a);

// Decrement value before displaying
console.log("Result: ", --a);
console.log(a);

// Increment value after 1st value is parsed
console.log("Result: ", a++);
console.log(a);

// Decrement value after 1st value is parsed
console.log("Result: ", a--);
console.log(a);

// Plus symbol / concatenation
let e = 4;
let f = "4";

// the '+' symbol will concatenate a number & string resulting in 44
let result8 = e + f;
console.log("Result: ", result8);

// only the PLUS symbol will concatenate - other arithmic symbols such as minus will calculate
let result9 = e - f;
console.log("Result: ", result9);
