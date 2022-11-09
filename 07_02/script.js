/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

// display array via console log
console.log(collection);
// Display count or length of items within the array
console.log(collection.length);

// Call item within array starting with index zero
console.log(collection[1]); // this calls the 2nd item within the array

// Update or change an item within an array
collection[2] = "camera";
console.log(collection);

// Add a new item to the end of the array
collection[collection.length] = "new item";
console.log(collection);

// Set item futher down within an array - items 5 thru 8 will be set to 'undefinded'
collection[9] = "at the end";
console.log(collection[9]);
console.log(collection[5]);
console.log(collection[8]);
