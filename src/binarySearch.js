function search(arr, compFunction, elt) {
  let l = 0;
  let h = arr.length;
  let index = l + Math.floor((h - l) / 2);
  while (h > l) {
    if (compFunction(arr[index], elt) < 0) {
      l = index + 1;
    } else if (compFunction(arr[index], elt) > 0) {
      h = index;
    } else {
      return index;
    }
    index = l + Math.floor((h - l) / 2);
  }
  return index;
}

module.exports = search;
