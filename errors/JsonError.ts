/// ------------------------------- HANDY JSON - ERROR © HandyScript 11m/18d/23y -------------------------------

/**
 * Error thrown when a `JSON` Object is invalid
 */
export class JSONError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "JSONError";
	}
}

/**
 * Error thrown when a `JSON` Object is invalid when parsed by a `Schema`
 */
export class JSONValidationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "JSONValidationError";
	}
}