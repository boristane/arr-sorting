import * as utils from './utils';
import arrayMerge from './arrayMerge';
import insertion from './insertion';

/**
 * Sorts an array of objects according to a
 * compare function using the tim sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
export default function tim(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  const runLenght = 32;
  const runs = [];
  let result = [];
  for (let index = 0; index < arr.length; index += runLenght) {
    runs.push(insertion(arr.slice(index, index + runLenght), compFunction));
  }
  runs.forEach((run) => {
    result = arrayMerge(result, run, compFunction);
  });
  return result;
}
