/// ------------------------------- HANDY STRING © HandyScript 5m/21d/23y -------------------------------

import "./math";

declare global {
	interface String {
		/**
		 * capitalizes the first letter of every word in a string.
		 */
		toCapitalCase(): string;

		/**
		 * capitalizes the first letter of every word in a string according to any locale-specific case mappings in effect at the time.
		 * @param {string | string[]} [locales] A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation) page.
		 * @example
		 * "ßver ßee".toLocaleCapitalCase() // output:"SSver SSee"
		 */
		toLocaleCapitalCase(locales?: string | string[] | undefined): string;

		/**
		 * capitalizes the first letter of every word starting with the second word in a string and removes all the spaces.
		 * @example
		 * "hello world".toCamelCase() // output:"helloWorld"
		 */
		toCamelCase(): string;

		/**
		 * capitalizes the first letter of every word in a string and removes all the spaces according to any locale-specific case mappings in effect at the time.
		 * @param {string | string[]} [locales] A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation) page.
		 * @example
		 * "ßver ßee".toLocaleCamelCase() // output:"ßverSSee"
		 */
		toLocaleCamelCase(locales?: string | string[] | undefined): string;

		/**
		 * reverse a string and string of special characters. like emojis, diacritics, and other grapheme clusters.
		 */
		reverse(): string;

		/**
		 * Returns the positions of the all occurrence of a substring.
		 * @param {string} target — The substring to search for in the string
		 * @param {number} startPosition — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
		 */
		indexesOf(target: string, startPosition?: number): number[];

		/**
		 * Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
		 * @param {string} target The string against which the referring string is comparing.
		 */
		compare(target: string): number;

		/**
		 * escape a string from all white spaces and all control characters (characters with a `code point < U+0020`).
		 * @param {boolean} [isForHTML] If true, escape the string for use in HTML attribute.
		 */
		escape(isForHTML?: boolean): string;

		/**
		 * return a sample of words from a string.
		 * @param {number} [wordCount] The number of words to get from the string.
		 */
		sample(wordCount?: number): string;

		/**
		 * return the number of words in a string.
		 * @param {string | RegExp} [separator] Specifies the character to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted, the array returned contains one element consisting of the entire string.
		 */
		size(separator?: string | RegExp): number;
	}
}

String.prototype.toCapitalCase = function (this: string) {
	return this.split(" ").map((word: string) => {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}).join(" ");
};

String.prototype.toLocaleCapitalCase = function (this: string, locales?: string | string[] | undefined) {
	return this.split(" ").map((word: string) => {
		return word[0].toLocaleUpperCase(locales) + word.slice(1).toLocaleLowerCase(locales);
	}).join(" ");
};

String.prototype.toCamelCase = function (this: string) {
	return this.split(" ").map((word: string, index: number) => {
		return index === 0 ? word[0].toLowerCase() + word.slice(1) : word[0].toUpperCase() + word.slice(1);
	}).join("");
};

String.prototype.toLocaleCamelCase = function (this: string, locales?: string | string[] | undefined) {
	return this.split(" ").map((word: string, index: number) => {
		return index === 0 ? word[0].toLocaleLowerCase(locales) + word.slice(1) : word[0].toLocaleUpperCase(locales) + word.slice(1);
	}).join("");
};

String.prototype.reverse = function (this: string) {
	return [...this].reverse().join("");
};

String.prototype.indexesOf = function (this: string, target: string, startPosition?: number | undefined) {
	const indexes: number[] = [];
	let index = this.indexOf(target, startPosition);
	while (index !== -1) {
		indexes.push(index);
		index = this.indexOf(target, index + 1);
	}
	return indexes;
};

String.prototype.compare = function (this: string, target: string) {
	return this.localeCompare(target);
};

String.prototype.escape = function (this: string, isForHTML = false) {
	let escapedString = isForHTML ? this.replace(/"/g, "&quot;") : this;

	escapedString = escapedString
		.replace(/[\n\r\t\v\f\b]/g, "")
		.replace(/\s+/g, " ")
	// eslint-disable-next-line no-control-regex
		.replace(/[\u0000-\u001F]/g, "");

	return escapedString;
};

String.prototype.sample = function (this: string, wordCount = 1, separator: string | RegExp = " ") {
	const words: Array<string> = [];
	[...this.trim().split(separator)].forEach((word: string) => {
		if (words.length < wordCount) {
			words.push(word);
		}
	});
	return words.join(separator as string);
};

String.prototype.size = function (this: string, separator: string | RegExp = " ") {
	return this.split(separator).length;
};

export default String;
