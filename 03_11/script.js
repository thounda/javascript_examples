/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;
  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
  };
  this.newStrapLength = function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  };
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

/** An 'object constructor' function is a shorter version to build an objecti template (class).
One difference with how a class vs the object constructor function is that the method lives 
inside the, main, object constuctor function just like the properties.

A class allow more capabilities than an object constructor function and the preferred choice over 
an OC function by most developer. However, OC functions at one point was the only way to define objects.

Rule of thumb: always use a class unless working with old code where OC functions already defined or you 
simply required to use an OC function due to old code base or infrastructure not supporting classes.
 */
