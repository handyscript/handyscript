import { describe, expect } from "@jest/globals";
import "../lib/string";

describe("String methods", () => {
	describe("toCapitalCase", () => {
		it("should capitalize the first letter of every word in a string", () => {
			expect("hello world".toCapitalCase()).toBe("Hello World");
			expect("the quick brown fox".toCapitalCase()).toBe("The Quick Brown Fox");
		});
	});

	describe("toLocaleCapitalCase", () => {
		it("should capitalize the first letter of every word in a string according to any locale-specific case mappings in effect at the time", () => {
			expect("ßver ßee".toLocaleCapitalCase()).toBe("SSver SSee");
			expect("ΣΣΣ".toLocaleCapitalCase("el")).toBe("Σσς");
		});
	});

	describe("toCamelCase", () => {
		it("should capitalize the first letter of every word starting with the second word in a string and remove all the spaces", () => {
			expect("hello world".toCamelCase()).toBe("helloWorld");
			expect("the quick brown fox".toCamelCase()).toBe("theQuickBrownFox");
		});
	});

	describe("toLocaleCamelCase", () => {
		it("should capitalize the first letter of every word in a string and remove all the spaces according to any locale-specific case mappings in effect at the time", () => {
			expect("ßver ßee".toLocaleCamelCase()).toBe("ßverSSee");
			expect("ΣΣΣ".toLocaleCamelCase("el")).toBe("σΣΣ");
		});
	});

	describe("reverse", () => {
		it("should reverse a string and string of special characters like emojis, diacritics, and other grapheme clusters", () => {
			expect("hello world".reverse()).toBe("dlrow olleh");
			expect("👋🏽🌍".reverse()).toBe("🌍🏽👋");
		});
	});

	describe("indexesOf", () => {
		it("should return the positions of all occurrences of a substring", () => {
			expect("hello world".indexesOf("o")).toEqual([4, 7]);
			expect("hello world".indexesOf("l", 3)).toEqual([3, 9]);
		});
	});

	describe("compare", () => {
		it("should return a number indicating whether a reference string comes before or after or is the same as the given string in sort order", () => {
			expect("hello world".compare("hello world")).toBe(0);
			expect("hello world".compare("goodbye")).toBeGreaterThan(0);
			expect("hello world".compare("zoo")).toBeLessThan(0);
		});
	});

	describe("escape", () => {
		it("should escape a string from all white spaces and all control characters (characters with a `code point < U+0020`)", () => {
			expect("hello\nworld".escape()).toBe("helloworld");
			expect("hello\tworld".escape()).toBe("helloworld");
			expect("hello\fworld".escape()).toBe("helloworld");
			expect("hello\vworld".escape()).toBe("helloworld");
			expect("hello\bworld".escape()).toBe("helloworld");
			expect("\"hello\"".escape(true)).toBe("&quot;hello&quot;");
		});
	});

	describe("sample", () => {
		it("should return a sample of words from a string", () => {
			const sample1 = " hello world".sample();
			const sample2 = "hello world".sample(1);
			const sample3 = "hello world".sample(2);
			const sample4 = " hello world ".sample(3);

			// Check if the samples contain words
			expect(sample1.split(" ")).toHaveLength(1);
			expect(sample2.split(" ")).toHaveLength(1);
			expect(sample3.split(" ")).toHaveLength(2);
			expect(sample4.split(" ")).toHaveLength(2);
		});
	});

	describe("size", () => {
		it("should return the number of words in a string", () => {
			expect("hello world".size()).toBe(2);
			expect("hello world".size("-")).toBe(1);
			expect("hello-world".size("-")).toBe(2);
			expect("hello-world".size()).toBe(1);
		});
	});
});