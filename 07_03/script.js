/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

// output the array in default format
console.log(backpackContents);

// output the array contents as a string
console.log(backpackContents.join());

// include a separator and / or spacing with the JOIN method
console.log(backpackContents.join(", "));

// To add items to the END of an array, use PUSH method
backpackContents.push("pencil", 5);
console.log(backpackContents.join(" | "));

// To add items to the TOP or Beginning of an array, use the UNSHIFT method
backpackContents.unshift("pencil", 5);
console.log(backpackContents.join(", "));

// To remove the 1st item at the beginning of the array, use SHIFT method
backpackContents.shift();
console.log(backpackContents.join(", ")); // this will remove the 1st item in the array

// To remove the 1st item at the beginning of the array, use SHIFT method
backpackContents.pop();
console.log(backpackContents.join(", ")); // this will remove the last item in the array

// Below, with next example, we're wrapping an LI tag around each item using the forEach method
backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`; // template literals used with this statement to allow var usage
  console.log(item);
});

/* The next example parses thru the array - looking for the FIRST item, only, within the array with a character length of 5 or more based on the IF conditional statement. */
let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item; // Again, only the very FIRST item within the array that meets condition will show
  }
});
console.log("longItems:", longItems);
