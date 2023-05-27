//// STRING - HANDY-JS: STRING METHODS --------------------------------------------
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
         * "ßver ßee".toLocaleCamelCase() // output:"SSverSSee"
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
         * Returns true if the sequence of elements of searchString converted to a String 
         * is the same as the corresponding elements of this object (converted to a String)
         * starting at position. Otherwise returns false.
         * @param {string} target The string against which the referring string is comparing.
         * @param {number} position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
         */
        equals(target: string, position?: number): boolean;

        /**
         * Returns true if the sequence of elements of searchString converted to a String
         * is the same as the corresponding elements of this object (converted to a String) regardless of their casing,
         * starting at position. Otherwise returns false.
         * @param {string} target The string against which the referring string is comparing.
         * @param {number} position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
         */
        equalsIgnoreCase(target: string, position?: number, locales?: string | string[] | undefined): boolean;
    }
}


String.prototype.toCapitalCase = function () {
    return  this.split(" ").map( (word:string) => { return word[0].toUpperCase() + word.slice(1)}).join(" ") 
}

String.prototype.toLocaleCapitalCase = function (locales?: string | string[] | undefined) {
    return  this.split(" ").map( (word:string) => { return word[0].toLocaleUpperCase(locales) + word.slice(1)}).join(" ") 
}

String.prototype.toCamelCase = function () { 
    return  this.split(" ").map( (word:string, index:number) => { return index === 0 ? word[0].toLowerCase() + word.slice(1) : word[0].toUpperCase() + word.slice(1)}).join("") 
}

String.prototype.toLocaleCamelCase = function (locales?: string | string[] | undefined) {
    return  this.split(" ").map( (word:string, index:number) => { return index === 0 ? word[0].toLocaleLowerCase(locales) + word.slice(1) : word[0].toLocaleUpperCase(locales) + word.slice(1)}).join("")
}

String.prototype.reverse = function () {
    return [...this].reverse().join("");
}

String.prototype.indexesOf = function (target: string, startPosition?: number | undefined) {
    let indexes: number[] = [];
    let index = this.indexOf(target, startPosition);
    while (index !== -1) {
        indexes.push(index);
        index = this.indexOf(target, index + 1);
    }
    return indexes;
};

String.prototype.compare = function (target: string) {
    return this.localeCompare(target);
};

String.prototype.equals = function (target: string, position: number = 0) {
    return [...this].splice(position).join("") === [...target].splice(position).join("");
};

String.prototype.equalsIgnoreCase = function (target: string, position: number = 0, locales?: string | string[] | undefined) {
    return [...this.toLocaleLowerCase(locales)].splice(position).join("") === [...target.toLocaleLowerCase(locales)].splice(position).join("");
};

export default String;
