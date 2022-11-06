/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

// change the color which will be read by next set of lines, below - JS read TOP/DOWN
color = "skyblue";

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

// Example of a function to  set inline style
function headingColor() {
  color = "blue";
  document.querySelector(".title").style.color = color;
}

// Call function to set color
headingColor();
