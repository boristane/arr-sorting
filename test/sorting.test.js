import bubble from '../src/bubble';
const sorting = [
  {
    name: 'bubble',
    algo: bubble,
  },
];

sorting.forEach(algo => {
  describe(`${algo.name} sort`, () => {
    test('on array of int', () => {
      expect(algo.algo([5, 1, 4, 2, 8], (a, b) => a - b)).toEqual([1, 2, 4, 5, 8]);
    });
    test('on array of objects', () => {
      expect(algo.algo([
        {
          a: 5,
        },
        {
          a: 1,
        },
        {
          a: 4,
        },
        {
          a: 2,
        },
        {
          a: 8,
        },
      ], (obj1, obj2) => obj1.a - obj2.a)).toEqual([
        {
          a: 1,
        },
        {
          a: 2,
        },
        {
          a: 4,
        },
        {
          a: 5,
        },
        {
          a: 8,
        },
      ]);
    });
    test('without second argument', () => {
      expect(algo.algo([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    });
    test('with dummy function', () => {
      expect(algo.algo([5, 1, 4, 2, 8], 1)).toEqual([5, 1, 4, 2, 8]);
    });
    test('with non array as first argument', () => {
      expect(algo.algo({a: 1, b: 4})).toBeUndefined();
    });
  });
});
