function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === 'function';
}

/* eslint-disable no-param-reassign */
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
/* eslint-enable no-param-reassign */

module.exports = {
  isArray,
  isFunction,
  swap,
};
