import * as utils from './utils';
import arrayMerge from './arrayMerge';

/**
 * Sorts an array of objects according to a
 * compare function using the merge sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
export default function merge(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  if (arr.length <= 1) return arr;
  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2), arr.length);
  left = merge(left, compFunction);
  right = merge(right, compFunction);
  return arrayMerge(left, right, compFunction);
}
