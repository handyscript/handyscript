import {describe, expect} from "@jest/globals";
import "../lib/string";

describe("String methods", () => {
	describe("toCapitalCase", () => {
		it("should capitalize the first letter of every word in a string", () => {
			expect("hello world".toCapitalCase()).toEqual("Hello World");
			expect("the quick brown fox".toCapitalCase()).toEqual("The Quick Brown Fox");
		});
	});

	describe("toLocaleCapitalCase", () => {
		it("should capitalize the first letter of every word in a string according to any locale-specific case mappings in effect at the time", () => {
			expect("ßver ßee".toLocaleCapitalCase()).toEqual("SSver SSee");
			expect("συγγραφέας".toLocaleCapitalCase("el")).toEqual("Συγγραφέας");
		});
	});

	describe("toCamelCase", () => {
		it("should capitalize the first letter of every word starting with the second word in a string and remove all the spaces", () => {
			expect("hello world".toCamelCase()).toEqual("helloWorld");
			expect("the quick brown fox".toCamelCase()).toEqual("theQuickBrownFox");
		});
	});

	describe("toLocaleCamelCase", () => {
		it("should capitalize the first letter of every word in a string and remove all the spaces according to any locale-specific case mappings in effect at the time", () => {
			expect("ßver ßee".toLocaleCamelCase()).toEqual("SSverSSee");
			expect("συγγραφέας".toLocaleCamelCase("el")).toEqual("Συγγραφέας");
		});
	});

	describe("reverse", () => {
		it("should reverse a string and string of special characters like emojis, diacritics, and other grapheme clusters", () => {
			expect("hello world".reverse()).toEqual("dlrow olleh");
			expect("👋🏽🌍".reverse()).toEqual("🌍🏽👋");
		});
	});

	describe("indexesOf", () => {
		it("should return the positions of all occurrences of a substring", () => {
			expect("hello world".indexesOf("o")).toEqual([4, 7]);
			expect("hello world".indexesOf("l", 3)).toEqual([3, 9]);
		});
	});

	describe("compare", () => {
		it("should return a number indicating whether a reference string comes before, after, or is the same as the given string in sort order", () => {
			expect("hello".compare("world")).toBeLessThan(0);
			expect("world".compare("hello")).toBeGreaterThan(0);
			expect("hello".compare("hello")).toEqual(0);
		});
	});

	describe("equals", () => {
		it("should return true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position", () => {
			expect("hello world".equals("hello", 0)).toEqual(true);
			expect("hello world".equals("world", 6)).toEqual(true);
			expect("hello world".equals("world", 0)).toEqual(false);
		});
	});

	describe("equalsIgnoreCase", () => {
		it("should return true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) regardless of their casing, starting at position", () => {
			expect("hello world".equalsIgnoreCase("HELLO", 0)).toEqual(true);
			expect("hello world".equalsIgnoreCase("WORLD", 6)).toEqual(true);
			expect("hello world".equalsIgnoreCase("WORLD", 0)).toEqual(false);
		});
	});

	describe("escape", () => {
		it("should escape a string from all white spaces and all control characters (characters with a code point < U+0020)", () => {
			expect("hello world".escape()).toEqual("helloworld");
			expect("hello\nworld".escape()).toEqual("helloworld");
			expect("hello\tworld".escape()).toEqual("helloworld");
			expect("hello\rworld".escape()).toEqual("helloworld");
		});

		it("should escape a string for use in HTML attribute if isForAttribute is true", () => {
			expect("hello world".escape(true)).toEqual("helloworld");
			expect("hello\"world\"".escape(true)).toEqual("hello&quot;world&quot;");
			expect("hello'world'".escape(true)).toEqual("hello&#x27;world&#x27;");
		});
	});

	describe("sample", () => {
		it("should return a sample of words from a string", () => {
			expect("hello world".sample(2)).toEqual("hello world");
			expect("the quick brown fox".sample(3)).toEqual("the quick brown");
		});

		it("should return the entire string if wordCount is not specified", () => {
			expect("hello world".sample()).toEqual("hello world");
			expect("the quick brown fox".sample()).toEqual("the quick brown fox");
		});
	});

	describe("size", () => {
		it("should return the number of words in a string", () => {
			expect("hello world".size()).toEqual(2);
			expect("the quick brown fox".size()).toEqual(4);
		});

		it("should use the specified separator to split the string into words if separator is provided", () => {
			expect("hello,world".size(",")).toEqual(2);
			expect("the|quick|brown|fox".size("|")).toEqual(4);
		});
	});
});