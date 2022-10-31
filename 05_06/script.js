/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;

/** The Element.attributes property returns a live collection of all attribute nodes registered to the specified node. It is a NamedNodeMap, not an Array, so it has no Array methods and the Attr nodes' indexes may differ among browsers. To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute.
 * 
 * TO CHECK FOR A SPECIFIC ATTRIBUTE 
 Console.log command: document.querySelector("img").hasAttribute("src")
Results: true

* TO GET THE SPECIFIED ATTRIBUTE
Console.Log command: document.querySelector("img").getAttribute("src")
'../assets/images/everyday.svg'

or 

document.querySelector("img").getAttribute("alt")
''

* TO SET AN ATTRIBUTE ON A TAG
document.querySelector("img").setAttribute("alt", "Backpack Drawing")
document.querySelector("img").setAttribute("title", "This should not be here")

* TO SET AN ATTRIBUTE ON A TAG
document.querySelector("img").removeAttribute("title")

-----

Console.log Commands & Results to list ALL attributes:
 * document.querySelector("img").attributes
NamedNodeMap {0: src, 1: alt, src: src, alt: alt, length: 2} 

*/
