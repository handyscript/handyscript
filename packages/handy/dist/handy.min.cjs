'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//// STRING - HANDY-JS: STRING METHODS --------------------------------------------

/**
 * @namespace HString
 * @extends String
 * @description
 * This namespace contains methods that work on strings.
 * @example
 * // 1
 * import { HString } from "handy-js";
 * HString.capitalize("hello world") // output:"Hello World"
 * // 2
 * import HString from "handy-js/string";
 * HString.capitalize("hello world") // output:"Hello World"
 */
class HString extends String {
  constructor(str) {
    super(str);
  }

  /**
   * The `toCapitalCase()` method capitalizes the first letter of every word in a string.
   * @method capitalize
   * @returns {HString}
   * @example
   * "hello world".toCapitalCase() // output:"Hello World"
   */
  toCapitalCase() {
    return new HString(this.split(" ").map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(" "));
  }

  /**
   * The `toLocaleCapitalCase()` method capitalizes the first letter of every word in a string.
   * @method toLocaleCapitalCase
   * @returns {HString}
   * @example
   * "hello world".toLocaleCapitalCase() // output:"Hello World"
   */
  toLocaleCapitalCase() {
    return new HString(this.split(" ").map(word => {
      return word[0].toLocaleUpperCase() + word.slice(1);
    }).join(" "));
  }

  /**
   * The `reverse()` method reverses a string.
   * @method reverse
   * @returns {HString}
   * @example
   * "Hello, world!".reverse() // output:"!dlrow ,olleH"
   * @Note
   * this method is not the same as `String.prototype.reverse()`
   * @Tip
   * "Hello, world!".split("").reverse().join("") // output:"!dlrow ,olleH"
   * @see
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/reverse
   */
  reverse() {
    return new HString(this.split("").reverse().join(""));
  }
  /**
   * The `innerTags()` method returns an array of all the XML/HTML tags inside a string.
   * @param {string} str
   * @returns {Array}
   * @example
   * "<div><p>Hello World!</p></div>".innerTags() // output:["<div>", "<p>"]
   * HString("<div><p>Hello World!</p></div>").innerTags() // output:["<div>", "<p>"]
   * @Note
   * will not return any XML/HTML tag starts with `</`
   * @Tip
   * "<h1>Hello World!</h1>".innerTags() // output:["<h1>"]
   */
  innerTags() {
    return this.match(/<[a-zA-Z1-9]{1,}>/g) || [];
  }
}

// the major difference between this and the original String class is that this class is mutable
// and the original String class is immutable

// to make this class immutable, we can use Object.freeze() method
// Object.freeze(HString.prototype);
// Object.freeze(HString); it is not necessary to freeze the class itself
// 

// the diffrence between Object.freeze() and Object.seal() is that Object.freeze() makes the object immutable
// and Object.seal() makes the object non-extensible

// the deffrance between immutable and mutable is that immutable objects can not be changed

//// OPERATORS - HANDY-JS: OPERATORS METHODS --------------------------------------------

/**
 * it returns true if all the arguments are true
 * @param  {...any} args
 * @returns {boolean}
 * @example
 * and(true, true, true) // true
 */
function and(...args) {
  return args.every(arg => arg === true);
}

/**
 * it returns true if any of the arguments is true
 * @param  {...any} args
 * @returns {boolean}
 * @example
 * or(true, false, false) // true
 */
function or(...args) {
  return args.some(arg => arg === true);
}

/**
 * it returns the opposite of the argument given
 * @param {any} arg
 * @returns {boolean}
 * @example
 * not(true) // false
 */
function not(arg) {
  return !arg;
}

/**
 * the `is` function is used to compare two values if they are truly equal
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 * @example
 * is(1, 1) // true
 * is("hello", "hi") // false
 * // Objects are compared by their keys recursively
 * const obj1 = {name: "john", age: 20};
 * const obj2 = {name: "john", age: 20};
 * is(obj1, obj2) // true
 * 
 * // Functions are compared by their source code
 * const fn1 = () => console.log("hello");
 * const fn2 = () => console.log("hi");
 * is(fn1, fn2) // false
 * 
 * // Dates are compared by their millisecond representation
 * const date1 = new Date();
 * const date2 = new Date(date1.getTime());
 * is(date1, date2) // true
 * 
 * // Regular expressions are compared by their source code
 * const reg1 = /hello/;
 * const reg2 = /hi/;
 * is(reg1, reg2) // false
 */
