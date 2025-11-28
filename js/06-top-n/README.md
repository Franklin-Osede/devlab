# 06 - Top N Most Frequent

## 📋 Problem Statement

Given an array of elements (strings, numbers, etc.), return the N most frequent elements.

## 🎯 Requirements

- If input is not array or n <= 0, return `[]`
- Count occurrences of each element
- Sort by frequency descending
- Return only the first N elements
- Handle ties (maintain original order)

## 🧠 Mental Pattern to Memorize

1. **Validate input**
2. **Count occurrences** (use Map or object)
3. **Convert to array** of [value, count]
4. **Sort by count** descending
5. **Take first N** and extract values
6. **Return** array of values

## ⏱️ Expected Time

- First time: 15-20 minutes
- With practice: 5-7 minutes
- In interview: 3-5 minutes
