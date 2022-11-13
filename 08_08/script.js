/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

// create arrow function to format the 'sum' value - returning those results back to tipCalculator function
const formatter = (locale, currency, value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
  // expected output: set based on - inputted - locale
  return formattedValue;
};

// 'sum' is going to be passed up to the 'formatter' function for processing then returned, properly, formatted
const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
};

// Locale for Germany
tipCalculator(29.95, 18, "de-DE", "EUR");
// Locale for Japanesse (YEN)
tipCalculator(29.95, 18, "ja-JP", "JPY");
// Locale for Norwegian (NOK)
tipCalculator(29.95, 18, "nb-NO", "NOK");
// Locale for English (United States)
tipCalculator(29.95, 18, "en-US", "USD");
