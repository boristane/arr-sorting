import binarySearch from '../src/binarySearch';

const sortedArrInt = [1, 2, 9, 15, 15, 19, 21, 23, 28, 31, 31, 33, 37, 50, 53, 63, 66, 82, 85, 86];
const descendingOrderSortedArrInt = [86, 85, 82, 66, 63, 53, 50, 37, 33, 31, 31, 28, 23, 21, 19, 15, 15, 9, 2, 1];
describe('binary search', () => {
  test('on ascending array of int', () => {
    expect(binarySearch(sortedArrInt, (a, b) => a - b, -1)).toBe(0);
    expect(binarySearch(sortedArrInt, (a, b) => a - b, 90)).toBe(20);
    expect(binarySearch(sortedArrInt, (a, b) => a - b, 10)).toBe(3);
    expect(binarySearch(sortedArrInt, (a, b) => a - b, 15)).toBe(4);
    expect(binarySearch(sortedArrInt, (a, b) => a - b, 1)).toBe(0);
    expect(binarySearch(sortedArrInt, (a, b) => a - b, 86)).toBe(19);
    expect(binarySearch(sortedArrInt, (a, b) => a - b, 66)).toBe(16);
  });
  test('on descending array of int', () => {
    expect(binarySearch(descendingOrderSortedArrInt, (a, b) => b - a, -1)).toBe(20);
    expect(binarySearch(descendingOrderSortedArrInt, (a, b) => b - a, 90)).toBe(0);
    expect(binarySearch(descendingOrderSortedArrInt, (a, b) => b - a, 80)).toBe(3);
    expect(binarySearch(descendingOrderSortedArrInt, (a, b) => b - a, 15)).toBe(15);
    expect(binarySearch(descendingOrderSortedArrInt, (a, b) => b - a, 1)).toBe(19);
    expect(binarySearch(descendingOrderSortedArrInt, (a, b) => b - a, 86)).toBe(0);
    expect(binarySearch(descendingOrderSortedArrInt, (a, b) => b - a, 66)).toBe(3);
  });
})