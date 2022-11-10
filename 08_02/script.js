/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration - which is hoisted to the global scope and available everywhere within the script
/* Careful when using function declarations b/c they can be overwritten if the same name recalled later within the script - either global scope of even within another function's local scope */
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// Function expression
/*  In a function expression, you set up a variable. In this case, a constant, assign that constant a name and then we set the value of that constant equal to an anonymous function. Thus, this is a function that doesn't have its own name. This anonymous function, again, has parentheses and those parentheses may contain parameters. And then we have a curly bracket wrapping around the function body. So the function functions the same way as the function declaration, except it doesn't in itself have a name. Instead, we place it inside a variable and then we call the variable. This pattern of using a function expression has become the preferred way of declaring functions in JavaScript frameworks like react. */
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));

// Immediately Invoked Function Expression (IIFE)
/*  In an IIFE, we wrap an anonymous function or a name function inside parentheses. You can see here there's a starting parentheses and an end parentheses. And then we put place another set of parentheses outside. What happens now is this function is immediately invoked and run as soon as the browser encounters it. So we are running this function right away without calling it. */
(function () {
  let a = 4;
  let b = 6;
  let c = doSomeMath(a, b); //  Remember, this function which was defined above? Globally accessible, yes
  console.log(`The sum of a and b is: ${c}`);
})();
