import {describe, expect} from "@jest/globals";
// import "../lib/json";
import HashMap from "../lib/hashmap";

describe("HashMap", () => {
	let map: HashMap;

	beforeEach(() => {
		map = new HashMap({
			name: "John",
			age: 30,
			cars: [
				{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
				{ name: "BMW", models: ["320", "X3", "X5"] },
			],
		});
	});

	describe("put", () => {
		it("should add a key-value pair to the HashMap", () => {
			map.put("name", "Jane");
			expect(map.get("name")).toEqual("Jane");
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
			expect(map.keys()).toEqual([
				"name",
				"age",
				"cars[0].name",
				"cars[0].models[0]",
				"cars[0].models[1]",
				"cars[0].models[2]",
				"cars[1].name",
				"cars[1].models[0]",
				"cars[1].models[1]",
				"cars[1].models[2]"
			]);
		});
	});

	describe("values", () => {
		it("should return an array of all the values present in the HashMap", () => {
			expect(map.values()).toEqual([
				"John",
				30,
				"Ford",
				"Fiesta",
				"Focus",
				"Mustang",
				"BMW",
				"320",
				"X3",
				"X5"
			]);
		});
	});

	describe("size", () => {
		it("should return the number of elements in the HashMap", () => {
			expect(map.size()).toEqual(10);
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
			expect(keys).toEqual([
				"name",
				"age",
				"cars[0].name",
				"cars[0].models[0]",
				"cars[0].models[1]",
				"cars[0].models[2]",
				"cars[1].name",
				"cars[1].models[0]",
				"cars[1].models[1]",
				"cars[1].models[2]"
			]);
			expect(values).toEqual([
				"John",
				30,
				"Ford",
				"Fiesta",
				"Focus",
				"Mustang",
				"BMW",
				"320",
				"X3",
				"X5"
			]);
		});
	});

	describe("filter", () => {
		it("should filter the HashMap", () => {
			const filtered = map.filter((value) => typeof value === "string");
			expect(filtered.toObject()).toEqual({
				name: "John",
				cars: [
					{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
					{ name: "BMW", models: ["320", "X3", "X5"] },
				]
			});
		});
	});

	describe("entries", () => {
		it("should get the entries of the HashMap", () => {
			expect(map.entries()).toEqual([
				["name", "John" ],
				["age", 30 ],
				["cars[0].name", "Ford" ],
				["cars[0].models[0]", "Fiesta" ],
				["cars[0].models[1]", "Focus" ],
				["cars[0].models[2]", "Mustang" ],
				["cars[1].name", "BMW" ],
				["cars[1].models[0]", "320" ],
				["cars[1].models[1]", "X3" ],
				["cars[1].models[2]", "X5" ]
			]);
		});
	});

	describe("toFlatEntries", () => {
		it("should convert the HashMap entries to a flat array", () => {
			expect(map.toFlatEntries()).toEqual([
				"name", "John",
				"age", 30,
				"cars[0].name", "Ford",
				"cars[0].models[0]", "Fiesta",
				"cars[0].models[1]", "Focus",
				"cars[0].models[2]", "Mustang",
				"cars[1].name", "BMW",
				"cars[1].models[0]", "320",
				"cars[1].models[1]", "X3",
				"cars[1].models[2]", "X5"
			]);
		});
	});

	describe("toObject", () => {
		it("should convert the HashMap to an object", () => {
			expect(map.toObject()).toEqual({
				name: "John",
				age: 30,
				cars: [
					{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
					{ name: "BMW", models: ["320", "X3", "X5"] },
				]
			});
		});
	});

	describe("toFlatObject", () => {
		it("should convert the HashMap to a flat object", () => {
			console.log(map.toFlatObject());
			expect(map.toFlatObject()).toEqual({
				name: "John",
				age: 30,
				"cars[0].name": "Ford",
				"cars[0].models[0]": "Fiesta",
				"cars[0].models[1]": "Focus",
				"cars[0].models[2]": "Mustang",
				"cars[1].name": "BMW",
				"cars[1].models[0]": "320",
				"cars[1].models[1]": "X3",
				"cars[1].models[2]": "X5",
			});
		});
	});

	// describe("toJSON", () => {
	// 	it("should convert the HashMap to a JSON string", () => {
	// 		expect(map.toJSON()).toEqual('{"name":"John","age":30,"city":"New York"}');
	// 	});
	// });


	describe("getKeyByValue", () => {
		it("should get the first key of the associated value (Case Sensitive)", () => {
			expect(map.getKeyByValue("Ford")).toEqual("cars[0].name");
		});

		it("should get the first key of the associated value (Case Insensitive)", () => {
			expect(map.getKeyByValue("ford", false)).toEqual("cars[0].name");
		});

		it("should return null if the value does not exist or it's a Case Sensitivity mismatch", () => {
			expect(map.getKeyByValue("Ford")).toBeNull();
		});
	});

	describe("getKeysByValue", () => {
		it("should get all the keys of the associated value (Case Sensitive)", () => {
			map.put("nickname", "Johnny");
			map.put("fullname", "John Doe");
			expect(map.getKeysByValue("John")).toEqual(["name"]);
		});

		it("should get all the keys of the associated value (Case Insensitive)", () => {
			map.put("nickname", "john");
			map.put("fullname", "John Doe");
			expect(map.getKeysByValue("john", false)).toEqual(["name", "nickname"]);
		});

		it("should return an empty array if the value does not exist or it's a Case Sensitivity mismatch", () => {
			expect(map.getKeysByValue("male")).toEqual([]);
		});
	});

	describe("updateKeyByValue", () => {
		it("should update the key of a value", () => {
			map.updateKeyByValue("John", "firstName");
			expect(map.toObject()).toEqual({
				firstName: "John",
				age: 30,
				cars: [
					{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
					{ name: "BMW", models: ["320", "X3", "X5"] },
				]
			});
		});

		it("should not update the key if the value does not exist", () => {
			map.updateKeyByValue("male", "gender");
			expect(map.toObject()).toEqual({
				name: "John",
				age: 30,
				cars: [
					{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
					{ name: "BMW", models: ["320", "X3", "X5"] },
				]
			});
		});
	});
});