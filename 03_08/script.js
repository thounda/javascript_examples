/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

// Methods with JS changes the value within the browser - in real time; not changing the JS code itself when debugging. However, methods can also be accessed via the script as well to update values.

console.log("Left Before:", backpack.strapLength.left);
backpack.newStrapLength(10, 15);
// Notice the values have changed due to passing data to method
console.log("Left After:", backpack.strapLength.left);
