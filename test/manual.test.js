import "../dist/hs.min.js";

// const date = new Date(2022, 2, 1); // january 1st 2022
// console.log("daysInMonth", date.daysInMonth()); // 28
// console.log("daysInYear", date.daysInYear()); // 365
// console.log("isLeapYear", date.isLeapYear()); // false
// console.log("getMonth", new Date().getMonth() + 1); // false

const str = "hello world!";
const str2 = "ßver ßee";
const str3 = "συγγραφέας";
console.log(str.equals("hello", 0)); // false
console.log(str); // false
console.log([...str].slice(0).join("")); // false
console.log([..."hello"].slice(0).join("")); // false

// const arr = [1, 2, 3, 4, 5];
// const simple = arr.sample(3); // [3, 1, 5]
// console.log(simple.length);