function is(value1, value2) {
  switch (typeof value1) {
    // compare functions by their source code
    case 'function':
      return value1.toString() === value2.toString();

    // compare object by keys recursively
    case 'object':
      if (or(value1 === null, value2 === null)) {
        return value1 === value2;
      }
      switch (value1.constructor) {
        // compare dates by their millisecond representation
        case Date:
          return value1.getTime() === value2.getTime();
        // compare regular expressions by their source code
        case RegExp:
          return value1.toString() === value2.toString();
        default:
          if (not(is(value1.constructor, value2.constructor))) {
            return false;
          }
          const keys1 = Object.keys(value1);
          const keys2 = Object.keys(value2);
          if (not(is(keys1.length, keys2.length))) {
            return false;
          }
          return keys1.every(key => is(value1[key], value2[key]));
      }
    default:
      return value1 === value2;
  }
}

/**
 * loops through the given iterations and calls the callback function with the index ```i``` as argument
 * @param {number} iterations// the number of iterations to loop through
 * @param {CallableFunction} cb // the function to call in each iteration with the `index` ```i``` as argument
 * @param {number} i // the starting index by default it's 0
 * @param {number} step // the step to increment the index by default it's 1
 * @example
 * loop(5, i=>console.log(i)) // 0 1 2 3 4
 */
function loop(iterations, cb, i = 0, step = 1) {
  for (i; i < iterations; i += step) {
    cb(i);
  }
}

/**
 * loops through the given `object` and calls the `callback` function with the `key` as argument
 * @param {object} obj // the object to loop through
 * @param {CallableFunction} cb // the function to call in each iteration with the `key` as argument
 * @example
 * const obj = {name:"ahmed", age: 20};
 * objloop(obj, (key, val) => console.log(key, val))
 * // name ahmed
 * // age 20
 */
function objloop(obj, cb) {
  for (const key in obj) {
    cb(key, obj[key]);
  }
}

/**
 * @deprecated use `objloop` instead
 * 
 */
function keyloop(obj, cb) {
  for (const key in obj) {
    cb(key);
  }
}
const print = console.log;

/// ======================THE HOPERATORS CLASS: HANDY-JS: OPERATORS METHODS ======================

/**
 * @namespace HOperators
 * @description handy operators
 * @example
 * // 1
 * import HOperators from 'handy-js'
 * HOperators.and(true, true, true) // true
 * HOperators.or(true, false, false) // true
 * // 2
 * import {and, or} from 'handy-js'
 * and(true, true, true) // true
 * or(true, false, false) // true
 */
class HOperators {
  /**
   * it returns true if all the arguments are true
   * @memberof HOperators
   * @param  {...any} args
   * @returns {boolean}
   * @example
   * HOperators.and(true, true, true) // true
   */
  static and = and;

  /**
   * it returns true if any of the arguments is true
   * @memberof HOperators
   * @param  {...any} args
   * @returns {boolean}
   * @example
   * HOperators.or(true, false, false) // true
   */
  static or = or;

  /**
   * it returns the opposite of the argument given
   * @memberof HOperators
   * @param {any} arg
   * @returns {boolean}
   * @example
   * HOperators.not(true) // false
   * HOperators.not(false) // true
   */
  static not = not;

  /**
   * This method is used to compare two values if they are truly equal
   * @memberof HOperators
   * @param {any} value1
   * @param {any} value2
   * @returns {boolean}
   * @example
   * HOperators.is(1, 1) // true
   * HOperators.is("hello", "hi") // false
   * 
   * // Objects are compared by their keys recursively
   * const obj1 = {name: "john", age: 20};
   * const obj2 = {name: "john", age: 20};
   * HOperators.is(obj1, obj2) // true
   * 
   * // Functions are compared by their source code
   * const fn1 = () => console.log("hello");
   * const fn2 = () => console.log("hi");
   * HOperators.is(fn1, fn2) // false
   * 
   * // Dates are compared by their millisecond representation
   * const date1 = new Date();
   * const date2 = new Date(date1.getTime());
   * HOperators.is(date1, date2) // true
   * 
   * // Regular expressions are compared by their source code
   * const reg1 = /hello/;
   * const reg2 = /hi/;
   * HOperators.is(reg1, reg2) // false
   */
  static is = is;

