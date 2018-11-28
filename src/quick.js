const utils = require('./utils');

function partition(arr, l, h, compFunction) {
  const pivot = h;
  let current = l;
  for (let index = l; index < h; index += 1) {
    if (compFunction(arr[index], arr[pivot]) < 0) {
      if (index !== current) {
        utils.swap(arr, index, current);
      }
      current += 1;
    }
  }
  utils.swap(arr, current, pivot);
  return current;
}

function quicksort(arr, l, h, compFunction) {
  if (l < h) {
    const p = partition(arr, l, h, compFunction);
    quicksort(arr, l, p - 1, compFunction);
    quicksort(arr, p + 1, h, compFunction);
  }
}

/**
 * Sorts an array of objects according to a
 * compare function using the quick sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
function quick(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  const result = [...arr];
  quicksort(result, 0, result.length - 1, compFunction);
  return result;
}

module.exports = quick;
