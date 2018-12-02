const utils = require('./utils');

/**
 * Sorts an array of objects according to a
 * compare function using the shell sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
export default function shell(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  const result = [...arr];
  let gap = Math.floor(result.length / 2);
  while (gap > 0) {
    let current = gap;
    while (current < result.length) {
      let iter = current;
      while (iter - gap >= 0 && compFunction(result[iter - gap], result[iter]) >= 0) {
        const temp = result[iter];
        result[iter] = result[iter - gap];
        result[iter - gap] = temp;
        iter -= gap;
      }
      current += 1;
    }
    gap = Math.floor(gap / 2);
  }
  return result;
}
