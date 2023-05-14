/**
 * The capitalize() method capitalizes the first letter of every word in a string.
 * @param {string} str
 * @returns {string}
 * @example
 * capitalize("hello world") // output:"Hello World"
 */
export function capitalize(str) {return str.split(" ").map((word) => {return word[0].toUpperCase() + word.slice(1)}).join(" ");}
