# 04 - Flatten Arrays

## 📋 Problem Statement

Flatten a nested array to a single level or completely (depending on specified depth).

Implement `flatten(array, depth = Infinity)` without using native `.flat()`.

## 🎯 Requirements

- If input is not an array, return it as is
- If depth is 0, return array without modification
- If depth is Infinity, flatten completely
- Handle empty arrays and deeply nested arrays

## 🧠 Mental Pattern to Memorize

1. **Validate input** → if not array, return as is
2. **Check depth** → if 0, return without modification
3. **Recursion** → if array and depth > 0, flatten recursively
4. **Concatenate** → join flattened arrays
5. **Return** → flat array

## ⏱️ Expected Time

- First time: 15-20 minutes
- With practice: 5-7 minutes
- In interview: 3-5 minutes
