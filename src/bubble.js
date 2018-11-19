const utils = require('./utils');

/**
 * Performs bubble sort on an array of objects according to a
 * compare function using the bubble sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */

function bubble(arr, compFunction = (a, b) => a - b) {
  // eslint-disable-next-line no-throw-literal
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  let n = arr.length;
  const sorted = [...arr];
  let swaped = true;
  while (swaped) {
    swaped = false;
    for (let i = 1; i <= n - 1; i += 1) {
      if (compFunction(sorted[i - 1], sorted[i]) > 0) {
        const temp = sorted[i - 1];
        sorted[i - 1] = sorted[i];
        sorted[i] = temp;
        swaped = true;
      }
    }
    n -= 1;
  }
  return sorted;
}

module.exports = bubble;
