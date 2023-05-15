/**
 * The capitalize() method capitalizes the first letter of every word in a string.
 * @param {string} str
 * @returns {string}
 * @example
 * capitalize("hello world") // output:"Hello World"
 */
export function capitalize(str) {return str.split(" ").map((word) => {return word[0].toUpperCase() + word.slice(1)}).join(" ");}

/**
 * The elementTags() method return array of all HTML tags in string.
 * @param {string} str
 * @returns {Array}
 * @example
 * elementTags("<div><p>Hello World!</p></div>") // output:["<div>","<p>"]
 * @Note
 * will not return any tag starts with "</"
 * @Tip
 * elementTags(element.innerHTML)
 */
export function elementTags(str) {return str.match(/<[a-zA-Z1-9]{1,}>/g) || [];}

/**
 * The reverse() method reverses a string.
 * @param {string} str
 * @returns {string}
 * @example
 * reverse("Hello, world!") // output:"!dlrow ,olleH"
 */
export function reverse(str) {return str.split("").reverse().join("");}