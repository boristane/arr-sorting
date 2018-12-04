export default function arrayMerge(left, right, compFunc) {
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