  /**
   * loops through the given iterations and calls the callback function with the index ```i``` as argument
   * @memberof HOperators
   * @param {number} iterations// the number of iterations to loop through
   * @param {CallableFunction} callback // the function to call in each iteration with the `index` ```i``` as argument
   * @param {number} i // the starting index by default it's 0
   * @param {number} step // the step to increment the index by default it's 1
   * @example
   * HOperators.loop(5, i=>console.log(i)) // 0 1 2 3 4
   */
  static loop = loop;

  /**
   * loops through the given `object` and calls the `callback` function with the `key` as argument
   * @memberof HOperators
   * @param {object} obj // the object to loop through
   * @param {CallableFunction} callback // the function to call in each iteration with the `key` as argument
   * @example
   * const obj = {name:"ahmed", age: 20};
   * HOperators.objloop(obj, (key, val) => console.log(key, val))
   * // name ahmed # the keys
   * // age 20 # the values
   */
  static objloop = objloop;

  /**
   * @deprecated use `HOperators.objloop()` instead
   */
  static keyloop = keyloop;
  static print = print;
}

// Description: This file contains the Sort class.

/**
 * The `Sort` class is a wrapper for sorting algorithms. every method returns a new instance of `Sort` class.
 * and ever sort method it works on a specifis cercumstances.
 * @param {Array} array
 * @param {string} order // asc or desc
 * @returns {Sort}
 * @example
 * const sort = new Sort([1, 2, 3, 4, 5]);
 * // it will not show thedifference between eash sort method
 * sort.bubbleSort().sorted // [1, 2, 3, 4, 5]
 * sort.selectionSort().sorted // [1, 2, 3, 4, 5]
 * sort.insertionSort().sorted // [1, 2, 3, 4, 5]
 * .............................................
 */
class Sort {
  static ASC = 'asc';
  static DESC = 'desc';

