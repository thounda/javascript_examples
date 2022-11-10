/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

// Define a ARROW Function
/* Arrow functions can only be called after they have been declared. Thus, impulsing a stricter way of writing JS code by using arrow functions. Second, you can't use arrow functions when declaring methods in an object. Inside an object if you have a method you need to use a proper anonymous function declaration. The arrow function simply doesn't work in that context */
const addPack = (currentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPack(greenPack));
