/**
 * Event listeners
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 *
 * Definition: An EventListener is exactly what it sounds like: A method added to a target, usually an element, that listens for a specific event and then calls back a function when that event is detected.
 */

// Import module to hook in logic from exported file to local file - script.js
import backpackObjectArray from "./components/data.js";

// Create copy or instance of the original array to work with in code, below - leaving the original array 'as is'
const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article"); // creating DOM element to inject into HTML on render
  backpackArticle.classList.add("backpack"); // defining the CSS class to include in html once rendered to browser
  backpackArticle.setAttribute("id", backpack.id); // setting an id to each item - also recommended when looping thru array

  // At end of code snippet - a button element was added to work with the JS code to explain demo
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
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  // Grab the button for each interaction (article) which is where the EventList will be set
  const button = backpackArticle.querySelector(".lid-toggle");
  const status = backpackArticle.querySelector(".backpack__lid span");

  // Create EventListener to grab event from button on 'click' and change 'status'
  button.addEventListener("click", (event) => {
    console.log(event);
    // Toggle the status
    status.innerText === "open"
      ? (status.innerText = "closed")
      : (status.innerText = "open");
  });

  // passing back results from the function / method
  return backpackArticle;
});

// Grabbing the element in the HTML DOM where we want to inject the template literal content
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});
