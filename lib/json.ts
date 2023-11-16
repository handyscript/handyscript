/// ------------------------------- HANDY JSON © HandyScript 6m/16d/23y -------------------------------

import HashMap from "./hashmap";

declare global {
	interface JSON {
		/**
		 * Check if a JSON string is valid
		 */
		isValid(json: string): boolean;

		/**
		 * the flatten function takes a JSON object and returns a new object with all the keys flattened.
		 */
		flatten(json: JsonObject, prefix: string): FlattenedObject;

		/**
		 * the unflatten function takes a JSON object with flattened keys and returns a new object with unflattened keys.
		 */
		unflatten(json: FlattenedObject): JsonObject;

		/**
		 * the merge function takes two JSON objects and returns a new object with the keys merged.
		 * If the same key exists in both objects, the value of the second object will be used.
		 */
		merge(...jsonData: JsonObject[]): JsonObject;

		/**
		 * the filter function takes a JSON object and a condition function and returns a new object with the keys that satisfy the condition.
		 */
		filter(json: JsonObject, condition: (value: JsonValue) => boolean): JsonObject;

		/**
		 * Sort a JSON array by a key in ascending or descending order
		 */
		sort(json: JsonObject[], key: string, order?: SortOrder): JsonObject;

		/**
		 * Return an array of values of a key in a JSON object
		 */
		pluck(json: JsonObject[], key: string): JsonData[];

		/**
		 * Transform a JSON object using a mapping object
		 */
		transform(json: JsonObject, mapping: JsonObject): JsonObject;

		/**
		 * Validate a JSON object against a JSON schema
		 */
		validateSchema<T>(data: JsonData, schema: Schema<T>): boolean;

		/**
		 * Search a JSON object using a query string
		 * @example
		 * const json = {
		 * "name": "John",
		 * "age": 30,
		 * "cars": [
		 *  { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
		 *  { "name": "BMW", "models": ["320", "X3", "X5"] },
		 * ]
		 * }
		 *
		 * JSON.query(json, "cars[0].name") // { "name": "Ford" }
		 */
		query(json: JsonObject, query: string): JsonData;

		/**
		 * Convert a JSON object to a HashMap
		 */
		toHashmap(json: JsonObject): HashMap;
	}
}

