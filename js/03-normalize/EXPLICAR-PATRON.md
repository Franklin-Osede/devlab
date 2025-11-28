# 🎥 Script for LinkedIn Video: 03 - Normalize Data (JavaScript)

## 🚀 Hook (0-15 seconds)
"Normalizing data is a pattern you constantly use in frontend. Let me show you how to do it right."

## 📝 Problem (15-45 seconds)
"You have an array of objects with id and need to convert it to an object indexed by id for fast lookups.

For example, from this:
```
[{ id: 1, name: 'Ana' }, { id: 2, name: 'Luis' }]
```

To this:
```
{ 1: { id: 1, name: 'Ana' }, 2: { id: 2, name: 'Luis' } }
```

This allows me to search by id in O(1) instead of O(n)."

## 🧠 My Mental Approach (45-90 seconds)
"My mental pattern for this is:

1. Validate that it's an array
2. Use reduce to transform array → object
3. Use the id as the object key
4. Assign the complete object as value
5. Return the normalized object

Reduce is perfect here because I transform an array into an object."

## 💻 Code Step by Step (90-240 seconds)
"Let me write the function step by step:

First I validate that it's an array. If not, I return an empty object.
[Write: if (!Array.isArray(items)) return {};]

Now I use reduce because I transform array into object. The accumulator is an empty object.
[Write: return items.reduce((byId, item) => { ... }, {});]

Inside reduce, I validate that the item has id. If it doesn't have id, I skip it.
[Write: if (item?.id == null) return byId;]

Then I use the id as key and assign the complete object as value.
[Write: byId[item.id] = item;]

I return the accumulator for the next iteration.
[Write: return byId;]

Done. Now I run the tests to verify.
[Run: npm test js/03-normalize]"

## 💡 Why It's Important (240-270 seconds)
"I use this pattern EVERY day at work:
- In Redux to normalize states
- In React to create data indexes
- When I need O(1) lookup by id
- To optimize renders avoiding linear searches

It's fundamental in modern frontend. Without this, your components would be slow."
