/* The key to understanding the objective to complete the challenge is this file - data.js so review the logic in detail
You'll notice that this script create two objects that are then added to an array, backpackObjectArray to which we can then use to MAP thru...
Note: the list of requirements can be found in script.js
*/

// Import the Backpack class so we can make new Backpack objects.
import Backpack from "./Backpack.js";

// Create new Backpack object  - this is the 1st object from the 'backpack' class
const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

// Create new Backpack object  - this is the 2nd object from the 'backpack' class
const frogPack = new Backpack(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "October 16, 2019 15:00:00 PST",
  "../assets/images/frog.svg"
);

// Add Backpack objects into an array  - this the array we'll use to work with MAP
const backpackObjectArray = [everydayPack, frogPack];

// Export the array to be used in other files - i.e. script.js
export default backpackObjectArray;
