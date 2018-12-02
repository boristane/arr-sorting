import binarySearch from './binarySearch';
import * as utils from './utils';

/**
 * Sorts an array of objects according to a
 * compare function using the binary sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
export default function binary(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  const result = [];
  arr.forEach((elt) => {
    const index = binarySearch(result, compFunction, elt);
    result.splice(index, 0, elt);
  });

  return result;
}
