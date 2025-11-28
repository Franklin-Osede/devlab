# 07 - Merge Configs

## 📋 Problem Statement

Combine two configuration objects, where the second overrides the first, without mutating the original objects.

## 🎯 Requirements

- Don't mutate original objects (immutability)
- Second object overrides properties of the first
- Return new combined object
- Handle nested objects (shallow merge)
- Handle edge cases (null, undefined)

## 🧠 Mental Pattern to Memorize

1. **Validate inputs**
2. **Spread operator** to create copy of first
3. **Spread second** to override
4. **Return** new object

## ⏱️ Expected Time

- First time: 10-15 minutes
- With practice: 3-5 minutes
- In interview: 2-3 minutes
