/// ------------------------------- HANDY OBJECTS © HandyScript 9m/20d/23y -------------------------------
// extend the Object class with some handy methods

declare global {
  interface Object {
    /**
     * Retutn a deep clone of the object.
     */
    clone(obj: Record<string, unknown>): Record<string, unknown>;

    /**
     * Returns a new object with the properties of the passed objects.
     * @param objects The objects to merge.
     * @example
     * Object.merge({a:1}, {b:2}) // output: {a:1, b:2}
     */
    merge(...objects: object[]): object;

    /**
     * Returns a new `merged` object deep merged from the passed objects.
     */
    deepMerge(target: Record<string, unknown>, ...sources: Record<string, unknown>[]): Record<string, unknown>;

    /**
     * Loops through the object and calls the callback function for each property(key-value pair).
     * @param obj The object to loop through.
     * @param callback The function to call for each property.
     * @example
     * Object.forPropertys({a:1, b:2}, (key, value) => {
     *   console.log(key, value)
     * })
     */
    forProperties<Obj extends object>(o: Obj, callback: (key: keyof Obj, value: Obj[keyof Obj]) => void): void;

    /**
     * drop an entry from an object
     * @param obj The object to drop the entry from.
     * @param key The key of the entry to drop.
     * @example
     * Object.dropEntry({a:1, b:2}, "a") // output: {b:2}
     */
    dropEntry(obj: object, key: string): object;
  }
}

Object.prototype.clone = function (obj: Record<string, unknown>): Record<string, unknown> {
	return JSON.parse(JSON.stringify(obj)) as Record<string, unknown>;
};

Object.prototype.merge = function (...objects: object[]): object {
	return Object.assign({}, ...objects);
};

Object.prototype.deepMerge = function (target: Record<string, unknown>, ...sources: Record<string, unknown>[]): Record<string, unknown> {
	if (sources.length < 2) {
		throw new Error("At least two sources must be provided for merging.");
	}

	const targetMerge = Object.clone(target);

	for (let i = 0; i < sources.length; i++) {
		const source = sources[i];

		for (const key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				if (typeof source[key] === "object" && source[key] !== null) {
					if (!targetMerge[key]) {
						targetMerge[key] = Array.isArray(source[key]) ? [] : {};
					}
					targetMerge[key] = Object.deepMerge(targetMerge[key] as Record<string, unknown>, source[key] as Record<string, unknown>); // Recursively merge objects
				} else {
					targetMerge[key] = source[key];
				}
			}
		}
	}

	return targetMerge;
};

Object.prototype.forProperties = function <Obj extends object>(o: Obj, callback: (key: keyof Obj, value: Obj[keyof Obj]) => void): void {
	for (const key in o) {
		if (Object.prototype.hasOwnProperty.call(o, key)) {
			callback(key, o[key]);
		}
	}
};

Object.prototype.dropEntry = function (obj: Record<string, unknown>, key: string): Record<string, unknown> {
	const result = Object.clone(obj);
	delete result[key];
	return result;
};

export default Object;
