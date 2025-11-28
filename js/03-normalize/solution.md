# Solution: Normalize Data

## 🧠 Mental Pattern (MEMORIZE THIS)

This pattern is **super common** when working with frontend states (React, Redux) or when you need to create data indexes for fast lookups.

### Universal Structure

```javascript
function normalizeById(items) {
  // 1. VALIDATE INPUT
  if (!Array.isArray(items)) return {};
  
  // 2. REDUCE TO OBJECT INDEXED BY ID
  return items.reduce((byId, item) => {
    if (item?.id == null) return byId; // Skip if no id
    byId[item.id] = item;
    return byId;
  }, {});
}
```

## 📝 Step-by-Step Explanation

### Step 1: Validation
```javascript
if (!Array.isArray(items)) return {};
```

### Step 2: Reduce to Transform Array → Object
**Why reduce?** Because you transform an array into an object. It's the perfect method.

```javascript
return items.reduce((byId, item) => {
  // byId is the accumulator (object)
  // item is each element of the array
}, {});
```

### Step 3: Validate that it has ID
```javascript
if (item?.id == null) return byId;
// If it doesn't have id, skip this element
```

### Step 4: Assign to Object
```javascript
byId[item.id] = item;
// Use id as key, complete object as value
```

## ✅ Final Code (Memorize the structure)

```javascript
function normalizeById(items) {
  if (!Array.isArray(items)) return {};

  return items.reduce((byId, item) => {
    if (item?.id == null) return byId;
    byId[item.id] = item;
    return byId;
  }, {});
}
```

## 🔑 Key Points to Memorize

1. **Use `reduce` to transform array → object**
2. **Validate that item has `id` before assigning**
3. **Id can be number or string**
4. **If there are duplicate ids, last one overwrites**
5. **Return empty object if invalid input**

## 🎯 Common Variations

- Normalize with custom key function
- Normalize and transform (only certain properties)
- Normalize nested arrays
- Denormalize (object → array)

**All follow the same mental pattern with reduce.**
