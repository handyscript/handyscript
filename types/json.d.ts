/// ------------------------------- HANDY JSON @TYPES © HandyScript 11m/12d/23y -------------------------------

/**
 * Check if a JSON property is valid
 */
interface SchemaProperty {
  type?: StringConstructor | NumberConstructor | BooleanConstructor | typeof Object;
  types?: Array<StringConstructor | NumberConstructor | BooleanConstructor>;
  required?: boolean;
  regex?: RegExp;
  properties?: SchemaProperty;
  items?: SchemaProperty;
}

/**
 * Check if a JSON object is valid
 */
interface SchemaObject {
  [key: string]: SchemaProperty | [SchemaProperty];
}

/**
 * Check if a JSON Schema is valid
 */
type Schema<T> = {[key in keyof T]: SchemaProperty | [SchemaProperty]} | [SchemaProperty] | SchemaProperty;

/**
 * Represents a JSON value: string, number, boolean or null
 */
type JSONValue = string | number | boolean | null;

/**
 * Represents a JSON data: value, object of values or array of values
 */
type JSONData = JSONValue | JSONObject | JSONArray;

/**
 * Represents a JSON array: array of type JSONData
 */
type JSONArray = Array<JSONData>;

/**
 * Represents a JSON object: values of type JSONData
 */
interface JSONObject { [key: string]: JSONData }

/**
 * Represents a flattened JSON object: values of type JSONValue or JSONObject
 */
interface FlattenedObject { [key: string]: JSONValue }

/**
 * Represents a Map to transform/rename keys of a JSON object
 */
interface JSONTransformMap { [key: string]: string }

/**
 * Represents a JSON query operations
 */
type JSONQueryOperations = "=" | ">" | "<" | ">=" | "<=" | "&&" | "||" | "<>";