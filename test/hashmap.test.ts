import {describe, expect} from "@jest/globals";
import HashMap from "../lib/hashmap";

describe("HashMap", () => {
	let map: HashMap;

	beforeEach(() => {
		map = new HashMap({
			name: "John",
			age: 30,
			city: "New York",
		});
	});

	describe("put", () => {
		it("should add a key-value pair to the HashMap", () => {
			map.put("country", "USA");
			expect(map.get("country")).toEqual("USA");
		});
	});

	describe("get", () => {
		it("should get the value associated with a key", () => {
			expect(map.get("name")).toEqual("John");
		});

		it("should return undefined if the key does not exist", () => {
			expect(map.get("gender")).toBeUndefined();
		});
	});

	describe("upsert", () => {
		it("should update the value associated with a key if the key exists", () => {
			map.upsert("name", "Jane");
			expect(map.get("name")).toEqual("Jane");
		});

		it("should insert a new key-value pair if the key does not exist", () => {
			map.upsert("gender", "male");
			expect(map.get("gender")).toEqual("male");
		});
	});

	describe("update", () => {
		it("should update the value associated with a key if the key exists", () => {
			map.update("name", "Jane");
			expect(map.get("name")).toEqual("Jane");
		});

		it("should throw an error if the key does not exist", () => {
			expect(() => {
				map.update("gender", "male");
			}).toThrowError("Key gender does not exist");
		});
	});

	describe("remove", () => {
		it("should remove a key-value pair from the HashMap", () => {
			map.remove("age");
			expect(map.get("age")).toBeUndefined();
		});

		it("should return true if the key-value pair is removed", () => {
			expect(map.remove("age")).toBe(true);
		});

		it("should return false if the key does not exist", () => {
			expect(map.remove("gender")).toBe(false);
		});
	});

	describe("contains", () => {
		it("should return true if the HashMap contains all the given keys", () => {
			expect(map.contains("name", "age")).toBe(true);
		});

		it("should return false if the HashMap does not contain any of the given keys", () => {
			expect(map.contains("name", "gender")).toBe(false);
		});
	});

	describe("includes", () => {
		it("should return true if the HashMap contains any of the given keys", () => {
			expect(map.includes("name", "gender")).toBe(true);
		});

		it("should return false if the HashMap does not contain any of the given keys", () => {
			expect(map.includes("gender", "address")).toBe(false);
		});
	});

	describe("keys", () => {
		it("should return an array of all the keys present in the HashMap", () => {
			expect(map.keys()).toEqual(["name", "age", "city"]);
		});
	});

	describe("values", () => {
		it("should return an array of all the values present in the HashMap", () => {
			expect(map.values()).toEqual(["John", 30, "New York"]);
		});
	});

	describe("size", () => {
		it("should return the number of elements in the HashMap", () => {
			expect(map.size()).toEqual(3);
		});
	});

	describe("clear", () => {
		it("should clear the HashMap", () => {
			map.clear();
			expect(map.size()).toEqual(0);
		});
	});

	describe("isEmpty", () => {
		it("should return true if the HashMap is empty", () => {
			map.clear();
			expect(map.isEmpty()).toBe(true);
		});

		it("should return false if the HashMap is not empty", () => {
			expect(map.isEmpty()).toBe(false);
		});
	});

	describe("forEach", () => {
		it("should iterate over the HashMap", () => {
			const keys: string[] = [];
			const values: unknown[] = [];
			map.forEach((value, key) => {
				keys.push(key);
				values.push(value);
			});
			expect(keys).toEqual(["name", "age", "city"]);
			expect(values).toEqual(["John", 30, "New York"]);
		});
	});

	describe("filter", () => {
		it("should filter the HashMap", () => {
			const filtered = map.filter((value) => typeof value === "string");
			expect(filtered.toObject()).toEqual({ name: "John", city: "New York" });
		});
	});

	describe("entries", () => {
		it("should get the entries of the HashMap", () => {
			expect(map.entries()).toEqual([
				["name", "John"],
				["age", 30],
				["city", "New York"],
			]);
		});
	});

	describe("toObject", () => {
		it("should convert the HashMap to an object", () => {
			expect(map.toObject()).toEqual({ name: "John", age: 30, city: "New York" });
		});
	});

	describe("toArray", () => {
		it("should convert the HashMap to an array", () => {
			expect(map.toArray()).toEqual([
				["name", "John"],
				["age", 30],
				["city", "New York"],
			]);
		});
	});

	describe("toFlatArray", () => {
		it("should convert the HashMap to a flat array", () => {
			expect(map.toFlatArray()).toEqual(["name", "John", "age", 30, "city", "New York"]);
		});
	});

	describe("getKeyByValue", () => {
		it("should get the first key of the associated value", () => {
			expect(map.getKeyByValue("John")).toEqual("name");
		});

		it("should return null if the value does not exist", () => {
			expect(map.getKeyByValue("male")).toBeNull();
		});
	});

	describe("getKeysByValue", () => {
		it("should get all the keys of the associated value", () => {
			map.put("nickname", "Johnny");
			map.put("fullname", "John Doe");
			expect(map.getKeysByValue("John")).toEqual(["name"]);
		});

		it("should return an empty array if the value does not exist", () => {
			expect(map.getKeysByValue("male")).toEqual([]);
		});
	});

	describe("updateKeyByValue", () => {
		it("should update the key of a value", () => {
			map.updateKeyByValue("John", "firstName");
			expect(map.toObject()).toEqual({ firstName: "John", age: 30, city: "New York" });
		});

		it("should not update the key if the value does not exist", () => {
			map.updateKeyByValue("male", "gender");
			expect(map.toObject()).toEqual({ name: "John", age: 30, city: "New York" });
		});
	});
});