# 05 - Remove Duplicates

## 📋 Problem Statement

Remove duplicate elements from an array using a configurable strategy.

Implement `uniqueBy(items, keyOrFn)` that:
- If `keyOrFn` is string: removes duplicates by that property
- If `keyOrFn` is function: removes duplicates by function result
- If not provided: removes duplicates by value

## 🎯 Requirements

- If input is not array, return `[]`
- Keep the first element of each duplicate
- Work with primitives and objects
- Handle edge cases (null, undefined)

## 🧠 Mental Pattern to Memorize

1. **Validate input**
2. **Determine key function** (string, function, or identity)
3. **Use Set for tracking** seen keys
4. **Filter** keeping only firsts
5. **Return** unique array

## ⏱️ Expected Time

- First time: 15-20 minutes
- With practice: 5-7 minutes
- In interview: 3-5 minutes
