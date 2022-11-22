/**
 * Event listeners
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */
import backpackObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function () {
  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(
    ({ id }) => id === this.parentElement.id
  );

  // Toggle lidOpen status
  backpackObject.lidOpen == true
    ? (backpackObject.lidOpen = false)
    : (backpackObject.lidOpen = true);

  // Toggle button text
  this.innerText == "Open lid"
    ? (this.innerText = "Close lid")
    : (this.innerText = "Open lid");

  // Set visible property status text
  let status = this.parentElement.querySelector(".backpack__lid span");
  status.innerText == "closed"
    ? (status.innerText = "open")
    : (status.innerText = "closed");
};

/**
 * - Loop through backpackObjectArray
 * - create article for each entry
 * - add articles back to backpackList array
 */
const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

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

  const button = backpackArticle.querySelector(".lid-toggle");
  const status = backpackArticle.querySelector(".backpack__lid span");

  // Edit the EventListener to toggle button text on 'click' event based on 'button' element
  // button.addEventListener("click", (event) => {
  //   console.log(event);
  //   button.innerText === "Open lid"
  //     ? (button.innerText = "Close lid")
  //     : (button.innerText = "Open lid");
  //   status.innerText === "open"
  //     ? (status.innerText = "closed")
  //     : (status.innerText = "open");
  // });

  // EventListener to toggle button text on 'click' event based on 'this' keyword with arrow func - won't work b/c 'this' doesn't know the object
  // button.addEventListener("click", (event) => {
  //   console.log(event);
  //   this.innerText === "Open lid"
  //     ? (this.innerText = "Close lid")
  //     : (this.innerText = "Open lid");
  //   status.innerText === "open"
  //     ? (status.innerText = "closed")
  //     : (status.innerText = "open");
  // });

  // EventListener to toggle button text on 'click' event based on 'this' keyword with function Declaration - will work with 'this' keyword b/c we're working within a proper object - THIS WORKS!
  // button.addEventListener("click", function (event) {
  //   console.log(event);
  //   this.innerText === "Open lid"
  //     ? (this.innerText = "Close lid")
  //     : (this.innerText = "Open lid");
  //   status.innerText === "open"
  //     ? (status.innerText = "closed")
  //     : (status.innerText = "open");
  // });

  // Based on refactoring the logic - scroll to top of script to view the anonymous function - this 'keyword' still work via the 'lidToggle' callback in the Eventlistener for the button element
  button.addEventListener("click", lidToggle);

  return backpackArticle;
});

const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});
