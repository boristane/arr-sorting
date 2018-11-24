import bubble from '../src/bubble';
import merge from '../src/merge';
import insertion from '../src/insertion';
import shell from '../src/shell';

const sorting = [
  {
    name: 'bubble',
    algo: bubble,
  },
  {
    name: 'merge',
    algo: merge,
  },
  {
    name: 'insertion',
    algo: insertion,
  },
  {
    name: 'shell',
    algo: shell
  },
];


const arrInt = [15, 19, 86, 15, 23, 85, 37, 53, 9, 66, 2, 1, 63, 21, 31, 31, 50, 28, 82, 33];
const sortedArrInt = [1, 2, 9, 15, 15, 19, 21, 23, 28, 31, 31, 33, 37, 50, 53, 63, 66, 82, 85, 86];
const descendingOrderSortedArrInt = [86, 85, 82, 66, 63, 53, 50, 37, 33, 31, 31, 28, 23, 21, 19, 15, 15, 9, 2, 1];
const arrFloat = [96.44, 84.96, 70.81, 91.7, 91.95, 61.15, 89.08, 92.36, 41.41, 82.89, 1.55, 51.15, 15.73, 96.87, 64.05, 80.29, 21.67, 52.54, 80.38, 63.47];
const sortedArrFloat = [1.55, 15.73, 21.67, 41.41, 51.15, 52.54, 61.15, 63.47, 64.05, 70.81, 80.29, 80.38, 82.89, 84.96, 89.08, 91.7, 91.95, 92.36, 96.44, 96.87];
const arrObjects = [];
const sortedArrObjects = [];
arrInt.forEach((elt, index) => {
  arrObjects.push({ a: elt });
});
sortedArrInt.forEach((elt, index) => {
  sortedArrObjects.push({ a: elt });
});

const obj = { a: 1, b: 4, };

sorting.forEach(algo => {
  describe(`${algo.name} sort`, () => {
    test('on array of int', () => {
      expect(algo.algo(arrInt, (a, b) => a - b)).toEqual(sortedArrInt);
    });
    test('in descending order', () => {
      expect(algo.algo(arrInt, (a, b) => b - a)).toEqual(descendingOrderSortedArrInt);
    });
    test('on sorted array of int', () => {
      expect(algo.algo(sortedArrInt, (a, b) => a - b)).toEqual(sortedArrInt);
    });
    test('on sorted array of float', () => {
      expect(algo.algo(arrFloat, (a, b) => a - b)).toEqual(sortedArrFloat);
    });
    test('on array of objects', () => {
      expect(algo.algo(arrObjects, (obj1, obj2) => obj1.a - obj2.a)).toEqual(sortedArrObjects);
    });
    test('without second argument', () => {
      expect(algo.algo(arrInt)).toEqual(sortedArrInt);
    });
    test('with dummy function', () => {
      expect(algo.algo(arrInt, 1)).toEqual(arrInt);
    });
    test('with non array as first argument', () => {
      expect(algo.algo(obj)).toBeUndefined();
    });
  });
});
