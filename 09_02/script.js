/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 *
 * Note:  An event listener can be appended to any element within the window or the Document Object Model.
 * 
 * Everything that happens in the browser is an event and you can monitor any of those events by adding an event listener and listening for them. 
 
 - Event listeners can be appended to any element inside the window and inside the DOM and you can trigger whatever function you want either using an anonymous function inside the event listener or by using a callback. 
  
 - If you use a callback or an anonymous function, you can grab the event object and do something with that event object if that is meaningful in the current context.
 */

// Get classes from the HTML DOM to use to inject dynamic logic once defined - i.e. appending to class, toggling, or even removing / deleting, etc...
const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");

//This eventListener logs to the browser console when the button is clicked...
button.addEventListener(
  "click",
  () => {
    button.classList.toggle("active");
    console.log("Button was clicked!");
  },
  false
);

// Update the x and y displays to show the current mouse position.
const mousePosition = (event) => {
  posX.innerText = event.pageX;
  posY.innerText = event.pageY;
  console.log(event);
};

// The, below, event listener is append to anything in te browser window (itself) which includes a callback function - mousePosition
window.addEventListener("mousemove", mousePosition, false);

// Change the color of the box when the mouse enters.
container.addEventListener(
  "mouseenter",
  () => {
    container.classList.add("blue");
  },
  false
);

container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("blue");
  },
  false
);
