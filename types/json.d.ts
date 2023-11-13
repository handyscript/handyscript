/// ------------------------------- HANDY JSON @TYPES © HandyScript 11m/12d/23y -------------------------------

/**
 * Check if a JSON string is valid
 */
type SchemaProperty = {
  type: StringConstructor | NumberConstructor | BooleanConstructor | typeof Object;
  required?: boolean;
  regex?: RegExp;
  properties?: SchemaProperty;
};

/**
 * Check if a JSON Schema is valid
 */
type Schema<T> = {[key in keyof T]: SchemaProperty | [SchemaProperty]} | [SchemaProperty] | SchemaProperty;

/**
 * Represents a JSON value: string, number, boolean or null
 */
type JsonValue = string | number | boolean | null;

/**
 * Represents a JSON data: value, object of values or array of values
 */
type JsonData = JsonValue | JsonObject | JsonArray;

/**
 * Represents a JSON array: array of type JsonData
 */
type JsonArray = Array<JsonData>;

/**
 * Represents a JSON object: values of type JsonData
 */
type JsonObject = { [key: string]: JsonData};

/**
 * Represents a flattened JSON object: values of type JsonValue or JsonObject
 */
type FlattenedObject = { [key: string]: JsonValue | JsonObject };