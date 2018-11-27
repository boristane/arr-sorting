const utils = require('./utils');

/**
 * Sorts an array of objects according to a
 * compare function using the selection sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
function selection(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  const result = [...arr];
  let current = 0;
  while (current < result.length) {
    let min = current;
    for (let index = current; index < result.length; index += 1) {
      if (compFunction(result[index], result[min]) <= 0) {
        min = index;
      }
    }
    if (current !== min) {
      utils.swap(result, current, min);
    }
    current += 1;
  }
  return result;
}

module.exports = selection;
