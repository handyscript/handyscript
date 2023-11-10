/// ------------------------------- HANDY HASHMAP © HandyScript 5m/27d/23y -------------------------------

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
	 * Get the entries of the HashMap
	 */
	entries(): [string, unknown][] {
		return Array.from(this.map.entries());
	}

	/**
	 * Convert the HashMap to an object
	 */
	toObject(): Record<string, unknown> {
		const obj: Record<string, unknown> = {};
		this.forEach((value, key) => {
			obj[key] = value;
		});
		return obj;
	}

	/**
	 * Convert the HashMap to an array
	 */
	toArray(): [string, unknown][] {
		const arr: [string, unknown][] = [];
		this.forEach((value, key) => {
			arr.push([key, value]);
		});
		return arr;
	}

	/**
	 * Convert the HashMap to a flat array
	 */
	toFlatArray(): [string, unknown] {
		const arr: unknown[] = [];
		this.forEach((value, key) => {
			arr.push(key);
			arr.push(value);
		});
		return arr as [string, unknown];
	}

	/**
	 * get the first key of the associated value
	 * @param value The value whose key is to be returned
	 */
	getKeyByValue(value: unknown): string | null {
		for (const [key, val] of this.map) {
			if (val === value) {
				return key;
			}
		}
		return null;
	}

	/**
	 * get all the keys of the associated value
	 * @param value The value whose keys are to be returned
	 */
	getKeysByValue(value: unknown): string[] {
		const keys: string[] = [];
		for (const [key, val] of this.map) {
			if (val === value) {
				keys.push(key);
			}
		}
		return keys;
	}

	/**
	 * update the key of a value
	 * @param value The value whose key is to be updated
	 * @param newKey The new key to be updated
	 */
	updateKeyByValue(value: unknown, newKey: string) {
		const key = this.getKeyByValue(value);
		if (key) {
			this.remove(key);
			this.put(newKey, value);
		}
	}
}
