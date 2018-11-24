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

const arrObjects = [];
let arrInt = [];
for (let i = 0; i < 150; i++) {
  arrInt.push(Math.floor(Math.random() * 100));
  arrObjects.push({ a: Math.floor(Math.random() * 1000)});
}
const sortedArrObjects = [...arrObjects].sort((obj1, obj2) => obj1.a - obj2.a);
const sortedArrInt = [...arrInt].sort((a, b) => a - b);
const descendingOrderSortedArrInt = [...arrInt].sort((a, b) => b - a);
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
