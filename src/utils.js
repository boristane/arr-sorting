function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === 'function';
}

module.exports = {
  isArray,
  isFunction,
};
