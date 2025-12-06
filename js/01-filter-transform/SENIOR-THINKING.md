# Senior Dev Thinking Process

Hello everyone! Today I'm going to walk through a problem where I'm asked to do certain things, and then I'll solve it step by step using JavaScript. Let me start by reading through the problem statement and thinking out loud about my approach.

---

## Problem Statement

```
Given a list of elements (users, products, orders, etc.), you must:
```

*"Ok, input/output function. Takes array, returns something."*

```
1. **Filter** only elements that meet a condition (e.g., active, available, etc.)
```

*"Filter first. Use .filter(). Reduces dataset early."*

```
2. **Sort** by a specific property (date, price, name, etc.)
```

*"Sort after filter. More efficient. Use .sort() with comparison."*

```
3. **Transform** to a simpler format (only the necessary properties)
```

*"Transform = .map(). Extract only what's needed."*

```
4. **Handle** edge cases (invalid input, empty arrays, etc.)
```

*"Edge cases. Validate input first. Early return."*

---

## Requirements

```
- If input is not an array, return `[]`
```

*"Validate first. Return [] if not array."*

```
- Filter elements that meet the condition
```

*"Standard .filter() operation."*

```
- Sort by the specified property (ascending or descending)
```

*"Sort by property. Convert dates to Date objects for comparison."*

```
- Map to an object with only the required properties
```

*".map() to new objects. Immutability."*

```
- Handle `null` or `undefined` values in elements
```

*"Use optional chaining (?.) for null safety."*

---

## Examples

```
### Example 1: Active users
// Expected result: only active users, sorted by date, with id, name, email
```

*"Filter active=true, sort by createdAt, map to id/name/email. Order: filter → sort → map."*

```
### Example 2: Available products
```

*"Same pattern. Filter stock > 0, sort, map. Same approach."*

---

## Overall Approach

*"Pattern: validate → filter → sort → map. Pure function with method chaining. Filter first to reduce data, then sort smaller set, then transform."*
