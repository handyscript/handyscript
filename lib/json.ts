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
		flatten(json: JSONObject, prefix?: string): FlattenedObject;

		/**
		 * the unflatten function takes a JSON object with flattened keys and returns a new object with unflattened keys.
		 */
		unflatten(json: FlattenedObject): JSONObject;

		/**
		 * the merge function takes two JSON objects and returns a new object with the keys merged.
		 * If the same key exists in both objects, the value of the second object will be used.
		 */
		merge(...jsonData: JSONObject[]): JSONObject;

		/**
		 * the filter function takes a JSON object and a condition function and returns a new object with the keys that satisfy the condition.
		 */
		filter(json: JSONObject, condition: (value: JSONValue) => boolean): JSONObject;

		/**
		 * Sort a JSON array by a key in ascending or descending order
		 */
		sort(json: JSONObject[], key: string, order?: SortOrder): JSONObject;

		/**
		 * Return an array of values of a key in a JSON object
		 */
		pluck(json: JSONObject[], key: string): JSONData[];

		/**
		 * Transform a JSON object by mapping keys to new keys
		 */
		transform(json: JSONObject, mapping: JSONTransformMap, nested?: boolean): JSONObject;

		/**
		 * Validate a JSON object against a JSON schema
		 */
		validateSchema(json: JSONObject, schema: Schema<JSONObject>): boolean;

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
		query(jsonArray: JSONObject[], key: string, operator: JSONQueryOperations, value: JSONValue): JSONObject[];

		/**
		 * Convert a JSON object to a HashMap
		 */
		toHashMap(json: JSONObject): HashMap;
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

	flatten: <T extends JSONObject>(obj: T, prefix: string = ""): FlattenedObject => {
		const result: FlattenedObject = {};

		function recurse(current: JSONData, property: string): void {
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
				result[`${prefix}${property}`] = current as JSONValue;
			}
		}

		recurse(obj, "");

		return result;
	},

	unflatten(flattenedObject: FlattenedObject): JSONObject {
		const result: JSONObject = {};

		function setNestedProperty(obj: JSONObject, key: string, value: JSONValue): void {
			const keys = key.split(".");
			let currentObj = obj;

			keys.forEach((nestedKey, index) => {
				const isArray = nestedKey.includes("[") && nestedKey.includes("]");
				const arrayKeyMatch = nestedKey.match(/\[(.*?)\]/);

				if (isArray && arrayKeyMatch) {
					const arrayName = nestedKey.split("[")[0];
					const arrayIndex = parseInt(arrayKeyMatch[1], 10);
					// const currentObjArr = currentObj[arrayName] as JSONData[];

					if (!currentObj[arrayName]) {
						currentObj[arrayName] = [];
					}

					if (index === keys.length - 1) {
						(currentObj[arrayName] as JSONData[])[arrayIndex] = value;
					} else {
						if (!(currentObj[arrayName] as JSONData[])[arrayIndex]) {
							(currentObj[arrayName] as JSONData[])[arrayIndex] = {};
						}
						currentObj = (currentObj[arrayName] as JSONData[])[arrayIndex] as JSONObject;
					}
				} else {
					if (index === keys.length - 1) {
						currentObj[nestedKey] = value;
					} else {
						if (!currentObj[nestedKey]) {
							currentObj[nestedKey] = {};
						}
						currentObj = currentObj[nestedKey] as JSONObject;
					}
				}
			});
		}

		for (const key in flattenedObject) {
			if (Object.prototype.hasOwnProperty.call(flattenedObject, key)) {
				const value = flattenedObject[key];
				setNestedProperty(result, key, value);
			}
		}

		return result;
	},

	merge: (...jsonData: JSONObject[]): JSONObject => {
		const result: JSONObject = {};

		for (const json of jsonData) {
			for (const key in json) {
				if (Object.prototype.hasOwnProperty.call(json, key)) {
					const value = json[key];

					if (typeof value === "object" && !Array.isArray(value)) {
						// If the value is an object, merge it recursively
						result[key] = JSON.merge(result[key] as JSONObject || {}, value as JSONObject) as JSONObject;
					} else {
						// Otherwise, assign the value
						result[key] = value;
					}
				}
			}
		}
		return result;
	},

	filter: (json: JSONObject, condition: (value: JSONValue) => boolean): JSONObject => {
		const result: JSONObject = {};

		for (const key in json) {
			if (Object.prototype.hasOwnProperty.call(json, key)){
				const value = json[key];

				if (typeof value === "object" && !Array.isArray(value)) {
					// If the value is an object, apply the filter recursively
					const nested = JSON.filter(value as JSONObject, condition);
					if (Object.keys(nested).length > 0) {
						result[key] = nested;
					}
				} else if (condition(value as JSONValue)) {
					// If the condition is satisfied, add the key-value pair to the filtered object
					result[key] = value;
				}
			}
		}
		return result;
	},

	sort: (json: JSONObject[], key: string, order: SortOrder = "asc"): JSONObject[] => {
		return json.sort((a, b) => {
			const valueA = a[key] as JSONValue;
			const valueB = b[key] as JSONValue;

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

	pluck: (json: JSONObject[], key: string): JSONData[] => {
		const result: JSONData[] = [];
		if (Array.isArray(json)) {
			for (const value of json) {
				result.push(value[key as keyof typeof value] as JSONObject);
			}
		} else {
			for (const value in json as JSONObject) {
				result.push(json[value as keyof typeof json][key as keyof typeof json]);
			}
		}
		return result;
	},

	transform(json: JSONObject, mapping: JSONTransformMap, nested: boolean = false): JSONObject {
		const transformedJson: JSONObject = {};

		for (const key in json) {
			if (Object.prototype.hasOwnProperty.call(json,key)) {
				const mappedKey = mapping[key] || key;
				const value = json[key];

				if (Array.isArray(value)) {
					transformedJson[mappedKey] = value.map((item) => {
						if (nested && typeof item === "object" && item !== null) {
							return JSON.transform(item as JSONObject, mapping, true);
						} else {
							return item;
						}
					});
				} else if (nested && typeof value === "object" && value !== null) {
					transformedJson[mappedKey] = JSON.transform(value as JSONObject, mapping, true);
				} else {
					transformedJson[mappedKey] = value;
				}
			}
		}

		return transformedJson;
	},

	validateSchema(data: JSONData, schema: Schema<JSONData>): boolean {
		const validateProperty = (value: JSONData, propertySchema: SchemaProperty): boolean => {
			if (propertySchema.type === String && typeof value !== "string") {
				return false;
			}

			if (propertySchema.type === Number && typeof value !== "number") {
				return false;
			}

			if (propertySchema.type === Boolean && typeof value !== "boolean") {
				return false;
			}

			if (propertySchema.type === Object) {
				if (typeof value !== "object" || value === null || Array.isArray(value)) {
					return false;
				}

				if (propertySchema.properties) {
					return validateObject(value as JSONObject, propertySchema.properties);
				}
			}

			if (propertySchema.regex && typeof value === "string") {
				return propertySchema.regex.test(value);
			}

			return true;
		};

		const validateArray = (array: JSONArray, arraySchema: SchemaProperty[]): boolean => {
			if (!Array.isArray(array)) {
				return false;
			}

			for (let i = 0; i < array.length; i++) {
				if (!validateProperty(array[i], arraySchema[0])) {
					return false;
				}
			}

			return true;
		};

		const validateObject = (obj: JSONObject, objSchema: Schema<JSONData>): boolean => {
			for (const key in objSchema) {
				if (Object.prototype.hasOwnProperty.call(objSchema, key)) {
					const propertySchema = objSchema[key as keyof typeof objSchema];

					if (Array.isArray(propertySchema)) {
						if (!validateArray(obj[key] as JSONArray, propertySchema as SchemaProperty[])) {
							return false;
						}
					} else {
						if (!validateProperty(obj[key], propertySchema as SchemaProperty)) {
							return false;
						}
					}
				}
			}

			return true;
		};

		return validateObject(data as JSONObject, schema);
	},

	query(jsonArray: JSONObject[], key: string, operator: JSONQueryOperations, value: JSONValue): JSONObject[] {
		if (!Array.isArray(jsonArray) || !jsonArray.every((item) => typeof item === "object")) {
			throw new Error("Invalid input: jsonArray must be an array of objects.");
		}

		return jsonArray.filter((json) => {
			const keys = key.split(".");
			let currentObj: JSONValue | JSONObject = json;

			for (const nestedKey of keys) {
				if (typeof currentObj === "object" && currentObj !== null && Object.prototype.hasOwnProperty.call(currentObj,nestedKey)) {
					currentObj = currentObj[nestedKey] as JSONObject;
				} else {
					return false; // Key not found, condition is not met
				}
			}

			// Evaluate the condition on the last nested object
			const jsonValue = typeof currentObj === "string" ? (currentObj as string).toLowerCase() : currentObj;
			const queryValue = typeof value === "string" ? (value as string).toLowerCase() : value;

			switch (operator) {
			case "=":
				return jsonValue === queryValue;
			case ">":
				return parseFloat(jsonValue as string) > parseFloat(queryValue as string);
			case "<":
				return parseFloat(jsonValue as string) < parseFloat(queryValue as string);
			case ">=":
				return parseFloat(jsonValue as string) >= parseFloat(queryValue as string);
			case "<=":
				return parseFloat(jsonValue as string) <= parseFloat(queryValue as string);
			case "&&":
				return jsonValue && queryValue;
			case "||":
				return jsonValue || queryValue;
			case "<>":
				return jsonValue !== queryValue;
			default:
				throw new Error(`Unsupported operator: ${operator}`);
			}
		});
	},

	toHashMap: (json: JSONObject): HashMap => {
		const hashMap = new HashMap();

		const flattened = JSON.flatten(json);

		Object.entries(flattened).forEach(([key, value]) => {
			hashMap.put(key, value);
		});

		return hashMap;
	},
});

export default JSON;