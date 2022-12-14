/**
 * Create a Backpack object, populate some HTML to display its properties.
 * Rule of thumb: suggest writing all objects and variable first (higher up in code) before trying to
 * call them (later in the script).  This is based on how JS process logic whcih is 'Top/Down' in structure by default.
 */

/** / Semi-colons and SINGLE or DOUBLE Quotes are all 'Developer' preference - not a requirement for use by JS.  Note: just be consitent with which ever preference being used and JS will decifer code (syntax) structure
 */
// Single line comment

/* Multi-line comment
See! this line is also commented out! */

// By placing your cursor on a line or highlighting multiple lines then hitting CTL / (forward slash) will comment out or uncomment those - select - lines in VSCode.

/**
 *  In VSCode you can enter '/**' and VSCode will auto-populate commments and capture the var as param for comment as shown, below:
 * @param {} update
 */
const updateBackpack = (update) => {
  let main = document.querySelector("main"); // main is an element
  main.innerHTML = markup(backpack);
  console.info(update);
};

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

const markup = (backpack) => {
  return `
  <div>
	<h3>${backpack.name}</h3>
	<ul>
	  <li>Volume: ${backpack.volume}</li>
	  <li>Color: ${backpack.color}</li>
	  <li>Number of pockets: ${backpack.pocketNum}</li>
	  <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
	  <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
	</ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);
