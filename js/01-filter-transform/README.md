# 01 - Filter and Transform

## 📋 Problem Statement

Given a list of elements (users, products, orders, etc.), you must:

1. **Filter** only elements that meet a condition (e.g., active, available, etc.)
2. **Sort** by a specific property (date, price, name, etc.)
3. **Transform** to a simpler format (only the necessary properties)
4. **Handle** edge cases (invalid input, empty arrays, etc.)

## 🎯 Requirements

- If input is not an array, return `[]`
- Filter elements that meet the condition
- Sort by the specified property (ascending or descending)
- Map to an object with only the required properties
- Handle `null` or `undefined` values in elements

## 💡 Examples

### Example 1: Active users
```javascript
const users = [
  { id: 1, name: "Ana", email: "ana@test.com", active: true, createdAt: "2024-01-15" },
  { id: 2, name: "Luis", email: "luis@test.com", active: false, createdAt: "2024-01-01" },
  { id: 3, name: "Carmen", email: "carmen@test.com", active: true, createdAt: "2024-02-01" }
];

// Expected result: only active users, sorted by date, with id, name, email
```

### Example 2: Available products
```javascript
const products = [
  { id: 1, name: "Laptop", price: 999, stock: 5, category: "electronics" },
  { id: 2, name: "Mouse", price: 25, stock: 0, category: "electronics" },
  { id: 3, name: "Keyboard", price: 75, stock: 10, category: "electronics" }
];

// Expected result: only with stock > 0, sorted by price, with id, name, price
```

## 🧠 Mental Pattern to Memorize

1. **Validate input** → `if (!Array.isArray(input)) return []`
2. **Filter** → `.filter(item => condition)`
3. **Sort** → `.sort((a, b) => comparison)`
4. **Transform** → `.map(item => ({ properties }))`
5. **Return** → `return result`

## ⏱️ Expected Time

- First time: 15-20 minutes
- With practice: 5-7 minutes
- In interview: 3-5 minutes
