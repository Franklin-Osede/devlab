# Solution: Group By

## 🧠 Mental Pattern (MEMORIZE THIS)

This pattern is **super common** when you need to organize data for dashboards, reports, or UI groupings.

### Universal Structure

```javascript
function groupBy(items, keyOrFn) {
  // 1. VALIDATE INPUT
  if (!Array.isArray(items)) return {};
  
  // 2. DETERMINE KEY FUNCTION
  const getKey = typeof keyOrFn === 'function' 
    ? keyOrFn 
    : (item) => item?.[keyOrFn];
  
  // 3. REDUCE TO GROUPED OBJECT
  return items.reduce((groups, item) => {
    const key = getKey(item);
    if (key === undefined) return groups; // Skip if no key
    
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}
```

## 📝 Step-by-Step Explanation

### Step 1: Validation
```javascript
if (!Array.isArray(items)) return {};
```

### Step 2: Flexible Key Function
**Why?** Because sometimes you group by property, other times by function result.

```javascript
const getKey = typeof keyOrFn === 'function'
  ? keyOrFn                    // If function, use it directly
  : (item) => item?.[keyOrFn]; // If string, access the property
```

### Step 3: Reduce to Object
**Why `reduce`?** Because you transform an array into an object. It's the perfect method.

```javascript
return items.reduce((groups, item) => {
  const key = getKey(item);
  
  // If key doesn't exist, skip the element
  if (key === undefined) return groups;
  
  // If group doesn't exist, create it
  if (!groups[key]) {
    groups[key] = [];
  }
  
  // Add element to group
  groups[key].push(item);
  
  return groups;
}, {});
```

## ✅ Final Code (Memorize the structure)

```javascript
function groupBy(items, keyOrFn) {
  if (!Array.isArray(items)) return {};

  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : (item) => item?.[keyOrFn];

  return items.reduce((groups, item) => {
    const key = getKey(item);
    if (key === undefined) return groups;

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}
```

## 🔑 Key Points to Memorize

1. **Use `reduce` to transform array → object**
2. **Support string OR function as key**
3. **Handle undefined keys (skip element)**
4. **Initialize empty arrays when creating a new group**
5. **Return empty object if invalid input**

## 🎯 Common Variations

- Group by multiple properties (composite key)
- Group and count (numbers instead of arrays)
- Group and transform (group then map each group)
- Group with specific order

**All follow the same mental pattern with reduce.**
