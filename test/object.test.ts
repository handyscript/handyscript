import {describe, expect} from "@jest/globals";
import "../lib/object";

describe("Object methods", () => {
	describe("clone", () => {
		it("should return a deep clone of the object", () => {
			const obj = { a: 1, b: { c: 2 } };
			const clone = Object.clone(obj);
			expect(clone).toEqual(obj);
			expect(clone).not.toBe(obj);
			expect(clone.b).not.toBe(obj.b);
		});
	});

	describe("merge", () => {
		it("should return a new object with the properties of the passed objects", () => {
			const obj1 = { a: 1 };
			const obj2 = { b: 2 };
			const merged = Object.merge(obj1, obj2);
			expect(merged).toEqual({ a: 1, b: 2 });
		});
	});
  
	describe("deepMerge", () => {
		it("should return a new `merged` object deep merged from the passed objects", () => {
			const target = { a: { b: 1 } };
			const source = { a: { c: 2 } };
			const merged = Object.deepMerge({ ...target }, source);

			// Check if the original objects are unchanged
			expect(target).toEqual({ a: { b: 1 } });
			expect(source).toEqual({ a: { c: 2 } });

			// Check the merged object
			expect(merged).toEqual({ a: { b: 1, c: 2 } });
		});
	});

	describe("forProperties", () => {
		it("should loop through the object and call the callback function for each property", () => {
			const obj = { a: 1, b: 2 };
			const callback = jest.fn();
			Object.forProperties(obj, callback);
			expect(callback).toHaveBeenCalledTimes(2);
			expect(callback).toHaveBeenCalledWith("a", 1);
			expect(callback).toHaveBeenCalledWith("b", 2);
		});
	});

	describe("dropEntry", () => {
		it("should drop an entry from an object", () => {
			const obj = { a: 1, b: 2 };
			const dropped = Object.dropEntry(obj, "a");
			expect(dropped).toEqual({ b: 2 });
		});
	});
});