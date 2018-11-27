# arr-sorting

Sort an array using various popular sorting algorithms in javascript.

[![Build Status](https://travis-ci.org/boristane/arr-sorting.svg?branch=master)](https://travis-ci.org/boristane/arr-sorting) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6f4ef9df6de64d15b32d824c89b05b5e)](https://www.codacy.com/app/boris.tane/arr-sorting?utm_source=github.com&utm_medium=referral&utm_content=boristane/arr-sorting&utm_campaign=Badge_Grade) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Installation

// TODO

## Getting Started

The library contains a set of functions performing array sorting using various sorting algorithms.

The sorting functions are not necessarily stable in the algorithmic sense.

All functions work as per the following schema:

```js
const arr = [2, 5, 10, 5, 32, 6];
const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 8, }, ];
algo(arr); // [2, 5, 5, 6, 10, 32]
algo(arr, (a, b) => b - a); // [32, 10, 6, 5, 5, 2]
algo(arrObjects, (obj1, obj2) => obj1.a - obj2.a); // [ { a: 1, }, { a: 4, }, { a: 5, }, { a: 8, } ]
```

where `algo` is one of the following functions:

-   [bubble](#bubble)
-   [insertion](#insertion)
-   [merge](#merge)
-   [shell](#shell)
-   [heap](#heap)
-   [selection](#selection)
-   [binary](#binary)

## Documentation

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

### shell

Sorts an array according to a compare function using the shell sort algorithm.

```js
const arr = [2, 5, 10, 5, 32, 6];
const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 8, }, ];
shell(arr); // [2, 5, 5, 6, 10, 32]
shell(arr, (a, b) => b - a); // [32, 10, 6, 5, 5, 2]
shell(arrObjects, (obj1, obj2) => obj1.a - obj2.a); // [ { a: 1, }, { a: 4, }, { a: 5, }, { a: 8, } ]
```

### heap

Sorts an array according to a compare function using the heap sort algorithm.

```js
const arr = [2, 5, 10, 5, 32, 6];
const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 8, }, ];
heap(arr); // [2, 5, 5, 6, 10, 32]
heap(arr, (a, b) => b - a); // [32, 10, 6, 5, 5, 2]
heap(arrObjects, (obj1, obj2) => obj1.a - obj2.a); // [ { a: 1, }, { a: 4, }, { a: 5, }, { a: 8, } ]
```

### selection

Sorts an array according to a compare function using the selection sort algorithm.

```js
const arr = [2, 5, 10, 5, 32, 6];
const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 8, }, ];
selection(arr); // [2, 5, 5, 6, 10, 32]
selection(arr, (a, b) => b - a); // [32, 10, 6, 5, 5, 2]
selection(arrObjects, (obj1, obj2) => obj1.a - obj2.a); // [ { a: 1, }, { a: 4, }, { a: 5, }, { a: 8, } ]
```

### binary

Sorts an array according to a compare function using the binary sort algorithm.

```js
const arr = [2, 5, 10, 5, 32, 6];
const arrObjects = [ { a: 5, }, { a: 1, }, { a: 4, }, { a: 8, }, ];
binary(arr); // [2, 5, 5, 6, 10, 32]
binary(arr, (a, b) => b - a); // [32, 10, 6, 5, 5, 2]
binary(arrObjects, (obj1, obj2) => obj1.a - obj2.a); // [ { a: 1, }, { a: 4, }, { a: 5, }, { a: 8, } ]
```


## License

The library is [MIT licensed](LICENSE).
