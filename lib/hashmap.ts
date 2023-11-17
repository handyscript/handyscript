/// ------------------------------- HANDY HASHMAP © HandyScript 5m/27d/23y -------------------------------

import "../lib/json";

/**
 * HashMap implementation in JavaScript
 */
export default class HashMap {
	map = new Map();

	constructor(obj?: Record<string, unknown>) {
		this.map = new Map();
		if (obj) {
			Object.keys(obj).forEach((key) => {
				this.map.set(key, obj[key]);
			});
		}
	}

	/**
	 * Add a key-value pair to the HashMap
	 * @param key The key of the key-value pair
	 * @param value The value of the key-value pair
	 */
	put(key: string, value: unknown): void {
		this.map.set(key, value);
	}

	/**
	 * Get the value associated with a key
	 * @param key The key whose value is to be returned
	 */
	get(key: string): unknown {
		return this.map.get(key);
	}

	/**
	 * Get the value associated with a key or insert a new key-value pair if the key does not exist
	 * @param key The key whose value is to be updated
	 * @param value The value to be inserted if the key does not exist
	 */
	upsert(key: string, value: unknown): void {
		if (this.contains(key)) {
			this.map.set(key, value);
		} else {
			this.put(key, value);
		}
	}

	/**
	 * Update the value associated with a key
	 * @param key The key whose value is to be updated
	 * @param value The value to be updated
	 */
	update(key: string, value: unknown): void {
		if (this.contains(key)) {
			this.map.set(key, value);
		} else {
			throw new Error(`Key ${key} does not exist`);
		}
	}

	/**
	 * Remove a key-value pair from the HashMap
	 * @param key The key whose value is to be removed
	 */
	remove(key: string): boolean {
		return this.map.delete(key);
	}

	/**
	 * Check if the HashMap contains `all` of the given keys
	 * @param keys The list of keys to be checked
	 */
	contains(...keys: string[]): boolean {
		return keys.every((key) => this.map.has(key));
	}

	/**
   * Check if the HashMap contains `any` of the given keys
   * @param keys The list of keys to be checked
   */
	includes(...keys: string[]): boolean {
		return keys.some((key) => this.map.has(key));
	}

	/**
	 * @returns array of all the keys present in the HashMap
	 */
	keys(): string[] {
		return Array.from(this.map.keys());
	}

	/**
	 * @returns array of all the values present in the HashMap
	 */
	values(): unknown[] {
		return Array.from(this.map.values());
	}

	/**
	 * @returns — the number of elements in the HashMap.
	 */
	size(): number {
		return this.map.size;
	}

	/**
	 * Clear the HashMap
	 */
	clear(): void {
		this.map.clear();
	}

	/**
	 * Check if the HashMap is empty
	 */
	isEmpty(): boolean {
		return this.map.size === 0;
	}

	/**
	 * Iterate over the HashMap
	 */
	forEach(callback: (value: unknown, key: string) => void): void {
		for (const [key, value] of this.map) {
			callback(value, key);
		}
	}

	/**
	 * Filter the HashMap
	 */
	filter(callback: (value: unknown, key: string) => boolean): HashMap {
		const filtered = new HashMap();
		this.forEach((value, key) => {
			if (callback(value, key)) {
				filtered.put(key, value);
			}
		});
		return filtered;
	}

	/**
	 * Get the entries of the HashMap: `[[key1, value1], [key2, value2], ...]`
	 */
	entries(): [string, unknown][] {
		return Array.from(this.map.entries());
	}

	/**
	 * Convert the HashMap to a flat array: `[key1, value1, key2, value2, ...]`
	 */
	toFlatEntries(): [string, unknown] {
		const arr: unknown[] = [];
		this.forEach((value, key) => {
			arr.push(key);
			// if type of value is object, then convert it to a flat object
			if (typeof value === "object") {
				arr.push(JSON.flatten(value as JSONObject));
			// if type of value is array, then convert it to a flat array
			} else if (Array.isArray(value)) {
				value.forEach((val, index) => {
					arr.push(`${key}[${index}]`);
					arr.push(val);
				});
			} else {
				arr.push(value);
			}
		});
		return arr as [string, unknown];
	}

	/**
	 * Convert the HashMap to a javascript `object`
	 * similar to the one returned by `JSON.unflatten()`
	 */
	toObject(): Record<string, unknown> {
		const obj: Record<string, unknown> = {};
		this.forEach((value, key) => {
			obj[key] = value;
		});
		return obj;
	}

	/**
	 * Convert the HashMap to a Flat object
	 * similar to the one returned by `JSON.flatten()`
	 */
	toFlatObject(): Record<string, unknown> {
		return JSON.flatten(this.toObject() as JSONObject) as Record<string, unknown>;
	}

	/**
	 * get the first key of the associated value, returns `null` if no key is found
	 * @param caseSensitive [default: true] whether to perform case sensitive search
	 */
	getKeyByValue(value: unknown, caseSensitive = true): string | null {
		for (const [key, val] of this.map) {
			if (caseSensitive) {
				if (val === value) return key;
			} else {
				if (String(val).toLowerCase() === String(value).toLowerCase()) return key;
			}
		}
		return null;
	}

	/**
	 * get all the keys that are sharing the same value, returns empty array `[]` if no key is found
	 * @param caseSensitive [default: true] whether to perform case sensitive search
	 */
	getKeysByValue(value: unknown, caseSensitive = true): string[] {
		const keys: string[] = [];
		for (const [key, val] of this.map) {
			if (caseSensitive) {
				if (val === value) keys.push(key);
			} else {
				if (String(val).toLowerCase() === String(value).toLowerCase()) keys.push(key);
			}
		}
		return keys;
	}

	/**
	 * update the key of a value, and returns the old key, returns `null` if no key is found
	 * @param value The value whose key is to be updated
	 * @param newKey The new key to be updated
	 * @param caseSensitive [default: true] whether to perform case sensitive search
	 */
	updateKeyByValue(value: unknown, newKey: string, caseSensitive = true): string | null {
		const key = this.getKeyByValue(value, caseSensitive);
		if (key) {
			this.remove(key);
			this.put(newKey, value);
		}
		return key;
	}
}
