# Handy Script JSON

The `JSON` module extends the `JSON` object for more functionality and ease of use. when dealing with JSON objects in JavaScript.

**© HandyScript JSON 6/16/23 - Last Update: 9/25/23:**

## Table of Contents

- [Handy Script JSON](#handy-script-json)
  - [Table of Contents](#table-of-contents)
  - [Methods](#methods)
    - [isValid](#isvalid)
    - [flatten](#flatten)
    - [unflatten](#unflatten)
    - [merge](#merge)
    - [filter](#filter)
    - [sort](#sort)
    - [pluck](#pluck)
    - [transform](#transform)
    - [validateSchema](#validateschema)
    - [query](#query)
    - [toHashmap](#tohashmap)
  - [Types](#types)
    - [JSON](#json)
      - [JsonData](#jsondata)
      - [JsonValue](#jsonvalue)
      - [JsonObject](#jsonobject)
      - [JsonArray](#jsonarray)
      - [FlattenedObject](#flattenedobject)
    - [Schema](#schema)
      - [SchemaProperty](#schemaproperty)
      - [SchemaT](#schemat)

## Methods

### isValid

The `isValid` method checks if a string is a valid JSON string.

```typescript
JSON.isValid(json: string): boolean
```

**Parameters:**

- `json` - The JSON string to check

**Returns:** - `true` if the string is a valid JSON string, `false` otherwise

**Example:**

```javascript
const json = `{
  "name": "John",
  "age": 20,
  "weight": 70,
  "height": 180,
  "isMarried": true,
  "isStudent": true
}`;
console.log(JSON.isValid(json)); // true
```

### flatten

The `flatten` method flattens a JSON object into a single level object.

```typescript
JSON.flatten(json: JsonObject, prefix: string): FlattenedObject;
```

**Parameters:**

- `json` - The JSON object to flatten should be a valid JSON object type of [JsonObject](#jsonobject).
- `prefix` - The prefix to add to the keys of the flattened object.

**Returns:** - The flattened object, type of [FlattenedObject](#flattenedobject).

**Example:**

```javascript
const json = {
  name: "John",
  age: 20,
  weight: 70,
  height: 180,
  address: {
    city: "Marrakech",
    country: "Morocco",
  },
};
console.log(JSON.flatten(json, "person"));
```

**Output:**

```json
{
  "person.name": "John",
  "person.age": 20,
  "person.weight": 70,
  "person.height": 180,
  "person.address.city": "Marrakech",
  "person.address.country": "Morocco"
}
```

### unflatten

The `unflatten` method unflattens a flattened JSON object into a nested JSON object.

```typescript
JSON.unflatten(json: FlattenedObject): JsonObject;
```

**Parameters:**

- `json` - The flattened JSON object to unflatten should be a valid JSON object type of [FlattenedObject](#flattenedobject).

**Returns:** - The unflattened object, type of [JsonObject](#jsonobject).

**Example:**

```javascript
const json = {
  "person.name": "John",
  "person.age": 20,
  "person.weight": 70,
  "person.height": 180,
  "person.address.city": "Marrakech",
  "person.address.country": "Morocco",
};
console.log(JSON.unflatten(json));
```

**Output:**

```json
{
  "person": {
    "name": "John",
    "age": 20,
    "weight": 70,
    "height": 180,
    "address": {
      "city": "Marrakech",
      "country": "Morocco"
    }
  }
}
```

### merge

The `merge` method merges all the inputed JSON objects into a single JSON object with the keys-values merged.

```typescript
JSON.merge(...jsonData: JsonObject[]): JsonObject;
```

**Parameters:**

- `jsonData` - The JSON objects to merge should be a valid JSON object type of [JsonObject](#jsonobject).

**Returns:** - The merged object, type of [JsonObject](#jsonobject).

**Example:**

```javascript
const json1 = {
  name: "John",
  age: 20,
  weight: 70,
  height: 180,
  address: {
    city: "Marrakech",
    country: "Morocco",
  },
};

const json2 = {
  name: "Ali",
  age: 30,
  weight: 70,
  height: 180,
  address: {
    city: "Marrakech",
    country: "Morocco",
  },
  hobbies: ["football", "basketball", "tennis"],
};

console.log(JSON.merge(json1, json2));
```

**Output:**

```json
{
  "name": "Ali",
  "age": 30,
  "weight": 70,
  "height": 180,
  "address": {
    "city": "Marrakech",
    "country": "Morocco"
  },
  "hobbies": ["football", "basketball", "tennis"],
}
```

### filter

The `filter` method filters a JSON object by the specified keys. and a condition callback function.

```typescript
JSON.filter(json: JsonObject, condition: (value: JsonValue) => boolean): JsonObject;
```

**Parameters:**

- `json` - The JSON object to filter should be a valid JSON object type of [JsonObject](#jsonobject).
- `condition` - The condition callback function to filter the JSON object.
- `condition.value` - The value of the current key-value pair in the JSON object. type of [JsonValue](#jsonvalue).

**Returns:** - The filtered object, type of [JsonObject](#jsonobject).

**Example:**

```javascript
const json = {
  name: "John",
  age: 20,
  weight: 70,
  height: 180,
  address: {
    city: "Marrakech",
    country: "Morocco",
  },
  hobbies: ["football", "basketball", "tennis"],
};

console.log(JSON.filter(json, (value) => typeof value === "string"));
```

**Output:**

```json
{
  "name": "John",
  "address": {
    "city": "Marrakech",
    "country": "Morocco"
  }
}
```

### sort

The `sort` method sorts a JSON object by the specified key. and an order.

```typescript
JSON.sort(json: JsonObject[], key: string, order: SortOrder = "asc"): JsonObject[];
```

**Parameters:**

- `json` - The JSON object to sort should be a valid JSON object type of [JsonObject](#jsonobject).
- `key` - The key to sort the JSON object by.
- `order` - The order to sort the JSON object by. type of [SortOrder](https://github.com/handyscript/handyscript/blob/main/documentation/array.md#sort-order).

**Returns:** - The sorted object, type of [JsonObject](#jsonobject).

**Example:**

```javascript
const json = [
  {
    name: "John",
    age: 20,
    weight: 70,
    height: 180,
    address: {
      city: "Marrakech",
      country: "Morocco",
    },
    hobbies: ["football", "basketball", "tennis"],
  },
  {
    name: "Ali",
    age: 30,
    weight: 70,
    height: 180,
    address: {
      city: "Marrakech",
      country: "Morocco",
    },
    hobbies: ["football", "basketball", "tennis"],
  },
];

console.log(JSON.sort(json, "age", "desc"));
```

**Output:**

```json
[
  {
    "name": "Ali",
    "age": 30,
    "weight": 70,
    "height": 180,
    "address": {
      "city": "Marrakech",
      "country": "Morocco"
    },
    "hobbies": ["football", "basketball", "tennis"],
  },
  {
    "name": "John",
    "age": 20,
    "weight": 70,
    "height": 180,
    "address": {
      "city": "Marrakech",
      "country": "Morocco"
    },
    "hobbies": ["football", "basketball", "tennis"],
  }
]
```

### pluck

The `pluck` method plucks a JSON object by the specified keys, and Return an array of values of a key in a JSON object

```typescript
JSON.pluck(json: JsonObject[], key: string): JsonData[]
```

**Parameters:**

- `json` - The JSON object to pluck should be a valid JSON object type of [JsonObject](#jsonobject).
- `key` - The key to pluck the JSON object by.

**Returns:** - The plucked object, type of [JsonData](#jsondata).

**Example:**

```javascript
const json = [
  {
    name: "John",
    age: 20,
    weight: 70,
    height: 180,
    address: {
      city: "Marrakech",
      country: "Morocco",
    },
    hobbies: ["football", "basketball", "tennis"],
  },
  {
    name: "Ali",
    age: 30,
    weight: 70,
    height: 180,
    address: {
      city: "Marrakech",
      country: "Morocco",
    },
    hobbies: ["football", "basketball", "tennis"],
  },
];

console.log(JSON.pluck(json, "name"));
```

**Output:**

```json
["John", "Ali"]
```

### transform

The `transform` method transforms a JSON object by a `mapping` JSON object.

```typescript
JSON.transform(json: JsonObject, mapping: JsonObject): JsonObject;
```

**Parameters:**

- `json` - The JSON object to transform should be a valid JSON object type of [JsonObject](#jsonobject).
- `mapping` - The mapping JSON object to transform the JSON object by should be a valid JSON object type of [JsonObject](#jsonobject).

**Returns:** - The transformed object, type of [JsonObject](#jsonobject).

**Example:**

```javascript
const json = {
  name: "John",
  age: 20,
  weight: 70,
  height: 180,
  address: {
    city: "Marrakech",
    country: "Morocco",
  },
  hobbies: ["football", "basketball", "tennis"],
};

const mapping = {
  name: "fullname",
  age: "age",
  weight: "weight",
  height: "height",
  address: {
    city: "city",
    country: "country",
  },
  hobbies: "hobbies",
};

console.log(JSON.transform(json, mapping));
```

**Output:**

```json
{
  "fullname": "John",
  "age": 20,
  "weight": 70,
  "height": 180,
  "address": {
    "city": "Marrakech",
    "country": "Morocco"
  },
  "hobbies": ["football", "basketball", "tennis"],
}
```

### validateSchema

The `validateSchema` method validates a JSON object against a `schema` JSON Schema object.

```typescript
JSON.validateSchema<T>(data: JsonData, schema: Schema<T>): boolean;
```

**Parameters:**

- `data` - The JSON object to validate should be a valid JSON object type of [JsonData](#jsondata).
- `schema` - The schema JSON object to validate the JSON object against should be a valid JSON object type of [SchemaT](#schemat).

**Returns:** - `true` if the JSON object is valid against the schema, `false` otherwise.

**Example:**

```javascript
const data = {
  name: "John",
  age: 20,
  weight: 70,
  height: 180,
  address: {
    city: "Marrakech",
    country: "Morocco",
  },
  hobbies: ["football", "basketball", "tennis"],
};

const schema = {
  name: { type: String, required: true },
  age: { type: Number },
  weight: { type: Number },
  height: { type: Number },
  address: {
    type: Object,
    properties: {
      city: { type: String },
      country: { type: String },
    }
  },
};

console.log(JSON.validateSchema(data, schema)); // true
```

### query

The `query` method queries a JSON object by a string `query`

```typescript
JSON.query(json: JsonObject, query: string): JsonData;
```

**Parameters:**

- `json` - The JSON object to query should be a valid JSON object type of [JsonObject](#jsonobject).
- `query` - The query string to query the JSON object by.

**Returns:** - The queried object, type of [JsonData](#jsondata).

**Example:**

```javascript
const json = {
  name: "John",
  age: 20,
  weight: 70,
  height: 180,
  address: {
    city: "Marrakech",
    country: "Morocco",
  },
  hobbies: ["football", "basketball", "tennis"],
};

console.log(JSON.query(json, "address.city")); // Marrakech
```

### toHashmap

The `toHashmap` method converts a JSON object to a [Hashmap](https://github.com/handyscript/handyscript/blob/main/documentation/hashmap.md) object.

```typescript
JSON.toHashmap(json: JsonObject): Hashmap;
```

**Parameters:**

- `json` - The JSON object to convert should be a valid JSON object type of [JsonObject](#jsonobject).

**Returns:** - The converted object, type of [Hashmap](https://github.com/handyscript/handyscript/blob/main/documentation/hashmap.md).

**Example:**

```javascript
const json = {
  name: "John",
  age: 20,
  weight: 70,
  height: 180,
  address: {
    city: "Marrakech",
    country: "Morocco",
  },
  hobbies: ["football", "basketball", "tennis"],
};

console.log(JSON.toHashmap(json));
```

**Output:**

```json
// Type Of Hashmap
{
  "name": "John",
  "age": 20,
  "weight": 70,
  "height": 180,
  "address": {
    "city": "Marrakech",
    "country": "Morocco"
  },
  "hobbies": ["football", "basketball", "tennis"],
}
```

## Types

### JSON

Here are the types used in the `JSON` module.

#### JsonData

The `JsonData` type is a type of JSON data.

```typescript
type JsonData = JsonValue | JsonObject | JsonArray;
```

#### JsonValue

The `JsonValue` type is a type of JSON value.

```typescript
type JsonValue = string | number | boolean | null;
```

#### JsonObject

The `JsonObject` type is a type of JSON object.

```typescript
type JsonObject = {
  [key: string]: JsonData
};
```

#### JsonArray

The `JsonArray` type is a type of JSON array.

```typescript
type JsonArray = Array<JsonData>;
```

#### FlattenedObject

The `FlattenedObject` type is a type of flattened JSON object.

```typescript
type FlattenedObject = {
  [key: string]: JsonValue | JsonObject
};
```

### Schema

The `Schema` type is a type of JSON Schema object.

#### SchemaProperty

The `SchemaProperty` type is a type of JSON Schema property.

```typescript
type SchemaProperty = {
  type: StringConstructor | NumberConstructor | BooleanConstructor | typeof Object;
  required?: boolean;
  regex?: RegExp;
  properties?: SchemaProperty;
};
```

#### SchemaT

The `SchemaT` type is a type of JSON Schema.

```typescript
  type Schema<T> = {[key in keyof T]: SchemaProperty | [SchemaProperty]} | [SchemaProperty] | SchemaProperty;
```

<p align="center"><b>© HandyScript JSON 6/16/23</b></p>

This documentation provides a comprehensive guide to the Json module in HandyScript. The module extends the native JavaScript Json object, offering additional functionality and ease of use when working with JSON. The table of contents at the beginning [Back To Top](#table-of-contents) of the document allows for easy navigation. If you have any questions or suggestions, please contact us at <contact@handyscript.tech>.