Object.assign(JSON, {
	isValid: (json: string): boolean => {
		try {
			JSON.parse(json);
			return true;
		} catch (e) {
			return false;
		}
	},

	flatten: <T extends JsonObject>(obj: T, prefix: string = ""): FlattenedObject => {
		const result: FlattenedObject = {};

		function recurse(current: JsonData, property: string): void {
			if (Array.isArray(current)) {
				current.forEach((item, index) => {
					const newKey = `${prefix}${property}[${index}]`;
					recurse(item, newKey);
				});
			} else if (typeof current === "object" && current !== null) {
				for (const key in current) {
					const newKey = `${prefix}${property ? `${property}.` : ""}${key}`;
					recurse(current[key], newKey);
				}
			} else {
				result[`${prefix}${property}`] = current as JsonValue;
			}
		}

		recurse(obj, "");

		return result;
	},

	unflatten: (flattened: FlattenedObject): JsonObject => {
		const result: JsonObject = {};

		for (const key in flattened) {
			const value = flattened[key];
			const keys = key.split(".");
			let current: JsonObject = result;

			for (let i = 0; i < keys.length; i++) {
				const k = keys[i];
				const isArray = /\[\d+\]$/.test(k);

				if (isArray) {
					const arrKey = k.slice(0, k.indexOf("["));
					const index = parseInt(k.match(/\d+/)![0], 10);

					// if (!Array.isArray(current[arrKey])) throw new Error(`Invalid key: ${arrKey} is not an array`);

					if (!Array.isArray(current[arrKey]) || !current[arrKey]) current[arrKey] = [];

					if (i === keys.length - 1) {
						(current[arrKey] as JsonData[])![index] = value;
					} else {
						if (!(current[arrKey] as JsonData[])![index]) (current[arrKey] as JsonData[])![index] = {};
						current = (current[arrKey] as JsonData[])![index] as JsonObject;
					}
				} else {
					if (!current[k]) {
						current[k] = {};
					}

					if (i === keys.length - 1) {
						current[k] = value;
					} else {
						current = current[k] as JsonObject;
					}
				}
			}
		}

		return result;
	},

	merge: (...jsonData: JsonObject[]): JsonObject => {
		const result: JsonObject = {};

		for (const json of jsonData) {
			for (const key in json) {
				if (Object.prototype.hasOwnProperty.call(json, key)) {
					const value = json[key];

					if (typeof value === "object" && !Array.isArray(value)) {
						// If the value is an object, merge it recursively
						result[key] = JSON.merge(result[key] as JsonObject || {}, value as JsonObject) as JsonObject;
					} else {
						// Otherwise, assign the value
						result[key] = value;
					}
				}
			}
		}
		return result;
	},



	filter: (json: JsonObject, condition: (value: JsonValue) => boolean): JsonObject => {
		const result: JsonObject = {};

		for (const key in json) {
			if (Object.prototype.hasOwnProperty.call(json, key)){
				const value = json[key];

				if (typeof value === "object" && !Array.isArray(value)) {
					// If the value is an object, apply the filter recursively
					const nested = JSON.filter(value as JsonObject, condition);
					if (Object.keys(nested).length > 0) {
						result[key] = nested;
					}
				} else if (condition(value as JsonValue)) {
					// If the condition is satisfied, add the key-value pair to the filtered object
					result[key] = value;
				}
			}
		}
		return result;
	},

	sort: (json: JsonObject[], key: string, order: SortOrder = "asc"): JsonObject[] => {
		return json.sort((a, b) => {
			const valueA = a[key] as JsonValue;
			const valueB = b[key] as JsonValue;

			if ((valueA === valueB) || ((!valueA || valueA === null) && (!valueB || valueB === null))) return 0;

			if (!valueA || valueA === null) return order === "asc" ? 1 : -1;
			if (!valueB || valueB === null) return order === "asc" ? -1 : 1;

			if (order === "asc") {
				return valueA < valueB ? -1 : 1;
			} else {
				return valueA > valueB ? -1 : 1;
			}
		});
	},

	pluck: (json: JsonObject[], key: string): JsonData[] => {
		const result: JsonData[] = [];
		if (Array.isArray(json)) {
			for (const value of json) {
				result.push(value[key as keyof typeof value] as JsonObject);
			}
		} else {
			for (const value in json as JsonObject) {
				result.push(json[value as keyof typeof json][key as keyof typeof json]);
			}
		}
		return result;
	},

	transform: (json: JsonObject, mapping: JsonObject): JsonObject => {
		const result: JsonObject = {};
		for (const key in mapping) {
			result[key as keyof typeof result] = json[mapping[key as keyof typeof mapping] as keyof typeof json];
		}
		return result;
	},

	validateSchema: <T>(data: JsonData, schema: Schema<T>): boolean => {
		function validateObject(data: JsonObject, objectSchema: SchemaProperty): boolean {
			for (const key in objectSchema) {
				if (Object.prototype.hasOwnProperty.call(objectSchema, key)) {
					const propertySchema = objectSchema[key as keyof typeof objectSchema] as SchemaProperty;

					if (!validateProperty(data[key as keyof typeof data] as JsonValue, propertySchema)) return false;
				}
			}

			return true;
		}

		function validateProperty(value: JsonData, propertySchema: SchemaProperty): boolean {
			if (propertySchema.required && (value === undefined || value === null)) return false;

			if (propertySchema.type === String && typeof value !== "string") return false;
			if (propertySchema.type === Number && typeof value !== "number") return false;
			if (propertySchema.type === Boolean && typeof value !== "boolean") return false;

			if (propertySchema.type === Object && propertySchema.properties) {
				if (!validateObject(value as JsonObject, propertySchema.properties)) return false;
			}

			if (propertySchema.regex && typeof value === "string") {
				const regex = new RegExp(propertySchema.regex);
				if (!regex.test(value)) return false;
			}

			return true;
		}

		if (Array.isArray(schema)) {
			if (!Array.isArray(data)) return false;
			return data.every((item) => validateObject(item as JsonObject, schema[0] as SchemaProperty));
		} else {
			if (Array.isArray(data)) return false;
			return validateObject(data as JsonObject, schema as unknown as SchemaProperty);
		}
	},

	query: (json: JsonObject, query: string): JsonData => {
		const keys = query.split(".");
		let result: JsonObject = json;
		for (const key of keys) {
			if (key in result) {
				result = result[key as keyof typeof result] as JsonObject;
			} else {
				return null;
			}
		}
		return result;
	},

	toHashmap: (json: JsonObject): HashMap => {
		return new HashMap(json);
	},
});

export default JSON;