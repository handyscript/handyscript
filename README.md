<p align="center" width="100%">
<img width="100%" alt="Handy Script Cover" src="static/assets/HSCover.png"/>
</p>

<h1 align="center">Handy Script</h1>

<p align="center">
A set of useful javascript modules that makes the javascript development context easier
</p>

<p align="center">
	<p align="center">
		<img alt="NPM DOWNLOADS" src="https://img.shields.io/npm/dw/handyscript?color=5319e7&style=flat-square">
		<img alt="NPM LICENSE" src="https://img.shields.io/npm/l/handyscript?color=k&label=license&style=flat-square">
		<img alt="NPM VERSION" src="https://img.shields.io/npm/v/handyscript?color=ff6905&label=npm&style=flat-square">
	</p>
	<p align="center">
		<a href="https://github.com/handyscript/handyscript/actions/workflows/unite-test.yml" target="_blank">
			<img alt="JEST CI TEST" src="https://github.com/handyscript/handyscript/actions/workflows/unite-test.yml/badge.svg?branch=main">
		</a>
	</p>
</p>

## Installation

You can install **Handy Script** using npm:

```shell
npm install handyscript
```

Alternatively, you can use the **CDN** script to include the `hs.min.js` in your HTML file

```html
<script src="https://unpkg.com/browse/handyscript@1.0.0/dist/hs.min.js"></script>
```

Alternatively, you can use the **CDN** script to include the `hs.min.js` in your HTML file

```html
<!-- VIA: jsdelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/handyscript@latest/dist/hs.min.js"></script>
<!-- VIA: unpkg CDN -->
<script src="https://unpkg.com/handyscript@latest/dist/hs.min.js"></script>
```

Otherwise, you can download the `hs.min.js` file from the [dist](./dist/hs.min.js) directory and include it in your HTML file, or [click here](https://cdn.jsdelivr.net/npm/handyscript@latest/dist/hs.min.js) to download it directly

```html
<script src="path/to/hs.min.js"></script>
```

## Usage

Once you have installed or included the **hs.min.js** file, you can start using the functions in your code.

```javascript
// Import the handyscript to extend the prebuilt js modules
import "handyscript";
// explicitly use the HOperators, HashMap
import { HashMap } from "handyscript"

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

## Functionalities

check our detailed wiki documentation [here](https://github.com/handyscript/handyscript/wiki/)

### [Array](https://github.com/handyscript/handyscript/blob/main/documentation/array.md)

Shuffles the elements of the array array and returns a new array.

```javascript
Array.prototype.shuffle()
```

The `binarySearch` method searches an array for the specified item using the binary search algorithm. you can specify the sort algorithm to be used in sorting the array before searching

```javascript
Array.prototype.binarySearch(item, sortalgo)
```

Sorting the array using specific sort algorithms like : `bubbleSort`

```javascript
Array.prototype.bubbleSort()
```

### [list of implemented sort algorithms](https://github.com/handyscript/handyscript/blob/main/documentation/array.md#sort-algorithms)

- bubbleSort
- insertionSort
- selectionSort
- mergeSort
- quickSort
- heapSort
- countingSort # ⚠ Only works with arrays of numbers
- shellSort
- bucketSor
- radixSort # ⚠ Only works with arrays of numbers

> There is more to discover [here](https://github.com/handyscript/handyscript/blob/main/documentation/array.md) ✨

<!-- > It cover the most known/popular sort algorithms: -->

### Matrix

```javascript
import { Matrix } from "handyscript";

// Example usage
const matrix1 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
]);
const matrix2 = new Matrix([
  [1, 2],
  [3, 4],
  [5, 6],
]);

const matrixAdd = Matrix.add(matrix1, matrix2);
console.log("Matrix 1 + Matrix 2:");
matrixAdd.log();

const matrixMulti = Matrix.multiply(matrix1, matrix2);
console.log("Matrix 1 * Matrix 2:");
matrixMulti.log();
```

> There is more to discover ✨

### Math

```javascript
// import the hole package:
import "handyscript";
// or import the target lib/module
import "handyscript/lib/math";

Math.clamp(value, min = 1, max)
console.log(Math.randomInt(1, 10)); // 7
```

Returns a value that is clamped between min and max.

> There is more to discover ✨

### String

```javascript
// import the hole package:
import "handyscript";
// or import the target lib/module
import "handyscript/lib/string";

String.prototype.toCapitalCase(); // "Hello World" // capitalizes the first letter of every word in a string.
String.prototype.toCamelCase();// "helloWorld": // capitalizes the first letter of every word starting with the second word in a string and removes all the spaces.
String.prototype.reverse(); // reverse a string and string
String.prototype.indexesOf(target, startPosition? = 0); // Returns the positions of the all occurrence of a substring.
String.prototype.escape(isForAttribute? = false): string; // escape a string from all white spaces and all control characters (characters with a code point < U+0020).
```

Extends the builtin `String` module for more string manipulation

> There is more to discover ✨

### Number

```javascript
// import the hole package:
import "handyscript";
// or import the target lib/module
import "handyscript/lib/number";

Number.prototype.toHuman() // Returns a string representation of a number in human readable format. like 1K, 1M, 1B, 1T, etc.
Number.prototype.toReadable(separator? = "-") // Returns a string representation of a number readable format. like 10-000, 1-000-000, 1-000-000-000, etc.
```

Extends the prebuilt `Number` module for more number manipulation

> There is more to discover ✨

### [JSON manipulation](https://github.com/handyscript/handyscript/blob/main/documentation/array.md)

```javascript
var data = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: {
        city: 'New York',
        street: '123 Main St'
    }
};

const schema = {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true },
    address: {
        type: Object,
        properties: {
            city: { type: String },
            street: { type: String }
        }
    }
};

JSON.validateSchema(data, schema); // True
```

> There is more to discover [Here](https://github.com/handyscript/handyscript/blob/main/documentation/json.md) ✨
