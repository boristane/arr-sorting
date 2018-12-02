const utils = require('./utils');

function heapify(arr, depth, index, compFunction) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;
  if (left < depth && compFunction(arr[largest], arr[left]) <= 0) {
    largest = left;
  }
  if (right < depth && compFunction(arr[largest], arr[right]) <= 0) {
    largest = right;
  }
  if (largest !== index) {
    utils.swap(arr, index, largest);
    heapify(arr, depth, largest, compFunction);
  }
}

/**
 * Sorts an array of objects according to a
 * compare function using the heap sort algorithm.
 * @param {Array} arr the array to sort
 * @param {Function} compFunction the function to sort against, default to ascending order
 * @returns {Array} the sorted array
 */
export default function heap(arr, compFunction = (a, b) => a - b) {
  if (!utils.isArray(arr)) return undefined;
  if (!utils.isFunction(compFunction)) return arr;

  const sorted = [...arr];
  let index = sorted.length / 2 - 1;
  while (index >= 0) {
    heapify(sorted, sorted.length, index, compFunction);
    index -= 1;
  }

  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    utils.swap(sorted, 0, i);
    heapify(sorted, i, 0, compFunction);
  }

  return sorted;
}
