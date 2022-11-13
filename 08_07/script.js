/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = (sum, percentage, currency, prefix) => {
  // let sum = 29.95;     // No longer required due to defining as params
  // let percentage = 18;   // No longer required due to defining as params
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  // Set conditional logic to decide where to set currency symbol
  if (prefix) {
    console.log(`
    Sum before tip: ${currency}${sum}
    Tip percentage: ${percentage}%
    Tip:            ${currency}${tip.toFixed(2)}
    Total:          ${currency}${total.toFixed(2)}
  `);
  } else {
    console.log(`
    Sum before tip: ${sum}${currency}
    Tip percentage: ${percentage}%
    Tip:            ${tip.toFixed(2)}${currency}
    Total:          ${total.toFixed(2)}${currency}
  `);
  }
};

tipCalculator(29.95, 18, "$", true); // pass in values for sum & percentage params that is defined in function expression, above
tipCalculator(29.95, 28, "kr", false); // change percentage to see update to function results, instantly for this call
