import { HArray, HMath } from "handy-js";

const arr = new HArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(arr.chunk(3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
console.log(arr.shuffle()); // [3, 2, 5, 1, 4, 6, 7, 8, 10, 9]
console.log(arr.shuffle().bubbleSort()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(HMath.randomInt(1, 10));