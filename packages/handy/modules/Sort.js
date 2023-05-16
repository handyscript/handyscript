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
export default class Sort {
    
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
        const max = Math.max(...this.sorted);
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
