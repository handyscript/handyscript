/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {describe, expect} from "@jest/globals";
import "../lib/json";

describe("JSON methods", () => {
	const json = {
		name: "John",
		age: 30,
		cars: [
			{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
			{ name: "BMW", models: ["320", "X3", "X5"] },
		],
	};

	describe("isValid", () => {
		it("should return true for a valid JSON string", () => {
			const jsonString = JSON.stringify(json);
			expect(JSON.isValid(jsonString)).toBe(true);
		});

		it("should return false for an invalid JSON string", () => {
			const jsonString = "{ name: 'John', age: }";
			expect(JSON.isValid(jsonString)).toBe(false);
		});
	});

	describe("flatten", () => {
		it("should flatten a JSON object", () => {
			const flattened = JSON.flatten(json, "");
			expect(flattened).toEqual({
				"name": "John",
				"age": 30,
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

	describe("unflatten", () => {
		it("should unflatten a flattened JSON object", () => {
			const flattened = {
				"name": "John",
				"age": 30,
				"cars[0].name": "Ford",
				"cars[0].models[0]": "Fiesta",
				"cars[0].models[1]": "Focus",
				"cars[0].models[2]": "Mustang",
				"cars[1].name": "BMW",
				"cars[1].models[0]": "320",
				"cars[1].models[1]": "X3",
				"cars[1].models[2]": "X5",
			};
			const unflattened = JSON.unflatten(flattened);
			expect(unflattened).toEqual(json);
		});
	});

	describe("merge", () => {
		it("should merge two JSON objects", () => {
			const obj1 = { a: 1, b: 2 };
			const obj2 = { b: 3, c: 4 };
			const merged = JSON.merge(obj1, obj2);
			expect(merged).toEqual({ a: 1, b: 3, c: 4 });
		});
	});

	describe("filter", () => {
		it("should filter a JSON object by a condition function", () => {
			const filtered = JSON.filter(json, (value) => typeof value === "string");
			expect(filtered).toEqual({ name: "John" });
		});
	});

	describe("sort", () => {
		it("should sort a JSON array by a key in ascending order", () => {
			const sorted = JSON.sort(json.cars, "name");
			expect(sorted).toEqual([
				{ name: "BMW", models: ["320", "X3", "X5"] },
				{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
			]);
		});

		it("should sort a JSON array by a key in descending order", () => {
			const sorted = JSON.sort(json.cars, "name", "desc");
			expect(sorted).toEqual([
				{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
				{ name: "BMW", models: ["320", "X3", "X5"] },
			]);
		});
	});

	describe("pluck", () => {
		it("should return an array of values of a key in a JSON object", () => {
			const plucked = JSON.pluck(json.cars, "name");
			expect(plucked).toEqual(["Ford", "BMW"]);
		});
	});

	describe("transform", () => {
		it("should transform (rename keys) a JSON object using a mapping object", () => {
			const mapping = { name: "firstName", age: "ageInYears" };
			const transformed = JSON.transform(json, mapping);
			expect(transformed).toEqual({
				firstName: "John",
				ageInYears: 30,
				cars: [
					{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
					{ name: "BMW", models: ["320", "X3", "X5"] },
				],
			});
		});

		it("should transform (rename keys) a JSON object using a mapping object in deeply/nested way", () => {
			const mapping = { name: "firstName", age: "ageInYears" };
			const transformed = JSON.transform(json, mapping, true);
			expect(transformed).toEqual({
				firstName: "John",
				ageInYears: 30,
				cars: [
					{ firstName: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
					{ firstName: "BMW", models: ["320", "X3", "X5"] },
				],
			});
		});
	});

	describe("validateSchema", () => {
		it("should validate a JSON object against a JSON schema", () => {
			const schema = {
				name: { type: String },
				age: { type: Number },
				cars: [{ name: { type: String }, models: [{ type: String }] }],
			};
			const valid = JSON.validateSchema(json, schema);
			expect(valid).toBe(true);
		});

		it("should return false if a JSON object does not match a JSON schema", () => {
			const schema = {
				name: { type: String },
				age: { type: Number },
				cars: [{ name: { type: String }, models: [{ type: Number }] }],
			};
			const invalid = JSON.validateSchema(json, schema);
			expect(invalid).toBe(false);
		});
	});

	describe("query", () => {
		const jsons = [
			{
				name: "John",
				age: 30,
				cars: [
					{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
					{ name: "BMW", models: ["320", "X3", "X5"] },
				],
			},
			{
				name: "Doe",
				age:  20,
				cars: [
					{ name: "Mercidec", models: ["Golf", "Focus", "Benz"] },
					{ name: "Skuda", models: ["653", "DH2DS1", "F54EF5"] },
				],
			},
			{
				name: "Alex",
				age:  14,
				cars: [],
			},
		];

		it("should search a JSON object using a query string", () => {
			const result = JSON.query(jsons, "age", ">=", 20);
			expect(result).toEqual([
				{
					name: "John",
					age: 30,
					cars: [
						{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
						{ name: "BMW", models: ["320", "X3", "X5"] },
					],
				},
				{
					name: "Doe",
					age:  20,
					cars: [
						{ name: "Mercidec", models: ["Golf", "Focus", "Benz"] },
						{ name: "Skuda", models: ["653", "DH2DS1", "F54EF5"] },
					],
				},
			]);
		});

		it("should throw an error if the jsons argument is not an array of json objects", () => {
			expect(() => JSON.query("jsons", "age", ">=", 20)).toThrow("Invalid input: jsonArray must be an array of objects.");
		});
	});

	describe("toHashMap", () => {
		it("should convert a JSON object to a HashMap", () => {
			const hashmap = JSON.toHashMap(json);
			expect(hashmap).toEqual({
				"name": "John",
				"age": 30,
				"cars[0].name": "Ford",
				"cars[0].models[0]": "Fiesta",
				"cars[0].models[1]": "Focus",
				"cars[0].models[2]": "Mustang",
				"cars[1].name": "BMW",
				"cars[1].models[0]": "320",
				"cars[1].models[1]": "X3",
				"cars[1].models[2]": "X5"
			});
		});
	});
});