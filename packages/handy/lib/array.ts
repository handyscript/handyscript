//// ARRAY - HANDY-JS: ARRAY METHODS --------------------------------------------

declare global {
  /**
   * `SortAlgorithm` is a type that represents the sorting algorithms.
   */
  type BinarySortAlgorithms =
    | "bubble"
    | "selection"
    | "insertion"
    | "merge"
    | "quick"
    | "heap"
    // | "radix" it supports only numbers
    // | "counting" it supports only numbers
    | "bucket"
    | "shell";


  /**
   * `SortOrder` is a type that represents the sorting order.
   */
  type SortOrder = "asc" | "desc";

  interface Array<T> {
    /**
     * The `shuffle()` method shuffles the elements in the given array.
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.shuffle() // [3, 5, 4, 1, 2]
     */
    shuffle(): T[];

    /**
     * Sort the `array` in ascending or descending order using the `bubbleSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order
     * @this {Array} Time complexity: `O(n^2)`
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.bubbleSort() // [1, 2, 3, 4, 5]
     * arr.bubbleSort("desc") // [5, 4, 3, 2, 1]
     */
    bubbleSort(order?: SortOrder): T[];

    /**
     * Sort the `array` in ascending or descending order using the `selectionSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.selectionSort() // [1, 2, 3, 4, 5]
     * arr.selectionSort("desc") // [5, 4, 3, 2, 1]
     */
    selectionSort(order?: SortOrder): T[];

    /**
     * Sort the `array` in ascending or descending order using the `insertionSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.insertionSort() // [1, 2, 3, 4, 5]
     * arr.insertionSort("desc") // [5, 4, 3, 2, 1]
     */
    insertionSort(order?: SortOrder): T[];

    /**
     * Sort the `array` in ascending or descending order using the `mergeSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.mergeSort() // [1, 2, 3, 4, 5]
     * arr.mergeSort("desc") // [5, 4, 3, 2, 1]
     */
    mergeSort(order?: SortOrder): T[];

    /**
     * Sort the `array` in ascending or descending order using the `quickSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.quickSort() // [1, 2, 3, 4, 5]
     * arr.quickSort("desc") // [5, 4, 3, 2, 1]
     */
    quickSort(order?: SortOrder): T[];

    /**
     * Sort the `array` in ascending or descending order using the `heapSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.heapSort() // [1, 2, 3, 4, 5]
     * arr.heapSort("desc") // [5, 4, 3, 2, 1]
     */
    heapSort(order?: SortOrder): T[];

    /**
     * Sort the `array` in ascending or descending order using the `countingSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.countingSort() // [1, 2, 3, 4, 5]
     * arr.countingSort("desc") // [5, 4, 3, 2, 1]
     */
    countingSort(order?: SortOrder): T[];


    /**
     * Sort the `array` in ascending or descending order using the `bucketSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.bucketSort() // [1, 2, 3, 4, 5]
     * arr.bucketSort(2,"desc") // [5, 4, 3, 2, 1]
     */
    bucketSort(order?: SortOrder): T[];

    /**
     * Sort the `array` in ascending or descending order using the `radixSort()`.
     * by default it will sort the array in ascending order.
     * @param {number} radix // the radix base to be used wish sorting the array (default: 10)
     * @default radix = 10
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.radixSort() // [1, 2, 3, 4, 5]
     * arr.radixSort(10,"desc") // [5, 4, 3, 2, 1]
     */
    radixSort(radix?: number, order?: SortOrder): T[];

    /**
     * Sort the `array` in ascending or descending order using the `shellSort()`.
     * by default it will sort the array in ascending order.
     * @param {string} order // the order of the sorting: "asc" or "desc"
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.shellSort() // [1, 2, 3, 4, 5]
     * arr.shellSort("desc") // [5, 4, 3, 2, 1]
     */
    shellSort(order?: SortOrder): T[];

    /**
     * The `chunk()` method splits an array into chunks of the given size.
     * @param {number} size // the size of the chunk to be used wish splitting the array (default: 1)
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.chunk(2) // [[1, 2], [3, 4], [5]]
     */
    chunk(size?: number): T[][];

    /**
     * the `compact()` method removes all falsy values from an array.
     * @example
     * const arr = [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
     * arr.compact() // [1, 2, 3, "a", "s", 34]
     */
    compact(): any[];

    /**
     * The `filterNullish()` method removes all nullish `null` values from an array.
     * @example
     * const arr = [0, null, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
     * arr.filterNullish() // [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]
     */
    filterNullish(): any[];

    /**
     * The `unique()` method removes all duplicates from an array.
     * @example
     * const arr = [1, 2, 3, 4, 5, 5, 5, 6]);
     * arr.unique() // [1, 2, 3, 4, 5, 6]
     */
    unique(): T[];

    /**
     * The `countBy()` method counts the occurrences of each element in an array.
     * @param {CallableFunction} callback
     * @example
     * HArray.countBy([1, 2, 3, 4, 5], x => x % 2 === 0 ? 'even' : 'odd') // { odd: 3, even: 2 }
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.countBy(x => x % 2 === 0 ? 'even' : 'odd') // { odd: 3, even: 2 }
     */
    countBy(callback: (item: any) => string): object;

    /**
     * The `binarySearch()` method searches an array for the specified item using the binary search algorithm.
     * @param {any} target // the target to be searched for
     * @param {BinarySortAlgorithms | undefined} sortalgo the sort algorithm to be used in sorting the array before searching
     * @example
     * const arr = [1, 2, 3, 4, 5]);
     * arr.binarySearch(3) // 2
     */
    binarySearch(target: any, sortalgo?: BinarySortAlgorithms): any | -1;
  }    
 
}

