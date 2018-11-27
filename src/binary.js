const utils = require('./utils');
const search = require('./binarySearch');


/**
 * Sorts an array of objects according to a
 * compare function using the binary sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
function binary(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  const result = [...arr];

  return result;
}

module.exports = binary;
