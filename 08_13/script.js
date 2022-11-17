/**
 * Switch statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 * 
 * Definittion of use: 
 The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.
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

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

const usedStatus = () => {
  let age = everydayPack.backpackAge();
  //age = 29; // change number to test difference cases 29, 30, 301, 364, 365, 1094, 1095
  let description;
  /*
  //  This is how IF ELSE statements would be used in place of SWITCH statements - not recommended
  if (age >= 30) {
    if (age >= 365) {
      if (age >= 1095) {
        description = "old";
      } else {
        description = "used";
      }
    } else {
      description = "lightly used";
    }
  } else {
    description = "new";
  }
*/

  // This is the Switch configuration which recommended to set conditions
  switch (true) {
    case age >= 1 && age < 30:
      description = "new";
      break;
    case age >= 30 && age < 365:
      description = "lightly used";
      break;
    case age >= 365 && age < 1095:
      description = "used";
      break;
    case age >= 1095:
      description = "old";
      break;
    default:
      console.log(`There is no description for ${age}.`);
  }

  // Console log out results to browser
  console.log(`
  Age: ${age} days
  Status: ${description}
  `);
};

usedStatus();
