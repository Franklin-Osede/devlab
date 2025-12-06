# Senior Dev Thinking Process

How a senior developer thinks while reading the problem statement.

---

## Problem Statement

```markdown
Given a list of elements (users, products, orders, etc.), you must:
```

**Thinking:** *"Ok, input/output function. Takes array, returns something."*

```markdown
1. **Filter** only elements that meet a condition (e.g., active, available, etc.)
```

**Thinking:** *"Filter first. Use .filter(). Reduces dataset early."*

```markdown
2. **Sort** by a specific property (date, price, name, etc.)
```

**Thinking:** *"Sort after filter. More efficient. Use .sort() with comparison."*

```markdown
3. **Transform** to a simpler format (only the necessary properties)
```

**Thinking:** *"Transform = .map(). Extract only what's needed."*

```markdown
4. **Handle** edge cases (invalid input, empty arrays, etc.)
```

**Thinking:** *"Edge cases. Validate input first. Early return."*

---

## Requirements

```markdown
- If input is not an array, return `[]`
```

**Thinking:** *"Validate first. Return [] if not array."*

```markdown
- Filter elements that meet the condition
```

**Thinking:** *"Standard .filter() operation."*

```markdown
- Sort by the specified property (ascending or descending)
```

**Thinking:** *"Sort by property. Convert dates to Date objects for comparison."*

```markdown
- Map to an object with only the required properties
```

**Thinking:** *".map() to new objects. Immutability."*

```markdown
- Handle `null` or `undefined` values in elements
```

**Thinking:** *"Use optional chaining (?.) for null safety."*

---

## Examples

```markdown
### Example 1: Active users
// Expected result: only active users, sorted by date, with id, name, email
```

**Thinking:** *"Filter active=true, sort by createdAt, map to id/name/email. Order: filter → sort → map."*

```markdown
### Example 2: Available products
```

**Thinking:** *"Same pattern. Filter stock > 0, sort, map. Same approach."*

---

## Overall Approach

**Thinking:** *"Pattern: validate → filter → sort → map. Pure function with method chaining. Filter first to reduce data, then sort smaller set, then transform."*
