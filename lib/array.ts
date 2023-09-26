/// ------------------------------- HANDY ARRAYS © HandyScript 5m/21d/23y -------------------------------
/**
 * This file contains extensions to the built-in Array object in TypeScript.
 * It provides various sorting algorithms, array manipulation methods, and utility functions.
 * @packageDocumentation
 */

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
		| "radix" //it supports only numbers
		| "counting" //it supports only numbers
		| "bucket"
		| "shell";

	/**
	 * `SortOrder` is a type that represents the sorting order.
	 */
	type SortOrder = "asc" | "desc";

  /**
   * `ComparableData` is a type that represents the comparable data.
   */
  type ComparableData = number | string | boolean | Date;

	interface Array<T> {
		/**
		 * shuffles the elements in the given array in a random order.
		 */
		shuffle(): T[];

		/**
		 * Sort the array using the [`Bubble Sort`](https://www.programiz.com/dsa/bubble-sort) algorithm.
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		bubbleSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;

		/**
		 * Sort the array using the [`Selection Sort`](https://www.programiz.com/dsa/selection-sort) algorithm.
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		selectionSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;

		/**
		 * Sort the array using the [`Insertion Sort`](https://www.programiz.com/dsa/insertion-sort) algorithm.
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		insertionSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;

		/**
		 * Sort the array using the [`Merge Sort`](https://www.programiz.com/dsa/merge-sort) algorithm.
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		mergeSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;

		/**
		 * Sort the array using the [`Quick Sort`](https://www.programiz.com/dsa/quick-sort) algorithm.
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		quickSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;

		/**
		 * Sort the array using the [`Heap Sort`](https://www.programiz.com/dsa/heap-sort) algorithm.
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		heapSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;

		/**
		 * Sort the array using the [`Counting Sort`](https://www.programiz.com/dsa/counting-sort) algorithm.
     **  @note it supports only numbers
		 * @param {string} order the order of the sorting: "asc" or "desc"
		 */
		countingSort(this: number[], order?: SortOrder): number[];

		/**
		 * Sort the array using the [`Bucket Sort`](https://www.programiz.com/dsa/bucket-sort) algorithm.
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		bucketSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;

		/**
		 * Sort or descending order using by default it will sort the array in ascending order.
     **  @note it supports only numbers
		 * @param {number} radix // the radix base to be used wish sorting the array `(default: 10)`
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		radixSort(this: number[], radix?: number, order?: SortOrder): number[];

		/**
		 * Sort the array using the [`Shell Sort`](https://www.programiz.com/dsa/shell-sort) algorithm.
		 * @param {string} order // the order of the sorting: "asc" or "desc"
		 */
		shellSort(this: ComparableData[], order?: SortOrder): Array<ComparableData>;

		/**
		 * splits an array into chunks of the given size.
		 * @param {number} size // the size of the chunk to be used wish splitting the array `(default: 1)`
		 */
		chunk(size?: number): T[][];

		/**
		 * removes all falsy values from an array.
		 * @example
		 * const arr = [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34];
		 * arr.compact() // [1, 2, 3, "a", "s", 34]
		 */
		compact(): T[];

		/**
		 * removes all nullish `null` values from an array.
		 */
		filterNullish(): T[];

		/**
		 * removes all duplicates from an array.
		 */
		unique(): T[];

		/**
		 * counts the occurrences of each element in an array.
		 * @param {CallableFunction} callback
		 * @example
		 * const arr = [1, 2, 3, 4, 5];
		 * arr.countBy(x => x % 2 === 0 ? 'even' : 'odd') // { odd: 3, even: 2 }
		 */
		countBy(callback: (item: T) => string): Record<string, number>;

		/**
		 * searches an array for the specified item using the binary search algorithm and returns its index. otherwise, returns -1.
		 * @param {T} target // the target to be searched for
		 * @param {BinarySortAlgorithms | undefined} sortalgo the sort algorithm to be used in sorting the array before searching
		 */
		binarySearch(this: ComparableData[], target: ComparableData, sortalgo?: BinarySortAlgorithms): number;

		/**
		 * empties the array.
		 */
		clear(): void;

		/**
		 * return a true copy of the array.
		 */
		copy(): T[];

		/**
		 * return a random element or an array of random elements from the array based on the given quantity.
		 * @param {number} quantity the quantity of the random elements (default: 1)
		 */
		sample(quantity?: number): T | T[];

		/**
		 * count the occurrences of a value in an array.
		 * @param {T} target the target to be searched for
		 */
		count<T>(target: T): number;

		/**
		 * return the difference between two arrays in a new array.
		 */
		differ(other: unknown[]): unknown[];
	}
}

