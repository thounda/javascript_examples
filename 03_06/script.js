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
// Examples of Dot Notation
console.log("The backpack object:", backpack);
console.log("The pocketNum value from Dot notation:", backpack.pocketNum);
console.log("Strap Length Left", backpack.strapLength.left);

// Examples of Bracket Notation
console.log(
  "The pocketNum value from Bracket notation:",
  backpack["pocketNum"]
);

/**
 * Bracket notation allow to execute more advanced scripting
 */

// Set var then call the var in the Bracket notation
var query = "pocketNum";
console.log(
  "The pocketNumb string parsed in Bracket notation:",
  backpack[query]
);