// const arr = [1, 2, 3, 4, 5];
// arr.

/**
 * The `range()` function creates an array of numbers in the given range.
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @example
 * HArray.range(0, 5) // [0, 1, 2, 3, 4, 5]
 */
export function range(end: number, start = 0, step = 1){
    const length = Math.floor((end - start) / step) + 1;
    return Array.from({ length }, (_, i) => start + i * step);
};

Array.prototype.shuffle = function (){
    if (this.length === 0) return this;

    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
};

Array.prototype.bubbleSort = function (order: SortOrder = "asc") { 
    if (this.length === 0) return this;

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (order === "asc" ? this[j] > this[j + 1] : this[j] < this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this;
};

Array.prototype.selectionSort = function (order: SortOrder = "asc") {
    if (this.length === 0) return this;

    for (let i = 0; i < this.length; i++) {
        let min = i;
        for (let j = i + 1; j < this.length; j++) {
            if (order === "asc" ? this[j] < this[min] : this[j] > this[min]) min = j;
        }
        if (min !== i) [this[i], this[min]] = [this[min], this[i]];
    }
    return this;
};

Array.prototype.insertionSort = function (order: SortOrder = "asc") {
    if (this.length === 0) return this;

    for (let i = 1; i < this.length; i++) {
        let j = i - 1;
        let temp = this[i];
        while (j >= 0 && (order === "asc" ? this[j] > temp : this[j] < temp)) {
            this[j + 1] = this[j];
            j--;
        }
        this[j + 1] = temp;
    }
    return this;
};

Array.prototype.mergeSort = function (order: SortOrder = "asc") {
    if (this.length === 0) return this;

    const merge = (left: any[], right: any[]) => {
        const result = [];
        while (left.length && right.length) {
            if (order === "asc" ? left[0] <= right[0] : left[0] >= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        while (left.length) result.push(left.shift());
        while (right.length) result.push(right.shift());
        return result;
    }
    if (this.length < 2) return this;
    const middle = Math.floor(this.length / 2);
    const left = this.slice(0, middle);
    const right = this.slice(middle, this.length);
    return merge(left.mergeSort(order), right.mergeSort(order));
};

Array.prototype.quickSort = function (order: SortOrder = "asc") {
    if (this.length === 0) return this;

    const partition = (arr: any[], left: number, right: number) => {
        const pivot = arr[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;
        while (i <= j) {
            if (order === "asc") {
                while (arr[i] < pivot) i++;
                while (arr[j] > pivot) j--;
            } else {
                while (arr[i] > pivot) i++;
                while (arr[j] < pivot) j--;
            }
            if (i <= j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
                j--;
            }
        }
        return i;
    }
    
    let left = 0;
    let right = this.length - 1;
    let index;
    if (this.length > 1) {
        index = partition(this, left, right);
        if (left < index - 1) this.quickSort(order);
        if (index < right) this.quickSort(order);
    }
    return this;
};

Array.prototype.heapSort = function (order: SortOrder = "asc") {
    if (this.length === 0) return this;
    
    const heapify = (arr: any[], length: number, i: number) => {
        let largest = i;
        const left = i * 2 + 1;
        const right = left + 1;
        if (left < length && (order === "asc" ? arr[left] > arr[largest] : arr[left] < arr[largest])) largest = left;
        if (right < length && (order === "asc" ? arr[right] > arr[largest] : arr[right] < arr[largest])) largest = right;
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, length, largest);
        }
    }

    const buildMaxHeap = (arr: any[]) => {
        for (let i = Math.floor(arr.length / 2); i >= 0; i--) heapify(arr, arr.length, i);
        return arr;
    }

    buildMaxHeap(this);
    for (let i = this.length - 1; i > 0; i--) {
        [this[0], this[i]] = [this[i], this[0]];
        heapify(this, i, 0);
    }
    return this;
};

// THIS: only support array of numbers
Array.prototype.countingSort = function (this: number[], order: SortOrder = "asc") {
    if (this.length === 0) return this;
    if (!this.every(num => typeof num === "number")) throw new Error("countingSort only support array of numbers");

    const min = Math.min(...this);
    const max = Math.max(...this);
    const countBucket = new Array(max - min + 1).fill(0);
    const start = order === "asc" ? 0 : countBucket.length - 1;
    const step = order === "asc" ? 1 : -1;
    for (let i = 0; i < this.length; i++) countBucket[this[i] - min]++;
    let index = start;
    for (let i = 0; i < countBucket.length; i++) {
        while (countBucket[i] > 0) {
            this[index] = i + min;
            index += step;
            countBucket[i]--;
        }
    }
    return this;
};

Array.prototype.bucketSort = function (order: SortOrder = "asc") {
    if (this.length === 0) return this;

    const buckets: { [key: string]: any[] } = {};

    for (const item of this) {
      const key = item.toString();
  
      if (!buckets[key]) {
        buckets[key] = [];
      }
  
      buckets[key].push(item);
    }
  
    const sortedKeys = Object.keys(buckets).sort();
    const sortedArray: any[] = [];
  
    for (const key of sortedKeys) {
      sortedArray.push(...buckets[key]);
    }
  
    return order === "asc" ? sortedArray : sortedArray.reverse();
};

// THIS: only support array of numbers
// the radix sort is not working, it's frezzing the browser
Array.prototype.radixSort = function (this: number[], radix: number = 10, order: SortOrder = "asc") {
    if (this.length === 0) return this;
    if (!this.every(num => typeof num === "number")) throw new Error("radixSort only support array of numbers");
     
    // TODO: fix radix sort

    return this;
};

Array.prototype.shellSort = function (order: SortOrder = "asc") {
    if (this.length === 0) return this;

    for (let gap = Math.floor(this.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < this.length; i++) {
            const temp = this[i];
            let j;
            for (j = i; j >= gap && (order === "asc" ? this[j - gap] > temp : this[j - gap] < temp); j -= gap){
                this[j] = this[j - gap];
            }
            this[j] = temp;
        }
    }
    return this;
};

Array.prototype.chunk = function (size = 1){
    if (size < 1) return this;
    return this.slice(0, Math.ceil(this.length / size)).reduce((acc, _, i) => [...acc, this.slice(size * i, size * i + size)], []);
};

Array.prototype.compact = function (){ 
    if (this.length === 0) return this;
    return this.filter(item => item) 
};

Array.prototype.filterNullish = function (){ 
    if (this.length === 0) return this;
    return this.filter(item => item != null) 
};

Array.prototype.unique = function (){ 
    if (this.length === 0) return this;
    return [...new Set(this)] 
};

Array.prototype.countBy = function (callback){
    if (this.length === 0) return this;
    return this.reduce((acc, val) => {
        const key = callback(val);
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
};

Array.prototype.binarySearch = function (target: any, sortalgo:BinarySortAlgorithms | undefined){
    if (this.length === 0) return -1;    
    // swith between the sort algorithms
    let sortedArray = [];
    switch (sortalgo) {
        case 'bubble':
            sortedArray = this.bubbleSort(); break;
        case 'selection':
            sortedArray = this.selectionSort(); break;
        case 'insertion':
            sortedArray = this.insertionSort(); break;
        case 'merge':
            sortedArray = this.mergeSort(); break;
        case 'quick':
            sortedArray = this.quickSort(); break;
        case 'heap':
            sortedArray = this.heapSort(); break;
        case 'shell':
            sortedArray = this.shellSort(); break;
        case 'bucket':
            sortedArray = this.bucketSort(); break;
        default:
            sortedArray = this.sort(); break;
    }
    // binary search
    let start = 0;
    let end = sortedArray.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (sortedArray[mid] === target) return mid;
        if (sortedArray[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
};

export default Array;