# arr-sorting

Sort an array using various popular sorting algorithms in javascript.

[![Build Status](https://travis-ci.org/boristane/arr-sorting.svg?branch=master)](https://travis-ci.org/boristane/arr-sorting) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6f4ef9df6de64d15b32d824c89b05b5e)](https://www.codacy.com/app/boris.tane/arr-sorting?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=boristane/arr-sorting&amp;utm_campaign=Badge_Grade) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Installation

## Documentation

The library contains a set of functions perfroming array sorting using various sorting algorithms.

### bubble
Sorts an array according to a compare function using the bubble sort algorithm.
```js
const arr = [2, 5, 10, 5, 32, 6];
const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 8, }, ];
bubble(arr); // [2, 5, 5, 6, 10, 32]
bubble(arr, (a, b) => b - a); // [32, 10, 6, 5, 5, 2]
bubble(arrObjects, (obj1, obj2) => obj1.a - obj2.a); // [ { a: 1, }, { a: 4, }, { a: 5, }, { a: 8, } ]
```

### insertion
Sorts an array according to a compare function using the insertion sort algorithm.
```js
const arr = [2, 5, 10, 5, 32, 6];
const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 8, }, ];
insertion(arr); // [2, 5, 5, 6, 10, 32]
insertion(arr, (a, b) => b - a); // [32, 10, 6, 5, 5, 2]
insertion(arrObjects, (obj1, obj2) => obj1.a - obj2.a); // [ { a: 1, }, { a: 4, }, { a: 5, }, { a: 8, } ]
```

### merge
Sorts an array according to a compare function using the merge sort algorithm.
```js
const arr = [2, 5, 10, 5, 32, 6];
const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 8, }, ];
merge(arr); // [2, 5, 5, 6, 10, 32]
merge(arr, (a, b) => b - a); // [32, 10, 6, 5, 5, 2]
merge(arrObjects, (obj1, obj2) => obj1.a - obj2.a); // [ { a: 1, }, { a: 4, }, { a: 5, }, { a: 8, } ]
```

## Licence

The library is [MIT licenced](LICENCE).
