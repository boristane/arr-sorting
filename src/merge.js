const utils = require('./utils');

function arrayMerge(left, right, compFunc) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (compFunc(left[leftIdx], right[rightIdx]) <= 0) {
      result.push(left[leftIdx]);
      leftIdx += 1;
    } else {
      result.push(right[rightIdx]);
      rightIdx += 1;
    }
  }
  result.push(...left.slice(leftIdx));
  result.push(...right.slice(rightIdx));
  return result;
}

/**
 * Sorts an array of objects according to a
 * compare function using the merge sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
function merge(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  if (arr.length <= 1) return arr;
  let left = arr.slice(0, parseInt(arr.length / 2, 10));
  let right = arr.slice(parseInt(arr.length / 2, 10), arr.length);
  left = merge(left, compFunction);
  right = merge(right, compFunction);
  return arrayMerge(left, right, compFunction);
}

module.exports = merge;
