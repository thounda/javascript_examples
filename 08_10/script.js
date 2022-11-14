/**
 * Using a callback function.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// Helper function to format currency numbers. Used by tipCalculator
const formatter = (locale = "en-US", currency = "USD", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

// Callback receives finalTip object, creates and outputs table on the DOM.
const printHTML = (finalTip) => {
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
    <tr>
      <td>Sum before tip:</td>
      <td>${finalTip.sum}</td>
    </tr>
    <tr>
      <td>Tip percentage:</td>
      <td>${finalTip.percentage}</td>
    </tr>
    <tr>
      <td>Tip:</td>
      <td>${finalTip.tip}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${finalTip.total}</td>
    </tr><br />
  `;
  document.querySelector("main").append(tipTable);
};

// Create a finalTip object with all the data. Send it to the printHTML callback.
const tipCalculator = (sum, percentage, locale, currency, callback) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  const finalTip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total),
  };

  // execute the 'callback' function - passing the object 'finalTip' into that function
  callback(finalTip);
};

/*Pass the entire, printHTML, function up into tipcalculator function as a value and that the function gets captured as a parameter in callback.  Note the parenthesis not included so the code parsed only ot callback - read comments in the commit for detailed explanation  */
tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);
tipCalculator(29.95, 29, "nb-NO", "NOK", printHTML);