/**
 * creates an array of numbers in the given range.
 */
export function range(end: number, start = 0, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, i) => start + i * step);
}

Array.prototype.shuffle = function () {
  if (this.length === 0) return this;

  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

Array.prototype.bubbleSort = function (this: ComparableData[], order: SortOrder = "asc"): Array<ComparableData> {
  if (this.length === 0) return this;
  // check if the array is array of `ComparableData`
  if (!this.every((item) => typeof item === "number" || typeof item === "string" || typeof item === "boolean" || item instanceof Date)){
    throw new Error("bubbleSort only support array of `ComparableData`: number, string, boolean, Date");
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      const a = this[j] as ComparableData; // Type assertion to ensure that a is not null or undefined
      const b = this[j + 1] as ComparableData; // Type assertion to ensure that b is not null or undefined

      if (a !== undefined && b !== undefined && (order === "asc" ? a > b : a < b)) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
  return this;
};

Array.prototype.selectionSort = function (this: ComparableData[], order: SortOrder = "asc"): Array<ComparableData> {
  if (this.length === 0) return this;
  // check if the array is array of `ComparableData`
  if (!this.every((item) => typeof item === "number" || typeof item === "string" || typeof item === "boolean" || item instanceof Date)){
    throw new Error("selectionSort only support array of `ComparableData`: number, string, boolean, Date");
  }

  for (let i = 0; i < this.length; i++) {
    let min = i;
    for (let j = i + 1; j < this.length; j++) {
      if (order === "asc" ? this[j] < this[min] : this[j] > this[min]) min = j;
    }
    if (min !== i) [this[i], this[min]] = [this[min], this[i]];
  }
  return this;
};

Array.prototype.insertionSort = function (this: ComparableData[], order: SortOrder = "asc"): Array<ComparableData> {
  if (this.length === 0) return this;
  // check if the array is array of `ComparableData`
  if (!this.every((item) => typeof item === "number" || typeof item === "string" || typeof item === "boolean" || item instanceof Date)){
    throw new Error("insertionSort only support array of `ComparableData`: number, string, boolean, Date");
  }

  for (let i = 1; i < this.length; i++) {
    let j = i - 1;
    const temp = this[i];
    while (j >= 0 && (order === "asc" ? this[j] > temp : this[j] < temp)) {
      this[j + 1] = this[j];
      j--;
    }
    this[j + 1] = temp;
  }
  return this;
};

Array.prototype.mergeSort = function (this: ComparableData[], order: SortOrder = "asc"): Array<ComparableData> {
  if (this.length === 0) return this;
  // check if the array is array of `ComparableData`
  if (!this.every((item) => typeof item === "number" || typeof item === "string" || typeof item === "boolean" || item instanceof Date)){
    throw new Error("mergeSort only support array of `ComparableData`: number, string, boolean, Date");
  }

  const merge = (left: ComparableData[], right: ComparableData[]): ComparableData[] => {
    const result: ComparableData[] = [];
    while (left.length && right.length) {
      if (order === "asc" ? left[0] <= right[0] : left[0] >= right[0]) {
        result.push(left.shift() as ComparableData);
      } else {
        result.push(right.shift() as ComparableData);
      }
    }
    while (left.length) result.push(left.shift() as ComparableData);
    while (right.length) result.push(right.shift() as ComparableData);
    return result;
  };

  if (this.length < 2) return this.slice() as ComparableData[];
  const middle = Math.floor(this.length / 2);
  const left = this.slice(0, middle) as ComparableData[];
  const right = this.slice(middle, this.length) as ComparableData[];
  return merge(left.mergeSort(order), right.mergeSort(order));
};

Array.prototype.quickSort = function (this: ComparableData[], order: SortOrder = "asc"): Array<ComparableData> {
  if (this.length === 0) return this;
  // check if the array is array of `ComparableData`
  if (!this.every((item) => typeof item === "number" || typeof item === "string" || typeof item === "boolean" || item instanceof Date)){
    throw new Error("quickSort only support array of `ComparableData`: number, string, boolean, Date");
  }

  const partition = (arr: ComparableData[], left: number, right: number): number => {
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
  };

  const quickSortRecursion = (arr: ComparableData[], left: number, right: number) => {
    if (left < right) {
      const index = partition(arr, left, right);
      if (left < index - 1) quickSortRecursion(arr, left, index - 1);
      if (index < right) quickSortRecursion(arr, index, right);
    }
  };

  quickSortRecursion(this, 0, this.length - 1);
  return this;
};

Array.prototype.heapSort = function (this: ComparableData[], order: SortOrder = "asc"): Array<ComparableData> {
  if (this.length === 0) return this;
  // check if the array is array of `ComparableData`
  if (!this.every((item) => typeof item === "number" || typeof item === "string" || typeof item === "boolean" || item instanceof Date)){
    throw new Error("heapSort only support array of `ComparableData`: number, string, boolean, Date");
  }

  const heapify = (arr: ComparableData[], length: number, i: number) => {
    let largest = i;
    const left = i * 2 + 1;
    const right = left + 1;
    if (
      left < length &&
      (order === "asc" ? arr[left] > arr[largest] : arr[left] < arr[largest])
    )
      largest = left;
    if (
      right < length &&
      (order === "asc" ? arr[right] > arr[largest] : arr[right] < arr[largest])
    )
      largest = right;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, length, largest);
    }
  };

  const buildMaxHeap = (arr: ComparableData[]) => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) heapify(arr, arr.length, i);
    return arr;
  };

  buildMaxHeap(this);
  for (let i = this.length - 1; i > 0; i--) {
    [this[0], this[i]] = [this[i], this[0]];
    heapify(this, i, 0);
  }
  return this;
};

