//// STRING - HANDY-JS: STRING METHODS --------------------------------------------

/**
 * @namespace HString
 * @extends String
 * @description
 * This namespace contains methods that work on strings.
 * @example
 * // 1
 * import { HString } from "handy-js";
 * HString.capitalize("hello world") // output:"Hello World"
 * // 2
 * import HString from "handy-js/string";
 * HString.capitalize("hello world") // output:"Hello World"
 */
export default class HString extends String {
    constructor(str) { super(str) }

    /**
     * The `toCapitalCase()` method capitalizes the first letter of every word in a string.
     * @method capitalize
     * @returns {HString}
     * @example
     * "hello world".toCapitalCase() // output:"Hello World"
     */
    toCapitalCase() { return new HString( this.split(" ").map((word) => {return word[0].toUpperCase() + word.slice(1)}).join(" ") )}

    /**
     * The `toLocaleCapitalCase()` method capitalizes the first letter of every word in a string.
     * @method toLocaleCapitalCase
     * @returns {HString}
     * @example
     * "hello world".toLocaleCapitalCase() // output:"Hello World"
     */
    toLocaleCapitalCase() { return new HString( this.split(" ").map((word) => {return word[0].toLocaleUpperCase() + word.slice(1)}).join(" ") )}

    /**
     * The `reverse()` method reverses a string.
     * @method reverse
     * @returns {HString}
     * @example
     * "Hello, world!".reverse() // output:"!dlrow ,olleH"
     * @Note
     * this method is not the same as `String.prototype.reverse()`
     * @Tip
     * "Hello, world!".split("").reverse().join("") // output:"!dlrow ,olleH"
     * @see
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/reverse
     */
    reverse() { return new HString(this.split("").reverse().join("")) };

    /**
     * The `innerTags()` method returns an array of all the XML/HTML tags inside a string.
     * @param {string} str
     * @returns {Array}
     * @example
     * "<div><p>Hello World!</p></div>".innerTags() // output:["<div>", "<p>"]
     * HString("<div><p>Hello World!</p></div>").innerTags() // output:["<div>", "<p>"]
     * @Note
     * will not return any XML/HTML tag starts with `</`
     * @Tip
     * "<h1>Hello World!</h1>".innerTags() // output:["<h1>"]
     */
    innerTags() {return this.match(/<[a-zA-Z1-9]{1,}>/g) || [];}

}

// the major difference between this and the original String class is that this class is mutable
// and the original String class is immutable

// to make this class immutable, we can use Object.freeze() method
// Object.freeze(HString.prototype);
// Object.freeze(HString); it is not necessary to freeze the class itself
// 

// the diffrence between Object.freeze() and Object.seal() is that Object.freeze() makes the object immutable
// and Object.seal() makes the object non-extensible

// the deffrance between immutable and mutable is that immutable objects can not be changed
