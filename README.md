# arr-sorting

Sort an array using various popular sorting algorithms in javascript.

[![Build Status](https://travis-ci.org/boristane/arr-sorting.svg?branch=master)](https://travis-ci.org/boristane/arr-sorting) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6f4ef9df6de64d15b32d824c89b05b5e)](https://www.codacy.com/app/boris.tane/arr-sorting?utm_source=github.com&utm_medium=referral&utm_content=boristane/arr-sorting&utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/6f4ef9df6de64d15b32d824c89b05b5e)](https://www.codacy.com/app/boris.tane/arr-sorting?utm_source=github.com&utm_medium=referral&utm_content=boristane/arr-sorting&utm_campaign=Badge_Coverage) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

[![NPM](https://nodei.co/npm/arr-sorting.png?compact=true)](https://nodei.co/npm/arr-sorting/)

## Installation

Install via `npm`

```bash
npm install arr-sorting
```

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
-   [tim](#tim)

## Documentation

### bubble

Sorts an array according to a compare function using the [bubble sort algorithm](https://en.wikipedia.org/wiki/Bubble_sort).

The bubble sort algorithm repeatedly steps through the aray, compares adjacent pairs and swaps them if they are in the wrong order. The algorithm goes through the array until it is sorted.

Bubble sort is one of the simpler sorting algorithm and proves to be too slow when compared to [insertion sort](#insertion). As such, it is impractical in most use cases, with the exception of cases where the array is mostly sorted, with some out-of-order elements nearly in position.

| Case       | Complexity    |
| ---------- |:-------------:|
| Best       | O(n)          |
| Average    | O(n^2)        |
| Worst      | O(n^2)        |


### insertion

Sorts an array according to a compare function using the [insertion sort algorithm](https://en.wikipedia.org/wiki/Insertion_sort).

The insertion sort algorithm iterates through the array, considering one element each repetition, compares it iteratively to the elements of the array with an index lower until it finds its location and insets it there. This is repeated until the last element of the array.

| Case       | Complexity    |
| ---------- |:-------------:|
| Best       | O(n)          |
| Average    | O(n^2)        |
| Worst      | O(n^2)        |

### merge

Sorts an array according to a compare function using the [merge sort algorithm](https://en.wikipedia.org/wiki/Merge_sort).

The merge sort algorithm works in two steps:

* Divide the unsorted array into sub-arrays, each containing one element (the number of sub-arrays is the lenght of the array).
* Repeatedly merge sub-arrays to produce new sorted sub-arrays until there is only one sub-array remaining. This will be the sorted array.

The merge sort algorithm is generally more efficient than the simpler [bubble](#bubble) and [insertion](#insertion) algorithms.

| Case       | Complexity    |
| ---------- |:-------------:|
| Best       | O(n log(n))   |
| Average    | O(n log(n))   |
| Worst      | O(n log(n))   |

### shell

Sorts an array according to a compare function using the [shell sort algorithm](https://en.wikipedia.org/wiki/Shellsort).

The shell sort algorithm is a variation of [insertion](#insertion) sort. Where in insertion sort, elements of the array are compared to elements one index lower, shell sort allows to compare elements that are far apart. In shell sort, a gap `h` is defined and the elements of the array are compared to elements `h` index lower. The gap `h` is reduced until it becomes 1. An array is said to be h-sorted if all sub-array of every `h`’th element is sorted.

| Case       | Complexity      |
| ---------- |:---------------:|
| Best       | O(n log(n))     |
| Average    | O(n (log(n))^2) |
| Worst      | O(n (log(n))^2) |

### heap

Sorts an array according to a compare function using the [heap sort algorithm](https://en.wikipedia.org/wiki/Heapsort).

The heap sort algorithm is based on the [heap data structure](https://en.wikipedia.org/wiki/Heap_(data_structure)). A heap is a tree-based data structure the following "heap" property: if P is a parent node of C, then the key (the value) of P is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the key of C.

The node at the "top" of the heap (with no parents) is called the root node.

The heapsort algorithm can be devided into two steps:

* Prepare the array by turning it into a max heap. 
* Repeatedly swap the first element of the array with its last one, and updating the heap such that its "heap" property is preserved.


| Case       | Complexity      |
| ---------- |:---------------:|
| Best       | O(n log(n))     |
| Average    | O(n log(n))     |
| Worst      | O(n log(n))     |

### selection

Sorts an array according to a compare function using the [selection sort algorithm](https://en.wikipedia.org/wiki/Selection_sort).

The selection sort algorithm divides the input array into two parts: 
* The left sub-array which is sorted.
* The right sub-array with the unsorted elements.

The algorithm iteratively goes through the unsorted sub-array and searches for its smallest element, which is added at the end of the sorted array.

| Case       | Complexity      |
| ---------- |:---------------:|
| Best       | O(n^2)          |
| Average    | O(n^2)          |
| Worst      | O(n^2)          |

### binary

Sorts an array according to a compare function using the [binary sort algorithm](https://en.wikipedia.org/wiki/Tree_sort).

The binary sort algorithm 

### quick

Sorts an array according to a compare function using the [quick sort algorithm](https://en.wikipedia.org/wiki/Quicksort).

The quick sort algorith, divides an array into two sub-arrays, and recursively sorts the sub-arrays. It follows three steps:
* Select an element (the pivot) from the array.
* Partition (re-arrange) the array such that all elements with values comparatively smaller than the pivot come before the pivot.
* Recursively repeat the above two steps to the sub-array of elements comparatively smaller than the pivot.

This implementation of quick sort selects the pivot as the last element of the array.

| Case       | Complexity      |
| ---------- |:---------------:|
| Best       | O(n log(n))     |
| Average    | O(n log(n))     |
| Worst      | O(n^2)          |

### tim

Sorts an array according to a compare function using the [timsort algorithm](https://en.wikipedia.org/wiki/Timsort).

The timsort algorithm is an hybrid soring algorithm based on [insertion sort](#insertion) and [merge sort](#merge). The array is divided into sub-arrays (runs). The runs are then sorted using [insertion sort](#insertion). The sorted runs are afterwards merged using the merged function in [merge sort](#merge).

This implementation of timsort has a fixed run length of 32, to reduce complexity and improve performace ([the merge function performs better on sub-array with size as powers of 2](https://www.geeksforgeeks.org/timsort/)).

| Case       | Complexity      |
| ---------- |:---------------:|
| Best       | O(n)            |
| Average    | O(n log(n))     |
| Worst      | O(n log(n))     |


## License

The library is [MIT licensed](LICENSE).
