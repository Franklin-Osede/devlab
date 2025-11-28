# 03 - Normalize Data

## 📋 Problem Statement

Convert an array of objects with `id` into an object where keys are the `id` values and values are the complete objects.

This is useful for:
- Optimizing ID lookups (O(1) instead of O(n))
- Creating data indexes
- Preparing data for React/Redux states

## 🎯 Requirements

- If input is not an array, return `{}`
- If an object doesn't have `id`, skip it
- Handle duplicate `id` (last one overwrites)
- Return empty object if array is empty

## 💡 Examples

### Example 1: Users
```javascript
const users = [
  { id: 1, name: "Ana", email: "ana@test.com" },
  { id: 2, name: "Luis", email: "luis@test.com" }
];

normalizeById(users);
// Result: { 1: { id: 1, name: "Ana", ... }, 2: { id: 2, name: "Luis", ... } }
```

### Example 2: Products
```javascript
const products = [
  { id: "prod-1", name: "Laptop", price: 999 },
  { id: "prod-2", name: "Mouse", price: 25 }
];

normalizeById(products);
// Result: { "prod-1": {...}, "prod-2": {...} }
```

## 🧠 Mental Pattern to Memorize

1. **Validate input** → `if (!Array.isArray(items)) return {}`
2. **Create accumulator object** → `{}`
3. **Iterate and assign** → `reduce` or `forEach`
4. **Use id as key** → `acc[item.id] = item`
5. **Return normalized object**

## ⏱️ Expected Time

- First time: 10-15 minutes
- With practice: 3-5 minutes
- In interview: 2-3 minutes
