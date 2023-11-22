# Handy Script Number

The `Number` module extends the `Number` object for more functionality and ease of use. when dealing with Number objects in JavaScript.

**© HandyScript Number 6/16/23 - Last Update: 11/22/23:**

## Table of Contents

- [Handy Script Number](#handy-script-number)
  - [Table of Contents](#table-of-contents)
  - [Utility Methods](#utility-methods)
    - [toHuman()](#tohuman)
    - [toReadable(separator?)](#toreadableseparator)
    - [toWords()](#towords)
    - [isFinite()](#isfinite)
    - [isSafeNumber()](#issafenumber)

## Utility Methods

### toHuman

The `toHuman` method returns a string representation of a number in a human-readable format. It formats numbers using abbreviations such as K (thousand), M (million), B (billion), T (trillion), etc.

```typescript
Number.prototype.toHuman(): string
```

**Returns:** `string` - The Representation of a number in a human-readable format.

**Example:**

```javascript
(999).toHuman(); // Returns "999"
(1000).toHuman(); // Returns "1K"
(1500000000).toHuman(); // Returns "1.5B"
```

### toReadable

The `toReadable` method returns a string representation of a number in a readable format. It adds separators to the number, making it easier to read. The default separator is `-`, but you can specify a custom separator.

```typescript
Number.prototype.toReadable (separator = "-"): string
```

**Parameters:**

- `separator` - The separator to be used. (Optional), defaults to `-`.

**Returns:** `string` - Representation of a number in a readable format.

**Example:**

```javascript
(999).toReadable(); // Returns "999"
(1000).toReadable(); // Returns "1-000"
(1500000000).toReadable("_"); // Returns "1_500_000_000"
```

### toWords

The `toWords` method converts an integer into words. It provides a textual representation of the number in English words.

```typescript
Number.prototype.toWords(): string
```

**Returns:** `string` - the textual representation of the number in English words.

**Error Handling:**

- Throws a `TypeError` for non-finite numbers.
- Throws a `RangeError` for numbers outside the safe range.

**Example:**

```javascript
(0).toWords(); // Returns "zero"
(22).toWords(); // Returns "twenty-two"
(8888).toWords(); // Returns "eight thousand, eight hundred eighty-eight"
```

### isFinite:

The `isFinite` method checks if a number is finite.

```typescript
Number.prototype.isFinite(): boolean
```

**Returns:** `boolean` - Is finite number

**Example:**

```javascript
(10).isFinite(); // Returns true
Infinity.isFinite(); // Returns false
```

### isSafeNumber

The `isSafeNumber` method checks if a number is within the safe integer range.

```typescript
Number.prototype.isSafeNumber(): boolean
```

**Returns:** `boolean` - Is the number within the safe integer range.

**Example:**

```javascript
(10).isSafeNumber(); // Returns true
(Number.MAX_SAFE_INTEGER + 1).isSafeNumber(); // Returns false
```

<p align="center"><b>© HandyScript Number 6/16/23</b></p>

This documentation provides a comprehensive guide to the Number module in HandyScript. The module extends the native JavaScript Number object, offering additional functionality and ease of use when dealing with numbers. The table of contents at the beginning [Back To Top](#table-of-contents) of the document allows for easy navigation. If you have any questions or suggestions, please contact us at <contact@handyscript.tech>.
