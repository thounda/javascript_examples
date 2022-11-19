/**
 * Solution: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

// Hook in module so script.js has access to logic defined in data.js
import backpackObjectArray from "./components/data.js";

// Map through the array and defining a new object during each interation
const content = backpackObjectArray.map((backpack) => {
  // "backpack" now holds a single backpack object

  // Create new article & set class to element
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");

  // Set article ID to the backpack.id property from the array - this can be viewed by debugging on the array's length and recommended due to multiple items will be looped thru for population from the array. In this case - ALWAYS include ID reference for each item to use in query
  backpackArticle.setAttribute("id", backpack.id);

  // Set the innerHTML of backpackArticle using the backpack object to populate the template with the dynamic content / variables pulled from queried objeect during loop
  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

  // Return the backpackArticle to the content array.
  return backpackArticle;
});

// Get the main element to APPEND the dynamic content to the DOM via the 'main' constant
const main = document.querySelector(".maincontent");

// Loop through the content array to append each backpack article.
content.forEach((backpack) => {
  main.append(backpack);
});
