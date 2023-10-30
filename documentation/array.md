# Handy Script Arrays Manipulation

This module contains extensions to the built-in `Array` object in TypeScript. It provides various sorting algorithms, array manipulation methods, and utility functions.

**© HandyScript Array 5/21/23 - Last Update: 9/24/23:**

## Table of Contents

- [Handy Script Arrays Manipulation](#handy-script-arrays-manipulation)
  - [Table of Contents](#table-of-contents)
  - [Sort Algorithms](#sort-algorithms)
    - [Bubble Sort](#bubble-sort)
    - [Selection Sort](#selection-sort)
    - [Insertion Sort](#insertion-sort)
    - [Merge Sort](#merge-sort)
    - [Quick Sort](#quick-sort)
    - [Heap Sort](#heap-sort)
    - [Counting Sort](#counting-sort)
    - [Bucket Sort](#bucket-sort)
    - [Radix Sort](#radix-sort)
    - [Shell Sort](#shell-sort)
  - [Array Manipulation Methods](#array-manipulation-methods)
    - [Shuffle](#shuffle)
    - [Chunk](#chunk)
    - [Compact](#compact)
    - [Filter Nullish](#filter-nullish)
    - [Unique](#unique)
    - [Clear](#clear)
    - [Copy](#copy)
    - [Sample](#sample)
    - [Count](#count)
    - [Count By](#count-by)
    - [Differ](#differ)
  - [Binary Search](#binary-search)
  - [Types](#types)
    - [Sort Order](#sort-order)
    - [Comparable Data](#comparable-data)
    - [Binary Sort Algorithms](#binary-sort-algorithms)

## Sort Algorithms

### Bubble Sort

Sorts an array using the [Bubble Sort](https://www.programiz.com/dsa/bubble-sort) algorithm.

```typescript
Array.prototype.bubbleSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of [Comparable Data](#comparable-data) type.

**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.bubbleSort(); // [1, 2, 3, 4, 5]
arr.bubbleSort("desc"); // [5, 4, 3, 2, 1]
```

### Selection Sort

Sorts an array using the [Selection Sort](https://www.programiz.com/dsa/selection-sort) algorithm.

```typescript
Array.prototype.selectionSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of [Comparable Data](#comparable-data) type.
  
**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.selectionSort(); // [1, 2, 3, 4, 5]
arr.selectionSort("desc"); // [5, 4, 3, 2, 1]
```

### Insertion Sort

Sorts an array using the [Insertion Sort](https://www.programiz.com/dsa/insertion-sort) algorithm.

```typescript
Array.prototype.insertionSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of [Comparable Data](#comparable-data) type.

**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.insertionSort(); // [1, 2, 3, 4, 5]
arr.insertionSort("desc"); // [5, 4, 3, 2, 1]
```

### Merge Sort

Sorts an array using the [Merge Sort](https://www.programiz.com/dsa/merge-sort) algorithm.

```typescript
Array.prototype.mergeSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of [Comparable Data](#comparable-data) type.

**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.mergeSort(); // [1, 2, 3, 4, 5]
arr.mergeSort("desc"); // [5, 4, 3, 2, 1]
```

### Quick Sort

Sorts an array using the [Quick Sort](https://www.programiz.com/dsa/quick-sort) algorithm.

```typescript
Array.prototype.quickSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of [Comparable Data](#comparable-data) type.

**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.quickSort(); // [1, 2, 3, 4, 5]
arr.quickSort("desc"); // [5, 4, 3, 2, 1]
```

### Heap Sort

Sorts an array using the [Heap Sort](https://www.programiz.com/dsa/heap-sort) algorithm.

```typescript
Array.prototype.heapSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of [Comparable Data](#comparable-data) type.

**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.heapSort(); // [1, 2, 3, 4, 5]
arr.heapSort("desc"); // [5, 4, 3, 2, 1]
```

### Counting Sort

Sorts an array using the [Counting Sort](https://www.programiz.com/dsa/counting-sort) algorithm.
> **⚠️ Note:** This algorithm only works on arrays of numbers.

```typescript
Array.prototype.countingSort(this: number[], order?: SortOrder): Array<number>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of numbers.
  
**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.countingSort(); // [1, 2, 3, 4, 5]
arr.countingSort("desc"); // [5, 4, 3, 2, 1]
```

### Bucket Sort

Sorts an array using the [Bucket Sort](https://www.programiz.com/dsa/bucket-sort) algorithm.

```typescript
Array.prototype.bucketSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of [Comparable Data](#comparable-data) type.

**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.bucketSort(); // [1, 2, 3, 4, 5]
arr.bucketSort("desc"); // [5, 4, 3, 2, 1]
```

### Radix Sort

Sorts an array using the [Radix Sort](https://www.programiz.com/dsa/radix-sort) algorithm.
> **⚠️ Note:** This algorithm only works on arrays of numbers.

```typescript
Array.prototype.radixSort(this: number[], radix?: number, order?: SortOrder): Array<number>;
```

**Parameters:**

- `radix` - The radix to use for the sorting. Default is `10`.
- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of numbers.
  
**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.radixSort(); // [1, 2, 3, 4, 5]
arr.radixSort(2); // [1, 2, 3, 4, 5]
arr.radixSort(2, "desc"); // [5, 4, 3, 2, 1]
```

### Shell Sort

Sorts an array using the [Shell Sort](https://www.programiz.com/dsa/shell-sort) algorithm.

```typescript
Array.prototype.shellSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;
```

**Parameters:**

- `order` - The order of the sorting [SortOrder](#sort-order). Can be either `asc` or `desc`. Default is `asc`.
- `this` - The array to sort, must be an array of [Comparable Data](#comparable-data) type.
  
**Returns:** The sorted array.

**Example:**

```javascript
const arr = [5, 4, 3, 2, 1];
arr.shellSort(); // [1, 2, 3, 4, 5]
arr.shellSort("desc"); // [5, 4, 3, 2, 1]
```

## Array Manipulation Methods

### Shuffle

Shuffles the elements in the given array in a random order.

```typescript
Array.prototype.shuffle(): Array<T>; // T is the type of the array
```

**Returns:** The shuffled array.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5];
arr.shuffle(); // [3, 1, 5, 2, 4]
arr.shuffle().bubbleSort(); // [1, 2, 3, 4, 5]
```

### Chunk

Splits the array into chunks of the given size.

```typescript
Array.prototype.chunk(size?: number): T[][]; // T is the type of the array
```

**Parameters:**

- `size` - The size of each chunk. Default is `1`.
  
**Returns:** The array of chunks.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5];
arr.chunk(); // [[1], [2], [3], [4], [5]]
arr.chunk(2); // [[1, 2], [3, 4], [5]]
arr.chunk(3); // [[1, 2, 3], [4, 5]]
```

### Compact

Removes all falsy values from the array.

```typescript
Array.prototype.compact(): Array<T>; // T is the type of the array
```

**Returns:** The compacted array.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5, 0, false, "", null, undefined];
arr.compact(); // [1, 2, 3, 4, 5]
```

### Filter Nullish

Removes all nullish values from the array.

```typescript
Array.prototype.filterNullish(): Array<T>; // T is the type of the array
```

**Returns:** The filtered array.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5, 0, false, "", null, undefined];
arr.filterNullish(); // [1, 2, 3, 4, 5, 0, false, ""]
```

### Unique

Removes all duplicate values from the array.
> **⚠️ Note:** This method does not work on arrays of objects.

```typescript
Array.prototype.unique(): Array<T>; // T is the type of the array
```

**Returns:** The filtered array.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
arr.unique(); // [1, 2, 3, 4, 5]
```

```javascript
const arr = ["a", "b", "c", "A", "b", "C"];
arr.unique(); // ["a", "b", "c"]
```

### Clear

Clears the array. empties it.

```typescript
Array.prototype.clear(): void;
```

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5];
arr.clear(); // []
```

### Copy

Copies the array. Return a true copy of the array.

```typescript
Array.prototype.copy(): Array<T>; // T is the type of the array
```

**Returns:** The copied array.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5];
const copy = arr.copy(); // [1, 2, 3, 4, 5]
```

### Sample

Returns a random element or an array of random elements from the array based on the given quantity.
> **⚠️ Note:** If the quantity is less than or equal to `1` or greater than the length of the array, the method will return a single random element from the array.

```typescript
Array.prototype.sample(quantity?: number): T | T[]; // T is the type of the array
```

**Parameters:**

- `quantity` - The quantity of random elements to return. Default is `1`.
  
**Returns:** The random element or an array of random elements.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5];
arr.sample(); // 3
arr.sample(2); // [1, 4]
arr.sample(3); // [2, 3, 5]
```

### Count

Count the occurrences of a value in an array.
> **⚠️ Note:** If the target not found, the method will return `0`.

```typescript
Array.prototype.count(target: T): number; // T is the type of the array
```

**Parameters:**

- `target` - The value to count its occurrences.
  
**Returns:** The number of occurrences.

**Example:**

```javascript
const arr = [1, 2, 3, 3, 5, 1, 1, 3, 4, 5];
arr.count(1); // 3
arr.count(2); // 1
arr.count(3); // 2
```

### Count By

Counts the occurrences of each element in an array based on a `callback`

```typescript
Array.prototype.countBy(callback: (item: T) => string): Record<string, number>; // T is the type of the array
```

**Parameters:**

- `callback` - The callback function to use for counting the occurrences.
- `item` - The current item in the array.

**Returns:** An object with the occurrences of each element.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5];
arr.countBy(x => x % 2 === 0 ? 'even' : 'odd') // { odd: 3, even: 2 }
```

### Differ

Returns the difference between two arrays. in a new array

```typescript
Array.prototype.differ(other: unknown[]): unknown[];
```

**Parameters:**

- `other` - The other array to compare with.

**Returns** the difference between two arrays

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5];
arr.differ([1, 2, 3]); // [4, 5]
arr.differ([1, 2, 3, 4, 5]); // []
```

## Binary Search

Searches for an element in a sorted array using the [Binary Search](https://www.programiz.com/dsa/binary-search) algorithm.
> **⚠️ Note:** This method only works on sorted & [Comparable Data](#comparable-data) arrays.

```typescript
Array.prototype.binarySearch(this: ComparableData[], target: ComparableData, sortalgo?: BinarySortAlgorithms): number;
```

**Parameters:**

- `target` - The element to search for, should be type of [Comparable Data](#comparable-data).
- `sortalgo` - The sorting algorithm to use from [Binary Sort Algorithms](#binary-sort-algorithms) to sort the array before proceeding in the search process. Default is `Array.prototype.sort()`.
- `this` -  The array to search in, must be an array of [Comparable Data](#comparable-data) type.
  
**Returns:** The index of the element if found, otherwise `-1`.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 5];
arr.binarySearch(3); // 2
arr.binarySearch(3, "bubble"); // 2
arr.binarySearch(6); // -1
```

## Types

### Sort Order

The order of the sorting. by default it is `asc`.

```typescript
type SortOrder = "asc" | "desc";
```

### Comparable Data

The data that can be compared in javascript `number | string | boolean | Date`.

```typescript
type ComparableData = number | string | boolean | Date;
```

### Binary Sort Algorithms

The Explicit sort algorithms used with binary search to sort the array before proceeding in the search process.

```typescript
type BinarySortAlgorithms =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick"
  | "heap"
  | "radix" //it supports only numbers
  | "counting" //it supports only numbers
  | "bucket"
  | "shell";
```

<p align="center"><b>© HandyScript Array 5/21/23</b></p>

This Markdown documentation includes sections for various sorting algorithms and array manipulation methods, along with their descriptions and TypeScript function signatures. The table of contents at the beginning [Back To Top](#table-of-contents) of the document allows for easy navigation. If you have any questions or suggestions, please contact us at <vvhybe@hotmail.com>.
