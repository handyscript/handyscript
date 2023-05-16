<h1 align="center">Handy.js</h1>
<p align="center">A set of usefull javascript modules that makes the javascript devlopment context easier</p>
<p align="center">
<img alt="npm downloads" src="https://img.shields.io/npm/dw/@handy.js/handy?color=%2323fcba03&style=flat-square">
<img alt="NPM LICENSE" src="https://img.shields.io/npm/l/@handy.js/handy?color=k&label=license&style=flat-square">
<img alt="npm version" src="https://img.shields.io/npm/v/@handy.js/handy?color=00ffff&label=npm&style=flat-square">
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

Otherwise, you can download the `handy.min.js` file from the [dist](./dist/handy.min.cjs)directory and include it in your HTML file:

```html
<script src="path/to/handy.min.js"></script>
```

## Usage

Once you have installed or included the **handy.min.js** file, you can start using the functions in your code.

```javascript
// Import the handy-js module
import { HArray, HMath, HString, HOperators } from "handy-js";

// Array manipulation:
const arr = new HArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(arr.chunk(3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
console.log(arr.shuffle()); // [3, 2, 5, 1, 4, 6, 7, 8, 10, 9]
console.log(arr.shuffle().bubbleSort()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// The Math Module:
console.log(HMath.randomInt(1, 10)); // 7
console.log(HMath.clamp(10, 1, 5)) // 5

// string Manipulation:
const str = new HString("hello world")
console.log(str.toCapitalCase()); // "Hello World"

// Operators:
 const obj = { name:"ahmed", age: 20 };
 HOperators.objloop(obj, (key, val) => console.log(key, val))
 // name ahmed
 // age 20
```

## Functions

### Array manipulation

```javascript
HArray.prototype.shuffle()
```

Shuffles the elements of the array array and returns a new array.

```javascript
HArray.prototype.chunk(size) // default: 1
```

Splits the array array into chunks of size size and returns an array of arrays.

```javascript
HArray.prototype.unique()
```

Returns a new array with duplicate elements removed.

```javascript
HArray.prototype.countBy(callback)
```

Returns an object that counts the number of occurrences of each value in the array array, determined by the callback.

> There is more to discover ✨

### Sort methods

> It cover the most known/populare sort algorithms:

```javascript
HArray.prototype.bubbleSort()
```

Sorting the array using specific sort algorithms like : `bubbleSort`
list of implemented sort algorithms

- bubbleSort
- insertionSort
- selectionSort
- mergeSort
- quickSort
- heapSort
- countingSort
- shellSort
- bucketSort # accept a parameter for the number of buckets
- radixSort # accept a parameter for the radix

> There is more to discover ✨

### Math

```javascript
HMath.clamp(value, min = 1, max)
```

Returns a value that is clamped between min and max.

```javascript
HMath.lerp(start, end, t)
```

Returns a value between start and end that is determined by the value t, and the formula: `start * (1 - t) + end * t`.

```javascript
HMath.map(value, inputMin, inputMax, outputMin, outputMax)
```

Maps the value from the range between inputMin and inputMax to the range between outputMin and outputMax.

> There is more to discover ✨

### String manipulation

```javascript
HString.prototype.toCapitalCase()
```

Capitalize the given string.
