const utils = require('./utils');

/**
 * Sorts an array of objects according to a
 * compare function using the insertion sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
function insertion(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  const result = [...arr];
  let current = 1;
  while (current < result.length) {
    let iter = current;
    while (iter > 0 && compFunction(result[iter - 1], result[iter]) >= 0) {
      const temp = result[iter];
      result[iter] = result[iter - 1];
      result[iter - 1] = temp;
      iter -= 1;
    }
    current += 1;
  }
  return result;
}

module.exports = insertion;
