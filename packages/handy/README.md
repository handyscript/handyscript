<h1 align="center">Handy.js</h1>

<p align="center">
A set of useful javascript modules that makes the javascript development context easier
</p>

<p align="center">
<img alt="NPM DOWNLOADS" src="https://img.shields.io/npm/dw/@handy.js/handy?color=5319e7&style=flat-square">
<img alt="NPM LICENSE" src="https://img.shields.io/npm/l/@handy.js/handy?color=k&label=license&style=flat-square">
<img alt="NPM VERSION" src="https://img.shields.io/npm/v/@handy.js/handy?color=ff6905&label=npm&style=flat-square">
</p>

## Installation

You can install **Handy.js** using npm:

```shell
npm install @handy.js/handy
```

Alternatively, you can use the **CDN** script to include the `handy.min.js` in your HTML file

```html
<script src="https://unpkg.com/browse/@handy.js/handy@1.0.0/dist/handy.min.cjs"></script>
```

Alternatively, you can use the **CDN** script to include the `handy.min.js` in your HTML file

```html
<!-- VIA: jsdelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/@handy.js/handy@latest/dist/handy.min.js"></script>
<!-- VIA: unpkg CDN -->
<script src="https://unpkg.com/@handy.js/handy@latest/dist/handy.min.js"></script>
```

Otherwise, you can download the `handy.min.js` file from the [dist](./dist/handy.min.cjs) directory and include it in your HTML file, or [click here](https://cdn.jsdelivr.net/npm/@handy.js/handy@latest/dist/handy.min.cjs) to download it directly

```html
<script src="path/to/handy.min.js"></script>
```

## Usage

Once you have installed or included the **handy.min.js** file, you can start using the functions in your code.

```javascript
// Import the @handy.js/handy to extend the prebuilt js modules
import "@handy.js/handy";
// explicitly use the HOperators, HashMap
// 1
import { HOperators, HashMap } from "@handy.js/handy"
// 2
import { and, or, objloop } from "@handy.js/handy"

// Array manipulation:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.chunk(3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
console.log(arr.shuffle()); // [3, 2, 5, 1, 4, 6, 7, 8, 10, 9]
console.log(arr.shuffle().bubbleSort()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// The Math Module:
console.log(Math.randomInt(1, 10)); // 7

// HashMap
const obj = {
    name: "John",
    age: 20,
    weight: 70,
    height: 180,
    isMarried: true,
    isStudent: true,
};

const map = new HashMap(obj);

console.log(map.getKeysByValue(true)); // ["isMarried","isStudent"]

// Operators:
 const obj = { name:"ahmed", age: 20 };
 HOperators.objloop(obj, (key, val) => console.log(key, val))
 // name ahmed
 // age 20
```

## Functions

### Array manipulation

```javascript
Array.prototype.shuffle()
```

Shuffles the elements of the array array and returns a new array.

```javascript
Array.prototype.binarySearch(item, sortalgo)
```

The `binarySearch` method searches an array for the specified item using the binary search algorithm. you can specify the sort algorithm to be used in sorting the array before searching

> There is more to discover ✨

### Sort methods

> It cover the most known/popular sort algorithms:

```javascript
Array.prototype.bubbleSort()
```

Sorting the array using specific sort algorithms like : `bubbleSort`

### list of implemented sort algorithms

- bubbleSort
- insertionSort
- selectionSort
- mergeSort
- quickSort
- heapSort
- countingSort # ⚠ Only works with arrays of numbers
- shellSort
- bucketSort # accept a parameter for the number of buckets
- radixSort # ⚠ Only works with arrays of numbers, Not implemented Yet

> There is more to discover ✨

### Math

```javascript
Math.clamp(value, min = 1, max)
```

Returns a value that is clamped between min and max.

> There is more to discover ✨

### String manipulation

```javascript
String.prototype.toCapitalCase()
```

Capitalize the given string.

> There is more to discover ✨
