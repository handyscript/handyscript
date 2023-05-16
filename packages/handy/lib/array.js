//// ARRAY - HANDY-JS: ARRAY METHODS --------------------------------------------

import Sort from "../modules/Sort.js";

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
export default class HArray extends Array {
    constructor(array, ...args) { 
        super(...args) 
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
    static range(end, start = 0, step = 1){
        const length = Math.floor((end - start) / step) + 1;
        return Array.from({ length }, (_, i) => start + i * step);
    }

    /**
     * The `shuffle()` method shuffles the elements in the given array.
     * @method shuffle
     * @returns {HArray} 
     * @example
     * const arr = new HArray([1, 2, 3, 4, 5]);
     * arr.shuffle() // [3, 5, 4, 1, 2]
     */
    shuffle(){
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
    bubbleSort(order = Sort.ASC) { return new HArray( new Sort(this, order).bubbleSort() )};

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
    selectionSort(order = Sort.ASC) { return new HArray( new Sort(this, order).selectionSort() )};

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
    insertionSort(order = Sort.ASC) { return new HArray( new Sort(this, order).insertionSort() )};

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
    mergeSort(order = Sort.ASC) { return new HArray( new Sort(this, order).mergeSort() )};

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
    quickSort(order = Sort.ASC) { return new HArray( new Sort(this, order).quickSort() )};

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
    heapSort(order = Sort.ASC) { return new HArray( new Sort(this, order).heapSort() )};

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
    countingSort(order = Sort.ASC) { return new HArray( new Sort(this, order).countingSort() )};

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
    bucketSort(bucketSize = 5, order = Sort.ASC) { return new HArray( new Sort(this, order).bucketSort(bucketSize) )};

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
    radixSort(radix = 10, order = Sort.ASC) { return new HArray( new Sort(this, order).radixSort(radix) )};

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
    shellSort(order = Sort.ASC) { return new HArray( new Sort(this, order).shellSort() )};

    /**
     * The `chunk()` method splits an array into chunks of the given size.
     * @method chunk
     * @param {number} size // the size of the chunk to be used wish splitting the array (default: 1)
     * @returns {HArray}
     * @example
     * const arr = new HArray([1, 2, 3, 4, 5]);
     * arr.chunk(2) // [[1, 2], [3, 4], [5]]
     */
    chunk(size = 1){
        return new HArray(this.slice(0, Math.ceil(this.length / size)).reduce((acc, _, i) => [...acc, this.slice(size * i, size * i + size)], []));
    };

    /**
     * the `compact()` method removes all falsy values from an array.
     * @method compact
     * @returns {HArray}
     * @example
     * const arr = new HArray([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
     * arr.compact() // [1, 2, 3, "a", "s", 34]
     */
    compact(){ return new HArray(this.filter(item => item)) };

    /**
     * The `filterNullish()` method removes all nullish `null` values from an array.
     * @method filterNullish
     * @returns {HArray}
     * @example
     * const arr = new HArray([0, null, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
     * arr.filterNullish() // [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]
     */
    filterNullish(){ return new HArray(this.filter(item => item != null)) };

    /**
     * The `unique()` method removes all duplicates from an array.
     * @method unique
     * @returns {HArray}
     * @example
     * const arr = new HArray([1, 2, 3, 4, 5, 5, 5, 6]);
     * arr.unique() // [1, 2, 3, 4, 5, 6]
     */
    unique(){ return new HArray([...new Set(this)]) };

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
    countBy(callback){
        return this.reduce((acc, val) => {
            const key = callback(val);
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {});
    };

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
    binarySearch(item){
        // TODO: add binary search algorithm
    };

}

// list of implemented sort algorithms:
// - bubbleSort
// - insertionSort
// - selectionSort
// - mergeSort
// - quickSort
// - heapSort
// - countingSort
// - shellSort
// - bucketSort // accept a parameter for the number of buckets
// - radixSort // accept a parameter for the radix
