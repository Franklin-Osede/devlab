# 🎥 Script for LinkedIn Video: 01 - Filter and Transform (JavaScript)

## 🚀 Hook (0-15 seconds)
"Do you know how to efficiently transform data from an API? Today I'll show you a key pattern you'll use daily as a developer."

## 📝 Problem (15-45 seconds)
"Imagine you receive a list of users from an API. You need to show only active users, sort them by creation date, and display only their ID, name, and email. How would you do it cleanly and professionally?"

*(Show an example of input and output on screen)*

## 🧠 My Mental Approach (45-90 seconds)
"To solve this, my brain thinks in 4 key steps, like an assembly line:
1. **Validation**: First, I always verify that the input is valid. Is it an array?
2. **Filtering**: Then, I get rid of what I don't need. In this case, inactive users.
3. **Sorting**: Next, I organize the data as requested. Here, by creation date.
4. **Transformation**: Finally, I give the data the exact shape I need, selecting only relevant properties.

This 'Validate → Filter → Sort → Transform' pattern is universal."

## 💻 Code Step by Step (90-240 seconds)
"Let's write the code. I start with the `getActiveUsers` function that receives `users`.

```javascript
function getActiveUsers(users) {
  // STEP 1: Validate input. If it's not an array, return an empty array to avoid errors.
  if (!Array.isArray(users)) return [];

  // STEP 2, 3, and 4: Chain operations with modern array methods.
  return users
    // First, filter. We only want users where 'active' is true.
    .filter(user => user?.active)
    // Then, sort. We use 'sort' and subtract dates to sort ascending.
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    // Finally, transform. With 'map', we create a new object with only 'id', 'name', and 'email'.
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}
```
"As you can see, the code is concise and follows the logic we thought about. Each step is a clear operation on the array."

## 💡 Why It's Important (240-270 seconds)
"Mastering this pattern makes you a very valuable developer. You don't just write code, you think structured, which is crucial in pair programming and day-to-day work. You demonstrate that you can:
- Handle API data.
- Write readable and maintainable code.
- Think about robustness (input validation).

Practice this pattern and you'll see how your problem-solving ability skyrockets!"