// THIS: only support array of numbers
Array.prototype.countingSort = function (this: number[], order: SortOrder = "asc"): number[] {
  if (this.length === 0) return this;
  if (!this.every((num) => typeof num === "number")){
    throw new Error("countingSort only support array of numbers");
  }

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

Array.prototype.bucketSort = function (this: ComparableData[], order: SortOrder = "asc"): Array<ComparableData> {
  if (this.length === 0) return this;

  const buckets: { [key: string]: ComparableData[] } = {};

  for (const item of this) {
    const key = item.toString();

    if (!buckets[key]) {
      buckets[key] = [];
    }

    buckets[key].push(item);
  }

  const sortedKeys = Object.keys(buckets).sort();
  const sortedArray: ComparableData[] = [];

  for (const key of sortedKeys) {
    sortedArray.push(...buckets[key]);
  }

  return order === "asc" ? sortedArray : sortedArray.reverse();
};

// THIS: only support array of numbers
// the radix sort is not working, it's frezzing the browser
Array.prototype.radixSort = function (this: number[], radix = 10, order: SortOrder = "asc"): number[] {
  if (this.length === 0) return this;
  if (!this.every((num) => typeof num === "number")) {
    throw new Error("radixSort only supports arrays of numbers");
  }

  const countingSort = (arr: number[], exp: number) => {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(radix).fill(0);

    for (let i = 0; i < n; i++) {
      const index = Math.floor(arr[i] / exp) % radix;
      count[index]++;
    }

    for (let i = 1; i < radix; i++) {
      count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      const index = Math.floor(arr[i] / exp) % radix;
      output[count[index] - 1] = arr[i];
      count[index]--;
    }

    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
  };

  const max = Math.max(...this);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= radix) {
    countingSort(this, exp);
  }

  if (order === "desc") {
    return this.reverse();
  }

  return this;
};