  /**
   * The `Sort` class is a wrapper for sorting algorithms. every method returns a new instance of `Sort` class.
   * and ever sort method it works on a specifis cercumstances.
   * @param {Array} array 
   * @param {string} order // asc or desc
   * @returns {Sort}
   * @example
   * const sort = new Sort([1, 2, 3, 4, 5]);
   * // it will not show thedifference between eash sort method
   * sort.bubbleSort().sorted // [1, 2, 3, 4, 5]
   * sort.selectionSort().sorted // [1, 2, 3, 4, 5]
   * sort.insertionSort().sorted // [1, 2, 3, 4, 5]
   * .............................................
   */
  constructor(array, order = Sort.ASC) {
    this.sort = order;
    this.array = array;
    this.length = array.length;
    this.sorted = [...array];
  }
  bubbleSort() {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.sorted[j] > this.sorted[j + 1]) {
          [this.sorted[j], this.sorted[j + 1]] = [this.sorted[j + 1], this.sorted[j]];
        }
      }
    }
    return this.sort === "asc" ? this.sorted : this.sorted.reverse();
  }
  selectionSort() {
    for (let i = 0; i < this.length; i++) {
      let min = i;
      for (let j = i + 1; j < this.length; j++) {
        if (this.sorted[j] < this.sorted[min]) {
          min = j;
        }
      }
      if (min !== i) {
        [this.sorted[i], this.sorted[min]] = [this.sorted[min], this.sorted[i]];
      }
    }
    return this.sort === "asc" ? this.sorted : this.sorted.reverse();
  }
  insertionSort() {
    for (let i = 1; i < this.length; i++) {
      const key = this.sorted[i];
      let j = i - 1;
      while (j >= 0 && this.sorted[j] > key) {
        this.sorted[j + 1] = this.sorted[j];
        j--;
      }
      this.sorted[j + 1] = key;
    }
    return this.sort === "asc" ? this.sorted : this.sorted.reverse();
  }
  mergeSort() {
    if (this.length <= 1) {
      return this;
    }
    const middle = Math.floor(this.length / 2);
    const left = this.sorted.slice(0, middle);
    const right = this.sorted.slice(middle);
    const merged = this.#merge(this.mergeSort(left).sorted, this.mergeSort(right).sorted);
    return this.sort === "asc" ? merged : merged.reverse();
  }
  #merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return sorted.concat(left, right);
  }
  quickSort() {
    if (this.length <= 1) {
      return this;
    }
    const pivot = this.sorted[this.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < this.length - 1; i++) {
      if (this.sorted[i] < pivot) {
        left.push(this.sorted[i]);
      } else {
        right.push(this.sorted[i]);
      }
    }
    const sorted = [...this.quickSort(left).sorted, pivot, ...this.quickSort(right).sorted];
    return this.sort === "asc" ? sorted : sorted.reverse();
  }
  heapSort() {
    for (let i = Math.floor(this.length / 2) - 1; i >= 0; i--) {
      this.#heapify(this.sorted, this.length, i);
    }
    for (let i = this.length - 1; i > 0; i--) {
      [this.sorted[0], this.sorted[i]] = [this.sorted[i], this.sorted[0]];
      this.#heapify(this.sorted, i, 0);
    }
    return this.sort === "asc" ? this.sorted : this.sorted.reverse();
  }
  #heapify(array, length, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < length && array[left] > array[largest]) {
      largest = left;
    }
    if (right < length && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      this.#heapify(array, length, largest);
    }
  }
  countingSort() {
    const max = Math.max(...this.sorted);
    const min = Math.min(...this.sorted);
    const count = new Array(max - min + 1).fill(0);
    const sorted = [];
    for (let i = 0; i < this.length; i++) {
      count[this.sorted[i] - min]++;
    }
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        sorted.push(i + min);
        count[i]--;
      }
    }
    return this.sort === "asc" ? sorted : sorted.reverse();
  }
  shellSort() {
    let gap = Math.floor(this.length / 2);
    while (gap > 0) {
      for (let i = gap; i < this.length; i++) {
        const temp = this.sorted[i];
        let j = i;
        while (j >= gap && this.sorted[j - gap] > temp) {
          this.sorted[j] = this.sorted[j - gap];
          j -= gap;
        }
        this.sorted[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }
    return this.sort === "asc" ? this.sorted : this.sorted.reverse();
  }
  bucketSort(bucketSize = 5) {
    Math.max(...this.sorted);
    const min = Math.min(...this.sorted);
    // const bucketSize = Math.floor((max - min) / this.length) + 1;
    const buckets = new Array(bucketSize).fill().map(() => []);
    const sorted = [];
    for (let i = 0; i < this.length; i++) {
      const bucketIndex = Math.floor((this.sorted[i] - min) / bucketSize);
      buckets[bucketIndex].push(this.sorted[i]);
    }
    for (let i = 0; i < buckets.length; i++) {
      const bucket = this.quickSort(buckets[i]);
      sorted.push(...bucket.sorted);
    }
    return this.sort === "asc" ? sorted : sorted.reverse();
  }
  radixSort(radix = 10) {
    const max = Math.max(...this.sorted);
    const maxDigits = Math.floor(Math.log10(max)) + 1;
    let sorted = [...this.sorted];
    for (let i = 0; i < maxDigits; i++) {
      const buckets = new Array(radix).fill().map(() => []);
      for (let j = 0; j < sorted.length; j++) {
        const digit = Math.floor(sorted[j] / radix ** i) % radix;
        buckets[digit].push(sorted[j]);
      }
      sorted = [].concat(...buckets);
    }
    return this.sort === "asc" ? sorted : sorted.reverse();
  }
}

//// ARRAY - HANDY-JS: ARRAY METHODS --------------------------------------------

/**
 * @class HArray
 * @extends Array
 * @classdesc The `HArray` class is a subclass of the `Array` class.
 * It contains all the methods of the `Array` class and some additional methods.
 * @example
 * // 1
 * import { HArray } from "handy-js";
 * HArray.range(0, 5) // [0, 1, 2, 3, 4, 5]
 * 
 * // 2
 * import { HArray } from "handy-js";
 * const arr = new HArray([1, 2, 3, 4, 5]);
 * arr.shuffle() // [3, 5, 4, 1, 2]
 */
class HArray extends Array {
  constructor(array, ...args) {
    super(...args);
    if (array instanceof Array) {
      this.push(...array);
    }
  }

  /**
   * The `range()` method creates an array of numbers in the given range.
   * @param {number} start
   * @param {number} end
   * @param {number} step
   * @returns {number[]}
   * @example
   * HArray.range(0, 5) // [0, 1, 2, 3, 4, 5]
   */
  static range(end, start = 0, step = 1) {
    const length = Math.floor((end - start) / step) + 1;
    return Array.from({
      length
    }, (_, i) => start + i * step);
  }

  /**
   * The `shuffle()` method shuffles the elements in the given array.
   * @method shuffle
   * @returns {HArray} 
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.shuffle() // [3, 5, 4, 1, 2]
   */
  shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  }

  /**
   * Sort the `array` in ascending or descending order using the `bubbleSort()`.
   * by default it will sort the array in ascending order.
   * @method bubbleSort
   * @param {string} order
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.bubbleSort() // [1, 2, 3, 4, 5]
   * arr.bubbleSort("desc") // [5, 4, 3, 2, 1]
   */
  bubbleSort(order = Sort.ASC) {
    return new HArray(new Sort(this, order).bubbleSort());
  }
  /**
   * Sort the `array` in ascending or descending order using the `selectionSort()`.
   * by default it will sort the array in ascending order.
   * @method selectionSort
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.selectionSort() // [1, 2, 3, 4, 5]
   * arr.selectionSort("desc") // [5, 4, 3, 2, 1]
   */
  selectionSort(order = Sort.ASC) {
    return new HArray(new Sort(this, order).selectionSort());
  }
  /**
   * Sort the `array` in ascending or descending order using the `insertionSort()`.
   * by default it will sort the array in ascending order.
   * @method insertionSort
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.insertionSort() // [1, 2, 3, 4, 5]
   * arr.insertionSort("desc") // [5, 4, 3, 2, 1]
   */
  insertionSort(order = Sort.ASC) {
    return new HArray(new Sort(this, order).insertionSort());
  }
  /**
   * Sort the `array` in ascending or descending order using the `mergeSort()`.
   * by default it will sort the array in ascending order.
   * @method mergeSort
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.mergeSort() // [1, 2, 3, 4, 5]
   * arr.mergeSort("desc") // [5, 4, 3, 2, 1]
   */
  mergeSort(order = Sort.ASC) {
    return new HArray(new Sort(this, order).mergeSort());
  }
  /**
   * Sort the `array` in ascending or descending order using the `quickSort()`.
   * by default it will sort the array in ascending order.
   * @method quickSort
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.quickSort() // [1, 2, 3, 4, 5]
   * arr.quickSort("desc") // [5, 4, 3, 2, 1]
   */
  quickSort(order = Sort.ASC) {
    return new HArray(new Sort(this, order).quickSort());
  }
  /**
   * Sort the `array` in ascending or descending order using the `heapSort()`.
   * by default it will sort the array in ascending order.
   * @method heapSort
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.heapSort() // [1, 2, 3, 4, 5]
   * arr.heapSort("desc") // [5, 4, 3, 2, 1]
   */
  heapSort(order = Sort.ASC) {
    return new HArray(new Sort(this, order).heapSort());
  }
  /**
   * Sort the `array` in ascending or descending order using the `countingSort()`.
   * by default it will sort the array in ascending order.
   * @method countingSort
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.countingSort() // [1, 2, 3, 4, 5]
   * arr.countingSort("desc") // [5, 4, 3, 2, 1]
   */
  countingSort(order = Sort.ASC) {
    return new HArray(new Sort(this, order).countingSort());
  }
  /**
   * Sort the `array` in ascending or descending order using the `bucketSort()`.
   * by default it will sort the array in ascending order.
   * @method bucketSort
   * @param {number} bucketSize // the size of the bucket to be used wish sorting the array (default: 5)
   * @default bucketSize = 5
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.bucketSort() // [1, 2, 3, 4, 5]
   * arr.bucketSort(2,"desc") // [5, 4, 3, 2, 1]
   */
  bucketSort(bucketSize = 5, order = Sort.ASC) {
    return new HArray(new Sort(this, order).bucketSort(bucketSize));
  }
  /**
   * Sort the `array` in ascending or descending order using the `radixSort()`.
   * by default it will sort the array in ascending order.
   * @method radixSort
   * @param {number} radix // the radix base to be used wish sorting the array (default: 10)
   * @default radix = 10
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.radixSort() // [1, 2, 3, 4, 5]
   * arr.radixSort(10,"desc") // [5, 4, 3, 2, 1]
   */
  radixSort(radix = 10, order = Sort.ASC) {
    return new HArray(new Sort(this, order).radixSort(radix));
  }
  /**
   * Sort the `array` in ascending or descending order using the `shellSort()`.
   * by default it will sort the array in ascending order.
   * @method shellSort
   * @param {string} order // the order of the sorting: "asc" or "desc"
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.shellSort() // [1, 2, 3, 4, 5]
   * arr.shellSort("desc") // [5, 4, 3, 2, 1]
   */
  shellSort(order = Sort.ASC) {
    return new HArray(new Sort(this, order).shellSort());
  }
  /**
   * The `chunk()` method splits an array into chunks of the given size.
   * @method chunk
   * @param {number} size // the size of the chunk to be used wish splitting the array (default: 1)
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.chunk(2) // [[1, 2], [3, 4], [5]]
   */
  chunk(size = 1) {
    return new HArray(this.slice(0, Math.ceil(this.length / size)).reduce((acc, _, i) => [...acc, this.slice(size * i, size * i + size)], []));
  }
  /**
   * the `compact()` method removes all falsy values from an array.
   * @method compact
   * @returns {HArray}
   * @example
   * const arr = new HArray([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
   * arr.compact() // [1, 2, 3, "a", "s", 34]
   */
  compact() {
    return new HArray(this.filter(item => item));
  }
  /**
   * The `filterNullish()` method removes all nullish `null` values from an array.
   * @method filterNullish
   * @returns {HArray}
   * @example
   * const arr = new HArray([0, null, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
   * arr.filterNullish() // [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]
   */
  filterNullish() {
    return new HArray(this.filter(item => item != null));
  }
  /**
   * The `unique()` method removes all duplicates from an array.
   * @method unique
   * @returns {HArray}
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5, 5, 5, 6]);
   * arr.unique() // [1, 2, 3, 4, 5, 6]
   */
  unique() {
    return new HArray([...new Set(this)]);
  }
  /**
   * The `countBy()` method counts the occurrences of each element in an array.
   * @method countBy
   * @param {Function} callback
   * @returns {Object}
   * @example
   * HArray.countBy([1, 2, 3, 4, 5], x => x % 2 === 0 ? 'even' : 'odd') // { odd: 3, even: 2 }
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.countBy(x => x % 2 === 0 ? 'even' : 'odd') // { odd: 3, even: 2 }
   */
  countBy(callback) {
    return this.reduce((acc, val) => {
      const key = callback(val);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  }
  // TODO: add `binarySearch()` method
  // desc: the binary search algorithm is a method of searching a sorted array for a single element by cutting the array in half with each recursive pass.
  // The trick is to pick a midpoint near the center of the array,
  // compare the data at that point with the data being searched and then responding to one of three possible conditions:
  // the data is found at the midpoint, the data at the midpoint is greater than the data being searched for,
  // or the data at the midpoint is less than the data being searched for.

  // SEE: 
  // https://www.youtube.com/watch?v=JQhciTuD3E8, 
  // https://www.geeksforgeeks.org/binary-search-in-javascript/
  // https://stackabuse.com/binary-search-in-javascript/

  /**
   * The `binarySearch()` method searches an array for the specified item using the binary search algorithm.
   * @todo add binary search algorithm
   * @method binarySearch
   * @param {any} item // the item to be searched for
   * @returns {number} // the index of the item if found, otherwise -1
   * @example
   * const arr = new HArray([1, 2, 3, 4, 5]);
   * arr.binarySearch(3) // 2
   */
  binarySearch(item) {
    // TODO: add binary search algorithm
  }
}

//// MATH - HANDY-JS: MATH METHODS --------------------------------------------

/**
 * @namespace HMath
 * @extends Math
 * @description
 * The `HMath` namespace contains usful math constants and methods.
 * @example
 * // 1
 * import { HMath } from "handy-js",
 * HMath.PI // output:3.141592653589793
 * // 2
 * import HMath from "handy-js/math",
 * HMath.PI // output:3.141592653589793
 */
const HMath = {
  // Extends Math
  ...Math,
  // ower own math constants
  /**
   * The Tau constant, equal to 2 * PI.
   */
  TAU: 2 * Math.PI,
  // 2 * PI
  /**
   * The square root of `3`. approximately `1.732`.
   */
  SQRT3: 1.73205080756887729352744634150587236694280525381038062805580697945193301690880,
  // square root of 3
  /**
   * The Golden ratio constant, approximately `1.618`.
   */
  PHI: 1.61803398874989484820458683436563811772030917980576286213544862270526046281890,
  // golden ratio
  // Golomb Dickman constant
  /**
   * The Golomb-Dickman constant, approximately `0.624`.
   * Math Formula: `G = 1 - G`
   */
  G: 0.624329988543550870992936383100837235703606993625832517625695166735847239685,
  // Feigenbaum constant
  /**
   * The Feigenbaum constant, approximately `4.669`.
   * Math Formula: `delta = 1 - alpha`
   */
  DELTA: 4.669201609102990671853203820466201617258185577475768632745651343004134330211,
  // Euler-Mascheroni constant
  /**
   * The Euler-Mascheroni constant, approximately `0.577`.
   * Math Formula: `gamma = 1 - zeta(0)`
   */
  GAMMA: 0.577215664901532860606512090082402431042159335939923598805767234884867726777,
  // Catalan's constant
  /**
   * Catalan's constant, approximately `0.915`.
   * Math Formula: `K = 1 - zeta(2)`
   */
  K: 0.915965594177219015054603514932384110774149374281672134266498119621763019776,
  // Apery's constant
  /**
   * Apery's constant, approximately `1.202`.
   * Math Formula: `zeta(3)`
   */
  ZETA3: 1.202056903159594285399738161511449990764986292340498881792271555341838205786,
  // Cahen's constant
  /**
   * Cahen's constant, approximately `0.643`.
   * Math Formula: `theta = 1 - zeta(4)`
   */
  THETA: 0.6434105463,
  // Landau-Ramanujan constant
  /**
   * Landau-Ramanujan constant, approximately `0.764`.
   * Math Formula: `kappa = 1 - zeta(3)`
   */
  KAPPA: 0.764223653589220662990698731250092320971690526083222067341264027404987097155,
  // Glaisher–Kinkelin constant
  /**
   * Glaisher–Kinkelin constant, approximately `1.282`.
   * Math Formula: `A = e^(1/12 - zeta'(-1))`
   */
  A: 1.282427129100622636875342568869791727767688927325001192063740432988395529732,
  // Backhouse's constant
  /**
   * Backhouse's constant, approximately `1.456`.
   * Math Formula: `B = e^(1/12 - zeta'(-1))`
   */
  B: 1.456074948582689671399595351116543266074274800178127884495013673643948446868,
  // ower own math methods
  /**
   * it returns a random number between `min` and `max` exlusive
   * @method randomInt
   * @param {number} min the minimum number by default it is 0
   * @param {number} max the maximum number
   * @returns {number} a random number between min and max
   * @example
   * HMath.randomInt(1, 10) // 7
   */
  randomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  /**
   * it clamps the `value` between `min` and `max` in other words
   * it returns the `value` if it is between `min` and `max` otherwise it returns the `min` or `max`
   * @method clamp
   * @param {number} value the value to clamp
   * @param {number} min the minimum value
   * @param {number} max the maximum value
   * @returns {number} the clamped value
   * @example
   * HMath.clamp(10, 1, 5) // 5
   */
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },
  /**
   * the `lerp` or linear interpolation is a function that takes a start value `start`,
   * an end value `end` and a `t` value
   * and returns a value between `start` and `end` based on the `t` value
   * The math formula is `start * (1 - t) + end * t`
   * @method lerp
   * @param {number} start the start value
   * @param {number} end the end value
   * @param {number} t the t value
   * @returns {number} the interpolated value
   * @example
   * HMath.lerp(0, 100, 0.5) // 50
   * HMath.lerp(0, 100, 0.25) // 25
   * HMath.lerp(0, 100, 0.75) // 75
   */
  lerp(start, end, t) {
    return start * (1 - t) + end * t;
  },
  /**
   * it returns the value mapped from the input range to the output range
   * The math formula is 
   * `output = ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin`
   * @method map
   * @param {number} value the value to map
   * @param {number} inputMin the minimum value of the input range
   * @param {number} inputMax the maximum value of the input range
   * @param {number} outputMin the minimum value of the output range
   * @param {number} outputMax the maximum value of the output range
   * @returns {number} the mapped value
   * @example
   * HMath.map(50, 0, 100, 0, 1) // 0.5
   * HMath.map(50, 0, 100, 0, 10) // 5
   * HMath.map(50, 0, 100, 0, 1000) // 500
   */
  map(value, inputMin, inputMax, outputMin, outputMax) {
    const inputRange = inputMax - inputMin;
    const outputRange = outputMax - outputMin;
    const normalizedValue = (value - inputMin) / inputRange;
    return outputMin + normalizedValue * outputRange;
  }
};

exports.HArray = HArray;
exports.HMath = HMath;
exports.HOperators = HOperators;
exports.HString = HString;
