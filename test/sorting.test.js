import bubble from '../src/bubble';
import merge from '../src/merge';

const sorting = [
  {
    name: 'bubble',
    algo: bubble,
  },
  {
    name: 'merge',
    algo: merge,
  },
];

const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 2, }, { a: 8, }, ];
const sortedArrObjects = [ { a: 1, }, { a: 2, }, { a: 4, }, { a: 5, }, { a: 8, }, ];
const arrInt = [ 5, 1, 4, 2, 8, ];
const sortedArrInt = [ 1, 2, 4, 5, 8, ];
const descendingOrderSortedArrInt = [ 8, 5, 4, 2, 1, ];
const obj = { a: 1, b: 4, };

sorting.forEach(algo => {
  describe(`${algo.name} sort`, () => {
    test('on array of int', () => {
      expect(algo.algo(arrInt, (a, b) => a - b)).toEqual(sortedArrInt);
    });
    test('in descending order', () => {
      expect(algo.algo(arrInt, (a, b) => b - a)).toEqual(descendingOrderSortedArrInt);
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
