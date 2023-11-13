# Handy Script Date Format

This module contains extensions to the built-in `Date` module. It adds a few methods to the `Date` class to make it easier to work with dates.

**© HandyScript Date 9/17/23 - Last Update: 9/25/23:**

## Table of Contents

- [Handy Script Date Format](#handy-script-date-format)
  - [Table of Contents](#table-of-contents)
  - [Utility Methods](#utility-methods)
    - [Timestamp](#timestamp)
    - [daysInMonth](#daysinmonth)
    - [daysInYear](#daysinyear)

## Utility Methods

### Timestamp

The `timestamp` method returns the accurate date from in external API based on the current `timezone` from the `Intl` module.

```typescript
Date.prototype.timestamp(timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone): Promise<Date>
```

**Parameters:**

- `timeZone` - The timezone to use for the timestamp. Defaults to the current timezone. (Optional), defaults to `Intl.DateTimeFormat().resolvedOptions().timeZone`

**Returns:** `Promise<Date>` - The accurate date from the external API.

**Example:**

```javascript
const date = new Date();  
date.timestamp().then((timestamp) => {  
  console.log(timestamp);  // 2021-09-25T18:00:00.000Z => Type of Date
});
```

### daysInMonth

The `daysInMonth` method returns the number of days in the month of the current date.

```javascript
Date.prototype.daysInMonth(): number
```

**Returns:** `number` - The number of days in the month of the current date.

**Example:**

```javascript
const date = new Date();
console.log(date.daysInMonth());  // 30
```

### daysInYear

The `daysInYear` method returns the number of days in the year of the current date.

```javascript
Date.prototype.daysInYear(): number
```

**Returns:** `number` - The number of days in the year of the current date.

**Example:**

```javascript
const date = new Date();
console.log(date.daysInYear());  // 365
```

<p align="center"><b>© HandyScript Date 9/17/23</b></p>

This Markdown documentation is detailed and extensive to use the `Date` module to its full potential, along with their descriptions and TypeScript function signatures. The table of contents at the beginning [Back To Top](#table-of-contents) of the document allows for easy navigation. If you have any questions or suggestions, please contact us at <vvhybe@hotmail.com>.
