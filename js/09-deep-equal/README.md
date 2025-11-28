# 09 - Deep Equal

## 📋 Problem Statement

Compare two values deeply, verifying that all nested objects and arrays are equal.

## 🎯 Requirements

- Compare nested objects and arrays recursively
- Compare primitives with ===
- Verify same number of keys in objects
- Verify same order and values in arrays
- Handle null and undefined

## 🧠 Mental Pattern to Memorize

1. **Compare with ===** → if equal, return true
2. **Validate types** → both must be objects
3. **Compare keys** → same number and same keys
4. **Compare values** → recursively for each key
5. **Return** true if everything matches

## ⏱️ Expected Time

- First time: 20-25 minutes
- With practice: 7-10 minutes
- In interview: 5-7 minutes
