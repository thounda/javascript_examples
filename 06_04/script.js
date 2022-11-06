/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

// globally scoped variable
let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let titleColor = "blue"; // block scoped var within function using 'let'
  document.querySelector(".title").style.color = color;
  console.log("inside:", titleColor); // locally scope var is defined inside function
}

headingColor();

console.log("outside:", titleColor); // locally scope var called outside of function; result in undefined

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
