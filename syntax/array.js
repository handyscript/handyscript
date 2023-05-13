import Sort from "../constants/Sort.js";

const Array = {
    /**
     * The `range()` method creates an array of numbers in the given range.
     * @param {number} start
     * @param {number} end
     * @param {number} step
     * @returns {number[]}
     * @example
     * range(0, 5) // [0, 1, 2, 3, 4, 5]
     * range(5) // [0, 1, 2, 3, 4, 5]
     */
    range: (end, start = 0, step = 1) => {
        const length = Math.floor((end - start) / step) + 1;
        return Array.from({ length }, (_, i) => start + i * step);
    },

    /**
     * The `shuffle()` method shuffles the elements in the given array.
     * @param {any[]} array
     * @returns {any[]}
     * @example
     * shuffle([1, 2, 3, 4, 5]) // [3, 5, 4, 1, 2]
     */
    shuffle: array => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    /**
     * Sort the `array` in ascending or descending order using the `bubbleSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {string} order
     * @returns {Sort}
     * @example
     * bubbleSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * bubbleSort([1, 2, 3, 4, 5], "desc") // [5, 4, 3, 2, 1]
     */
    bubbleSort: (array, order = Sort.ASC) => new Sort(array, order).bubbleSort(),

    /**
     * Sort the `array` in ascending or descending order using the `selectionSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * selectionSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * selectionSort([1, 2, 3, 4, 5], "desc") // [5, 4, 3, 2, 1]
     */
    selectionSort: (array, order = Sort.ASC) => new Sort(array, order).selectionSort(),

    /**
     * Sort the `array` in ascending or descending order using the `insertionSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * insertionSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * insertionSort([1, 2, 3, 4, 5], "desc") // [5, 4, 3, 2, 1]
     */
    insertionSort: (array, order = Sort.ASC) => new Sort(array, order).insertionSort(),

    /**
     * Sort the `array` in ascending or descending order using the `mergeSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * mergeSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * mergeSort([1, 2, 3, 4, 5], "desc") // [5, 4, 3, 2, 1]
     */
    mergeSort: (array, order = Sort.ASC) => new Sort(array, order).mergeSort(),

    /**
     * Sort the `array` in ascending or descending order using the `quickSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * quickSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * quickSort([1, 2, 3, 4, 5], "desc") // [5, 4, 3, 2, 1]
     */
    quickSort: (array, order = Sort.ASC) => new Sort(array, order).quickSort(),

    /**
     * Sort the `array` in ascending or descending order using the `heapSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * heapSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * heapSort([1, 2, 3, 4, 5], "desc") // [5, 4, 3, 2, 1]
     */
    heapSort: (array, order = Sort.ASC) => new Sort(array, order).heapSort(),

    /**
     * Sort the `array` in ascending or descending order using the `countingSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * countingSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * countingSort([1, 2, 3, 4, 5], "desc") // [5, 4, 3, 2, 1]
     */
    countingSort: (array, order = Sort.ASC) => new Sort(array, order).countingSort(),

    /**
     * Sort the `array` in ascending or descending order using the `bucketSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {number} bucketSize // the size of the bucket to be used wish sorting the array (default: 5)
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * bucketSort([1, 2, 3, 4, 5], 2) // [1, 2, 3, 4, 5]
     * bucketSort([1, 2, 3, 4, 5], 2, "desc") // [5, 4, 3, 2, 1]
     */
    bucketSort: (array, bucketSize = 5, order = Sort.ASC) => new Sort(array, order).bucketSort(bucketSize),

    /**
     * Sort the `array` in ascending or descending order using the `radixSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {number} radix // the radix base to be used wish sorting the array (default: 10)
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * radixSort([1, 2, 3, 4, 5], 2) // [1, 2, 3, 4, 5]
     * radixSort([1, 2, 3, 4, 5], 2, "desc") // [5, 4, 3, 2, 1]
     */
    radixSort: (array, radix = 10, order = Sort.ASC) => new Sort(array, order).radixSort(radix),

    /**
     * Sort the `array` in ascending or descending order using the `shellSort()`.
     * by default it will sort the array in ascending order.
     * @param {any[]} array
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @returns {Sort}
     * @example
     * shellSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * shellSort([1, 2, 3, 4, 5], "desc") // [5, 4, 3, 2, 1]
     */
    shellSort: (array, order = Sort.ASC) => new Sort(array, order).shellSort(),

    /**
     * The `chunk()` method splits an array into chunks of the given size.
     * @param {any[]} array
     * @param {number} size
     * @returns {any[][]}
     * @example
     * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
     * chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
     * chunk([1, 2, 3, 4, 5], 4) // [[1, 2, 3, 4], [5]]
     */
    chunk: (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    },

    /**
     * the `compact()` method removes all falsy values from an array.
     * @param {any[]} array
     * @returns {any[]}
     * @example
     * compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]) // [1, 2, 3, "a", "s", 34]
     * compact([null, undefined, "", 0, false, NaN]) // []
     * compact([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * compact([]) // []
     */
    compact: array => array.filter(Boolean),
    
    /**
     * The `filterNullish()` method removes all nullish `null` values from an array.
     * @param {any[]} array
     * @returns {any[]}
     * @example
     * filterNullish([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]) // [0, 1, false, 2, "", 3, "a", "e" * 23, "s", 34]
     * filterNullish([null, undefined, "", 0, false, NaN]) // [undefined, "", 0, false]
     * filterNullish([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
     * filterNullish([]) // []
     */
    filterNullish: array => array.filter(item => item != null),

    /**
     * The `unique()` method removes all duplicates from an array.
     * @param {any[]} array
     * @returns {any[]}
     * @example
     * unique([1, 2, 3, 4, 5, 5, 5, 6]) // [1, 2, 3, 4, 5, 6]
     */
    unique: array => [...new Set(array)],

    /**
     * The `countBy()` method counts the occurrences of each element in an array.
     * @param {any[]} array
     * @param {Function} fn
     * @returns {Object}
     * @example
     * countBy([1, 2, 3, 4, 5], x => (x % 2 === 0 ? 'even' : 'odd')) // { odd: 3, even: 2 }
     * countBy([1, 2, 3, 4, 5], x => (x > 3 ? 'big' : 'small')) // { small: 3, big: 2 }
     */ 
    countBy: (array, fn) => {
        const counts = {};
        array.forEach(item => {
            const key = fn(item);
            counts[key] = (counts[key] || 0) + 1;
        });
        return counts;
    },
};

export default Array;