/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 USAGE: The map method takes an existing array, then does something to each of the items in the array and returns each of those items into a new array.  Note: the original array remains 'untouched' - no change to items within that, initial, array.

 Note: MAP() should not be used to, solely, interate or loop thru an array - use 'forEach' in that case; use MAP() when the original array items require modification such as calculations on numbers or modification to strings, etc...
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method - without MAP to loop thru 'stuff' array
// stuff.forEach((item) => {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = item;
//   stuffList.append(listItem);
// });

// MAP method to accomplish the same objective as above but using MAP()
const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

// Loop thru 'stuffItems' to APPEND items to 'articles' element
stuffItems.forEach((item) => {
  stuffList.append(item);
});

// Debug on MAP results using console logs
console.log("stuff:", stuff);
console.log("stuffItems", stuffItems); // This display new array results from MAP()

// Append the dynamically generated content to the DOM
article.append(stuffList);
