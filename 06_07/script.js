/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

// single equals symbol 'assigns value'
let a = 5;
let b = 4;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

// double equals symbol indicates LOOSE 'comparism' operation
// trippe equals or bang symbol and two equals indicate STRICt 'comparism' operation
if (a == b) {
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}
