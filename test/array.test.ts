import {describe, expect} from "@jest/globals";
import "../lib/array";

describe("Array methods", () => {
	let arr: number[];

	beforeEach(() => {
		arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
	});

	describe("shuffle", () => {
		it("should shuffle the array", () => {
			const originalArr = [...arr];
			arr.shuffle();
			expect(arr).not.toEqual(originalArr);
		});
	});

	describe("bubbleSort", () => {
		it("should sort the array in ascending order by default", () => {
			arr.bubbleSort();
			expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			arr.bubbleSort("desc");
			expect(arr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("selectionSort", () => {
		it("should sort the array in ascending order by default", () => {
			arr.selectionSort();
			expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			arr.selectionSort("desc");
			expect(arr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("insertionSort", () => {
		it("should sort the array in ascending order by default", () => {
			arr.insertionSort();
			expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			arr.insertionSort("desc");
			expect(arr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("mergeSort", () => {
		it("should sort the array in ascending order by default", () => {
			const sortedArr = arr.mergeSort();
			expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			const sortedArrDesc = arr.mergeSort("desc");
			expect(sortedArrDesc).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("quickSort", () => {
		it("should sort the array in ascending order by default", () => {
			arr.quickSort();
			expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			arr.quickSort("desc");
			expect(arr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("heapSort", () => {
		it("should sort the array in ascending order by default", () => {
			arr.heapSort();
			expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			arr.heapSort("desc");
			expect(arr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("countingSort", () => {
		it("should sort the array in ascending order by default", () => {
			const sortedArr = arr.countingSort();
			expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			const sortedArrDesc = arr.countingSort("desc");
			expect(sortedArrDesc).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("bucketSort", () => {
		it("should sort the array in ascending order by default", () => {
			const sortedArr = arr.bucketSort();
			expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			const sortedArrDesc = arr.bucketSort("desc");
			expect(sortedArrDesc).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("radixSort", () => {
		it("should sort the array in ascending order by default", () => {
			const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
			const sortedArr = arr.radixSort();
			expect(sortedArr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
			const sortedArr = arr.radixSort(undefined, "desc");
			expect(sortedArr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("shellSort", () => {
		it("should sort the array in ascending order by default", () => {
			arr.shellSort();
			expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});

		it("should sort the array in descending order when order is 'desc'", () => {
			arr.shellSort("desc");
			expect(arr).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
		});
	});

	describe("chunk", () => {
		it("should split the array into chunks of the given size", () => {
			const chunks = arr.chunk(3);
			expect(chunks).toEqual([
				[3, 1, 4],
				[1, 5, 9],
				[2, 6, 5],
				[3, 5],
			]);
		});

		it("should split the array into chunks of size 1 by default", () => {
			const chunks = arr.chunk();
			expect(chunks).toEqual([
				[3],
				[1],
				[4],
				[1],
				[5],
				[9],
				[2],
				[6],
				[5],
				[3],
				[5],
			]);
		});
	});

	describe("compact", () => {
		it("should remove all falsy values from the array", () => {
			const arr = [0, 1, false, 2, "", 3, "a", NaN, "s", 34];
			const compactedArr = arr.compact();
			expect(compactedArr).toEqual([1, 2, 3, "a", "s", 34]);
		});
	});

	describe("filterNullish", () => {
		it("should remove all nullish values from the array", () => {
			const arr = [null, undefined, 1, 2, "", 3, "a", NaN, "s", 34];
			const filteredArr = arr.filterNullish();
			expect(filteredArr).toEqual([1, 2, "", 3, "a", NaN, "s", 34]);
		});
	});

	describe("unique", () => {
		it("should remove all duplicates from the array", () => {
			const arr = [1, 2, 3, 2, 4, 5, 3, 6, 1];
			const uniqueArr = arr.unique();
			expect(uniqueArr).toEqual([1, 2, 3, 4, 5, 6]);
		});
	});

	describe("countBy", () => {
		it("should count the occurrences of each element in the array", () => {
			const arr = [1, 2, 3, 4, 5];
			const count = arr.countBy((x) => (x % 2 === 0 ? "even" : "odd"));
			expect(count).toEqual({ odd: 3, even: 2 });
		});
	});

	describe("binarySearch", () => {
		it("should return the index of the target element in the sorted array", () => {
			const arr = [1, 2, 3, 4, 5];
			const index = arr.binarySearch(3);
			expect(index).toEqual(2);
		});

		it("should return -1 if the target element is not found in the sorted array", () => {
			const arr = [1, 2, 3, 4, 5];
			const index = arr.binarySearch(6);
			expect(index).toEqual(-1);
		});

		it("should use the specified sorting algorithm to sort the array before searching", () => {
			const arr = [5, 4, 3, 2, 1];
			const index = arr.binarySearch(3, "bubble");
			expect(index).toEqual(2);
		});
	});

	describe("clear", () => {
		it("should empty the array", () => {
			arr.clear();
			expect(arr).toEqual([]);
		});
	});

	describe("copy", () => {
		it("should return a true copy of the array", () => {
			const copy = arr.copy();
			expect(copy).toEqual(arr);
			expect(copy).not.toBe(arr);
		});
	});

	describe("sample", () => {
		it("should return a random element from the array by default", () => {
			const sample = arr.sample();
			sample.forEach((item) => {
				expect(arr).toContain(item);
			});
		});

		it("should return an array of random elements from the array when quantity is specified", () => {
			const quantity = 3;
			const sample = arr.sample(quantity);
			expect(sample.length).toEqual(quantity);
			sample.forEach((item) => {
				expect(arr).toContain(item);
			});
		});

		it("should return a random element from the array when quantity is negative (-x)", () => {
			const sample = arr.sample(-3);
			sample.forEach((item) => {
				expect(arr).toContain(item);
			});
		});
	});

	describe("count", () => {
		it("should count the occurrences of a value in the array", () => {
			const arr = [1, 2, 3, 2, 4, 5, 3, 6, 1];
			const count = arr.count(3);
			expect(count).toEqual(2);
		});
	});

	describe("differ", () => {
		it("should return the difference between two arrays in a new array", () => {
			const arr1 = [1, 2, 3, 4, 5];
			const arr2 = [3, 4, 5, 6, 7];
			const diff = arr1.differ(arr2);
			expect(diff).toEqual([1, 2]);
		});
	});
});