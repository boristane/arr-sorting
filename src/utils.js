function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === 'function';
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return true;
}

module.exports = {
  isArray,
  isFunction,
  swap,
};