Array.prototype.shellSort = function (this: ComparableData[], order: SortOrder = "asc"): Array<ComparableData> {
  if (this.length === 0) return this;
  // check if the array is array of `ComparableData`
  if (!this.every((item) => typeof item === "number" || typeof item === "string" || typeof item === "boolean" || item instanceof Date)){
    throw new Error("shellSort only support array of `ComparableData`: number, string, boolean, Date");
  }

  for (
    let gap = Math.floor(this.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < this.length; i++) {
      const temp: ComparableData = this[i];
      let j;
      for (j = i; j >= gap && (order === "asc" ? this[j - gap] > temp : this[j - gap] < temp); j -= gap) {
        this[j] = this[j - gap];
      }
      this[j] = temp;
    }
  }
  return this;
};

Array.prototype.chunk = function (size = 1) {
  if (size < 1) return this;
  return this.slice(0, Math.ceil(this.length / size)).reduce(
    (acc, _, i) => [...acc, this.slice(size * i, size * i + size)],
    []
  );
};

Array.prototype.compact = function () {
  if (this.length === 0) return this;
  return this.filter((item) => item);
};

Array.prototype.filterNullish = function () {
  if (this.length === 0) return this;
  return this.filter((item) => item != null);
};

Array.prototype.unique = function () {
  if (this.length === 0) return this;
  // check if the array is array of strings
  if (this.every((item) => typeof item === "string")) return [...new Set(this.map((item) => item.toLowerCase()))];
  return [...new Set(this)];
};

Array.prototype.countBy = function (callback) {
  if (this.length === 0) return this;
  return this.reduce((acc, val) => {
    const key = callback(val);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};

Array.prototype.binarySearch = function (this: ComparableData[], target: ComparableData, sortalgo?: BinarySortAlgorithms): number{
  if (this.length === 0) return -1;
  // check if the array is array of `ComparableData`
  if (!this.every((item) => typeof item === "number" || typeof item === "string" || typeof item === "boolean" || item instanceof Date)){
    throw new Error("binarySearch only support array of `ComparableData`: number, string, boolean, Date");
  }

  // Switch between the sort algorithms
  let sortedArray: ComparableData[] = [];

  switch (sortalgo) {
    case "bubble":
      sortedArray = this.bubbleSort();
      break;
    case "selection":
      sortedArray = this.selectionSort();
      break;
    case "insertion":
      sortedArray = this.insertionSort();
      break;
    case "merge":
      sortedArray = this.mergeSort();
      break;
    case "quick":
      sortedArray = this.quickSort();
      break;
    case "heap":
      sortedArray = this.heapSort();
      break;
    case "shell":
      sortedArray = this.shellSort();
      break;
    case "bucket":
      sortedArray = this.bucketSort();
      break;
    case "counting":
      if (!this.every((num) => typeof num === "number")) {
        throw new Error("Counting Algorithm supports only arrays of numbers");
      }
      sortedArray = this.map(num => num as number).countingSort();
      break;
    case "radix":
      if (!this.every((num) => typeof num === "number")) {
        throw new Error("Radix Algorithm supports only arrays of numbers");
      }
      sortedArray = this.map(num => num as number).radixSort();
      break;
    default:
      sortedArray = this.sort() as ComparableData[]; // Add type assertion here
      break;
  }

  // Binary search
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // Use a type guard to check the type of `target`
    if (typeof sortedArray[mid] === typeof target) {
      const comparison = sortedArray[mid] < target ? -1 : sortedArray[mid] > target ? 1 : 0;
      if (comparison === 0) return mid;
      if (comparison < 0) start = mid + 1;
      else end = mid - 1;
    } else {
      // Handle type mismatch
      return -1;
    }
  }

  return -1;
};

Array.prototype.clear = function () {
  if (this.length === 0) return this;
  this.length = 0;
  return this;
};

Array.prototype.copy = function () {
  if (this.length === 0) return this;
  return [...this];
};

Array.prototype.sample = function (quantity = 1) {
  if (this.length === 0) return this;
  if (quantity <= 1 || quantity > this.length) return this[Math.randomInt(this.length)];
  return this.sort(() => Math.random() - Math.random()).slice(0, quantity);
};

Array.prototype.count = function <T>(target: T) {
  if (this.length === 0) return 0;
  return this.filter((item) => item === target).length;
};

Array.prototype.differ = function (other: unknown[]) {
  if (this.length === 0) return this;
  return this.filter((item) => !other.includes(item));
};

export default Array;