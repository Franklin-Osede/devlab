# 08 - Deep Clone

## 📋 Problem Statement

Create a deep copy of an object or array, cloning all nested objects and arrays.

## 🎯 Requirements

- Clone nested objects and arrays recursively
- Handle primitives (return as is)
- Handle null and undefined
- Don't clone functions, Date, Map, Set (simple version)
- Return new object/array without shared references

## 🧠 Mental Pattern to Memorize

1. **Validate type** → if primitive, return as is
2. **If array** → clone each element recursively
3. **If object** → clone each property recursively
4. **Return** new object/array

## ⏱️ Expected Time

- First time: 20-25 minutes
- With practice: 7-10 minutes
- In interview: 5-7 minutes
