import {describe, expect} from "@jest/globals";
import HashMap from "../lib/hashmap";

describe("HashMap", () => {
	let hashMap: HashMap;

	beforeEach(() => {
		hashMap = new HashMap();
	});

	test("put and get", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		expect(hashMap.get("key1")).toBe("value1");
		expect(hashMap.get("key2")).toBe("value2");
	});

	test("upsert", () => {
		hashMap.upsert("key1", "value1");
		hashMap.upsert("key2", "value2");
		hashMap.upsert("key1", "updatedValue1");

		expect(hashMap.get("key1")).toBe("updatedValue1");
		expect(hashMap.get("key2")).toBe("value2");
	});

	test("update", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		expect(() => {
			hashMap.update("key3", "updatedValue3");
		}).toThrowError("Key key3 does not exist");

		hashMap.update("key2", "updatedValue2");

		expect(hashMap.get("key1")).toBe("value1");
		expect(hashMap.get("key2")).toBe("updatedValue2");
	});

	test("remove", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		expect(hashMap.remove("key1")).toBe(true);
		expect(hashMap.get("key1")).toBeUndefined();
		expect(hashMap.remove("key3")).toBe(false);
	});

	test("contains", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		expect(hashMap.contains("key1")).toBe(true);
		expect(hashMap.contains("key1", "key2")).toBe(true);
		expect(hashMap.contains("key1", "key3")).toBe(false);
	});

	test("includes", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		expect(hashMap.includes("key1")).toBe(true);
		expect(hashMap.includes("key1", "key3")).toBe(true);
		expect(hashMap.includes("key3")).toBe(false);
	});

	test("keys", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const keys = hashMap.keys();

		expect(keys).toContain("key1");
		expect(keys).toContain("key2");
	});

	test("values", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const values = hashMap.values();

		expect(values).toContain("value1");
		expect(values).toContain("value2");
	});

	test("size", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		expect(hashMap.size()).toBe(2);
	});

	test("clear", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		hashMap.clear();

		expect(hashMap.size()).toBe(0);
		expect(hashMap.isEmpty()).toBe(true);
	});

	test("isEmpty", () => {
		expect(hashMap.isEmpty()).toBe(true);

		hashMap.put("key1", "value1");

		expect(hashMap.isEmpty()).toBe(false);
	});

	test("forEach", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const result: Record<string, unknown> = {};
		hashMap.forEach((value, key) => {
			result[key] = value;
		});

		expect(result).toEqual({ key1: "value1", key2: "value2" });
	});

	test("filter", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const filteredHashMap = hashMap.filter((value) => value === "value1");

		expect(filteredHashMap.get("key1")).toBe("value1");
		expect(filteredHashMap.get("key2")).toBeUndefined();
	});

	test("entries", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const entries = hashMap.entries();

		expect(entries).toEqual([["key1", "value1"], ["key2", "value2"]]);
	});

	test("toFlatEntries", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const flatEntries = hashMap.toFlatEntries();

		expect(flatEntries).toEqual(["key1", "value1", "key2", "value2"]);
	});

	test("toObject", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const obj = hashMap.toObject();

		expect(obj).toEqual({ key1: "value1", key2: "value2" });
	});

	test("toFlatObject", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const flatObj = hashMap.toFlatObject();

		expect(flatObj).toEqual({ key1: "value1", key2: "value2" });
	});

	test("getKeyByValue", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const key = hashMap.getKeyByValue("value1");

		expect(key).toBe("key1");
	});

	test("getKeysByValue", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");
		hashMap.put("key3", "value1");

		const keys = hashMap.getKeysByValue("value1");

		expect(keys).toEqual(["key1", "key3"]);
	});

	test("updateKeyByValue", () => {
		hashMap.put("key1", "value1");
		hashMap.put("key2", "value2");

		const oldKey = hashMap.updateKeyByValue("value1", "newKey");

		expect(oldKey).toBe("key1");
		expect(hashMap.get("newKey")).toBe("value1");
		expect(hashMap.get("key1")).toBeUndefined();
	});
});
