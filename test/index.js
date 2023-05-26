// start importing all your test files here
// NOTE: this file is linked to the index.html file

// 1. install handy via : npm i @handy.js/handy
// 2. or link the package locally by going to the package directory and running : npm link
// then run : npm link @handy.js/handy

import "@handy.js/handy";
import { HOperators } from "@handy.js/handy";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.shuffle());