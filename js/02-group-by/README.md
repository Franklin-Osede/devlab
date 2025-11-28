# 02 - Group By

## 📋 Problem Statement

Group array elements by a specific property or by the result of a function.

Given an array of elements and a key (string) or function, return an object where:
- The **keys** are the unique values of that property/function
- The **values** are arrays with all elements that have that key

## 🎯 Requirements

- If input is not an array, return `{}`
- Must work with string (property name) or function
- Handle elements where the property doesn't exist
- Return empty object if array is empty

## 💡 Examples

### Example 1: Group by property
```javascript
const users = [
  { id: 1, name: "Ana", country: "Spain" },
  { id: 2, name: "Luis", country: "Mexico" },
  { id: 3, name: "Carmen", country: "Spain" }
];

groupBy(users, "country");
// Result: { Spain: [user1, user3], Mexico: [user2] }
```

### Example 2: Group by function
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

groupBy(numbers, n => n % 2 === 0 ? "even" : "odd");
// Result: { even: [2, 4, 6], odd: [1, 3, 5] }
```

## 🧠 Mental Pattern to Memorize

1. **Validate input** → `if (!Array.isArray(items)) return {}`
2. **Determine key function** → string or function
3. **Create accumulator object** → `{}`
4. **Iterate and group** → `reduce` or `forEach`
5. **Return grouped object**

## ⏱️ Expected Time

- First time: 15-20 minutes
- With practice: 5-7 minutes
- In interview: 3-5 minutes
