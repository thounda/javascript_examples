/**
 * Data types in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

// String:
let stringDemo = "A string of text.";
console.log("String:", stringDemo, "typeof:", typeof stringDemo);

// Numbers:
let integerDemo = 4;
console.log("Integer:", integerDemo, "typeof:", typeof integerDemo);

let floatDemo = 5.6;
console.log("Floating point number:", floatDemo, "typeof:", typeof floatDemo);

// Boolean:
let booleanDemo = true;
console.log("Boolean value:", booleanDemo, "typeof:", typeof booleanDemo);

// Null value (nothing):
let nullDemo = null;
console.log("Null value:", nullDemo, "typeof:", typeof nullDemo);

// Undefined:
let undefinedDemo;
console.log("Undefined:", undefinedDemo, "typeof:", typeof undefinedDemo);

let undefinedAssignedDemo = undefined;
console.log(
  "Undefined assigned:",
  undefinedAssignedDemo,
  "typeof:",
  typeof undefinedAssignedDemo
);

// Object:
const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:", objectDemo, "typeof:", typeof objectDemo);

// Array:
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:", arrayDemo, "typeof:", typeof arrayDemo);
