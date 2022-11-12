/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20; // This is the value that the IIEF will display b/c IIEF triggers instantly

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume); // the value of 8 currently assigned
    this.volume = volume; // the 'this' keyword now reassigns the value from 8 to 5 to volume
    console.log("this.volume after update:", this.volume);
    // IIEF to showcase issue using the 'this' keyword within an object
    (function () {
      // Function Declarations are hoisted to the global scope - out of the object
      console.log("this.volume in nested function 'Declaration':", this.volume); // Look as the top of script for value assignment
    })();
    // Below, we use an ARROW function which now produce the correct results - value of 5
    (() => {
      // Function Declarations are hoisted to the global scope - out of the object
      console.log("this.volume in nested 'Arrow' function:", this.volume); // Look as the top of script for value assignment
    })();
  },
};

console.log(greenPack.newVolume(5));
