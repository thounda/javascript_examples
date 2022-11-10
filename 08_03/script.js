/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Created a standard object with properties
const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

// Anonymous function expression set via a constant to display / inject content into the HTML DOM
const addPack = function (currentPack) {
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

// If to see the dynamic content via console log
const theArticle = addPack(greenPack);
console.log(theArticle);

// constant containing the queried element from the html document to append the dynamic content
const main = document.querySelector("main");
main.append(addPack(greenPack));
