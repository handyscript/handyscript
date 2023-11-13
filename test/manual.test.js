import "../dist/hs.min.js";

console.log("RUNNING MANUAL TESTS");

// const date = new Date(2022, 2, 1); // january 1st 2022
// console.log("daysInMonth", date.daysInMonth()); // 28
// console.log("daysInYear", date.daysInYear()); // 365
// console.log("isLeapYear", date.isLeapYear()); // false
// console.log("getMonth", new Date().getMonth() + 1); // false

const sample1 = " hello world".sample();
const sample2 = "hello world".sample(2);
const sample3 = " hello world ".sample(3);
const sample4 = "hello world ".sample(1);

// console.log("test", "hello world".sample(1).split(" "));
// console.log("test", "hello world".split(" ").slice(0, 1));
// console.log("test", "hello world".split(" ").slice(0, 1).join(" "));

console.log("sample1", sample1, sample1.split(" ").length); // 1
console.log("sample2", sample2, sample2.split(" ").length); // 1
console.log("sample3", sample3, sample3.split(" ").length); // 3
console.log("sample4", sample4, sample4.split(" ").length); // 3

// console.log("native sample:", sample1, sample1.split(" ").slice(0, 2).join(" ")); // 1

// console.log(); // false
// console.log(); // false
// console.log(); // false

// const arr = [1, 2, 3, 4, 5];
// const simple = arr.sample(3); // [3, 1, 5]
// console.log(simple.length);
