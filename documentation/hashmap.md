# Handy Script Hashmap

The `Hashmap` class is a simple implementation of a hashmap in JavaScript. It is a wrapper around the native `Map` class.

**© HandyScript HashMap 5/27/23 - Last Update: 9/25/23:**

## Table of Contents

- [Handy Script Hashmap](#handy-script-hashmap)
  - [Table of Contents](#table-of-contents)
  - [Methods](#methods)
    - [constructor](#constructor)
    - [get](#get)
    - [put](#put)
    - [update](#update)
    - [upsert](#upsert)
    - [remove](#remove)
    - [contains](#contains)
    - [includes](#includes)
    - [keys](#keys)
    - [values](#values)
    - [size](#size)
    - [clear](#clear)
    - [isEmpty](#isempty)
    - [forEach](#foreach)
    - [filter](#filter)
    - [entries](#entries)
    - [toObject](#toobject)
    - [toArray](#toarray)
    - [toFlatArray](#toflatarray)
    - [getKeyByValue](#getkeybyvalue)
    - [getKeysByValue](#getkeysbyvalue)
    - [updateKeyByValue](#updatekeybyvalue)

## Methods

### constructor

The `constructor` method creates a new `Hashmap` object.

```typescript
constructor(obj?: Record<string, unknown>): Hashmap
```

**Parameters:**

- `obj` - The object to initialize the hashmap with. (Optional)

**Returns:** `Hashmap` - The new `Hashmap` object.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap);  // Hashmap { a: 1, b: 2, c: 3 }
```

### get

The `get` method returns the value of the given key.

```typescript
Hashmap.prototype.get(key: string): unknown
```

**Parameters:**

- `key` - The key to get the value of.
  
**Returns:** `unknown` - The value of the given key.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.get('a'));  // 1
```

### put

The `put` method adds a new key-value pair to the `Hashmap` object.

```typescript
Hashmap.prototype.put(key: string, value: unknown): Hashmap
```

**Parameters:**

- `key` - The key to set the value of.
- `value` - The value to set the key to.

**Returns:** `Hashmap` - The `Hashmap` object with the new key-value pair.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
hashmap.put('d', 4);
console.log(hashmap);  // Hashmap { a: 1, b: 2, c: 3, d: 4 }
```

### update

The `update` method updates the value of the given key.
> **⚠️ Note:** It will throw an error if the key does not exist.

```typescript
Hashmap.prototype.update(key: string, value: unknown): Hashmap
```

**Parameters:**

- `key` - The key to update the value of.
- `value` - The value to update the key to.

**Returns:** `Hashmap` - The `Hashmap` object with the updated key-value pair.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
hashmap.update('a', 4);
console.log(hashmap)  // Hashmap { a: 4, b: 2, c: 3, d: 4 }
```

### upsert

The `upsert` method updates the value of the given key if it exists, otherwise it adds a new key-value pair.

```typescript
Hashmap.prototype.upsert(key: string, value: unknown): Hashmap
```

**Parameters:**

- `key` - The key to update the value of.
- `value` - The value to update the key to.
  
**Returns:** `Hashmap` - The `Hashmap` object with the upserted key-value pair.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
hashmap.upsert('a', 4);
hashmap.upsert('d', 4);
console.log(hashmap)  // Hashmap { a: 4, b: 2, c: 3, d: 4 }
```

### remove

The `remove` method removes the given key-value pair from the `Hashmap` object.

```typescript
Hashmap.prototype.remove(key: string): boolean
```

**Parameters:**

- `key` - The key to remove the value of.
  
**Returns:** `boolean`  - returns `true` if an element in the `Hashmap` existed and has been removed, or `false` if the element does not exist.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
hashmap.remove('a'); // true
console.log(hashmap)  // Hashmap { b: 2, c: 3 }
```

### contains

The `contains` method checks if the `Hashmap` object contains all the given keys.

```typescript
Hashmap.prototype.contains(...keys: string[]): boolean
```

**Parameters:**

- `keys` - The keys to check if they exist in the `Hashmap` object.

**Returns:** `boolean` - returns `true` if the `Hashmap` object contains the given keys, otherwise `false`.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
hashmap.contains('a', 'b'); // true
hashmap.contains('a', 'd'); // false
```

### includes

The `includes` method checks if the `Hashmap` object contains any of the given keys.

```typescript
Hashmap.prototype.includes(...keys: string[]): boolean
```

**Parameters:**

- `keys` - The keys to check if they exist in the `Hashmap` object.

**Returns:** `boolean` - returns `true` if the `Hashmap` object includes the given keys, otherwise `false`.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
hashmap.includes('a', 'b'); // true
hashmap.includes('a', 'd'); // true
hashmap.includes('d', 'e'); // false
```

### keys

The `keys` method returns an array of the keys in the `Hashmap` object.

```typescript
Hashmap.prototype.keys(): string[]
```

**Returns:** `string[]` - An array of the keys in the `Hashmap` object.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.keys()); // [ 'a', 'b', 'c' ]
```

### values

The `values` method returns an array of the values in the `Hashmap` object.

```typescript
Hashmap.prototype.values(): unknown[]
```

**Returns:** `unknown[]` - An array of the values in the `Hashmap` object.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.values()); // [ 1, 2, 3 ]
```

### size

The `size` method returns the number of key-value pairs in the `Hashmap` object.

```typescript
Hashmap.prototype.size(): number
```

**Returns:** `number` - The number of key-value pairs in the `Hashmap` object.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.size()); // 3
```

### clear

The `clear` method removes all key-value pairs from the `Hashmap` object.

```typescript
Hashmap.prototype.clear(): void
```

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
hashmap.clear();
console.log(hashmap); // Hashmap {}
```

### isEmpty

The `isEmpty` method checks if the `Hashmap` object is empty.

```typescript
Hashmap.prototype.isEmpty(): boolean
```

**Returns:** `boolean` - returns `true` if the `Hashmap` object is empty, otherwise `false`.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.isEmpty()); // false
hashmap.clear();
console.log(hashmap.isEmpty()); // true
```

### forEach

The `forEach` method executes a provided function once for each key-value pair in the `Hashmap` object.

```typescript
Hashmap.prototype.forEach(callback: (value: unknown, key: string) => void): void
```

**Parameters:**

- `callback` - Function to execute for each key-value pair. The callback is invoked with three arguments: the value of the key-value pair, the key of the key-value pair, and the `Hashmap` object being traversed.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
hashmap.forEach((value, key) => {
  console.log(key, value);
});
```

### filter

The `filter` method creates a new `Hashmap` object with all key-value pairs that pass the test implemented by the provided function.

```typescript
Hashmap.prototype.filter(callback: (value: unknown, key: string) => boolean): Hashmap
```

**Parameters:**

- `callback` - Function to test each key-value pair of the `Hashmap` object. The callback is invoked with three arguments: the value of the key-value pair, the key of the key-value pair, and the `Hashmap` object being traversed.

**Returns:** `Hashmap` - A new `Hashmap` object with the key-value pairs that pass the test. If no key-value pairs pass the test, an empty `Hashmap` object will be returned.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
const filtered = hashmap.filter((value, key) => {
  return value > 1;
});
console.log(filtered); // Hashmap { b: 2, c: 3 }
```

### entries

The `entries` method returns an array of the key-value pairs in the `Hashmap` object.

```typescript
Hashmap.prototype.entries(): [string, unknown][]
```

**Returns:** `[string, unknown][]` - An array of the key-value pairs in the `Hashmap` object.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.entries()); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

### toObject

The `toObject` method returns a plain object representation of the `Hashmap` object.

```typescript
Hashmap.prototype.toObject(): Record<string, unknown>
```

**Returns:** `Record<string, unknown>` - A plain object representation of the `Hashmap` object.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.toObject()); // { a: 1, b: 2, c: 3 }
```

### toArray

The `toArray` method returns an array representation of the `Hashmap` object.

```typescript
Hashmap.prototype.toArray(): [string, unknown][]
```

**Returns:** `[string, unknown][]` - An array representation of the `Hashmap` object.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.toArray()); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

### toFlatArray

The `toFlatArray` method returns a flattened array representation of the `Hashmap` object.

```typescript
Hashmap.prototype.toFlatArray(): [string, unknown]
```

**Returns:** `[string, unknown]` - A flattened array representation of the `Hashmap` object.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.toFlatArray()); // [ 'a', 1, 'b', 2, 'c', 3 ]
```

### getKeyByValue

The `getKeyByValue` method returns the key of the given value.
> **⚠️ Note:** If 2 or more keys have the same value, the first key will be returned.

```typescript
Hashmap.prototype.getKeyByValue(value: unknown): string | null
```

**Parameters:**

- `value` - The value to get the key of.

**Returns:** `string | null` - The key of the given value, or `null` if the value does not exist.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3 });
console.log(hashmap.getKeyByValue(2)); // b
console.log(hashmap.getKeyByValue(4)); // null
```

### getKeysByValue

The `getKeysByValue` method returns an array of keys of the given value.

```typescript
Hashmap.prototype.getKeysByValue(value: unknown): string[]
```

**Parameters:**

- `value` - The value to get the keys of.

**Returns:** `string[]` - An array of keys of the given value, or an empty array if the value does not exist.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3, d: 2 });
console.log(hashmap.getKeysByValue(2)); // [ 'b', 'd' ]
console.log(hashmap.getKeysByValue(4)); // []
```

### updateKeyByValue

The `updateKeyByValue` method updates the key of the given value.
> **⚠️ Note:** If 2 or more keys have the same value, the first key will be updated.

```typescript
Hashmap.prototype.updateKeyByValue(value: unknown, key: string): void
```

**Parameters:**

- `value` - The value to update the key of.
- `key` - The key to update the value of.

**Example:**

```javascript
const hashmap = new Hashmap({ a: 1, b: 2, c: 3, d: 2 });
hashmap.updateKeyByValue(2, 'e');
console.log(hashmap); // Hashmap { a: 1, e: 2, c: 3, d: 2 }
```

**© HandyScript HashMap 5/27/23:**

This Markdown documentation is detailed and extensive to use the `HashMap` module to its full potential, along with their descriptions and TypeScript function signatures. The table of contents at the beginning [Back To Top](#table-of-contents) of the document allows for easy navigation. If you have any questions or suggestions, please contact us at <vvhybe@hotmail.com>.
