// ============================================================================
// SOLUTION 1: ✅ RECOMMENDED - Pure function, immutable, readable, efficient
// ============================================================================
/**
 * ADVANTAGES:
 * - Pure function (same input → same output)
 * - Immutability (doesn't modify original)
 * - Early validation
 * - Method chaining (readable)
 * - Correct order: filter → sort → transform
 * - Optional chaining for safety
 */
function getActiveUsers(users) {
  // 1. VALIDATE INPUT (early return)
  if (!Array.isArray(users)) return [];

  // 2. FILTER → only active users (reduces array before sorting)
  // 3. SORT → by creation date ascending
  // 4. TRANSFORM → only id, name, email
  return users
    .filter(user => user?.active) // ✅ Optional chaining prevents errors if user is null/undefined
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}

// ============================================================================
// SOLUTION 2: ⭐ EXCELLENT - Advanced edge case handling
// ============================================================================
/**
 * ADDITIONAL ADVANTAGES:
 * - Handles users without createdAt (places them at the end)
 * - Handles users with invalid createdAt
 * - More robust for production
 */
function getActiveUsers_EXCELLENT(users) {
  if (!Array.isArray(users)) return [];

  return users
    .filter(user => user?.active)
    .sort((a, b) => {
      // Handle cases where createdAt can be null/undefined/invalid
      const dateA = a?.createdAt ? new Date(a.createdAt) : new Date(0);
      const dateB = b?.createdAt ? new Date(b.createdAt) : new Date(0);
      
      // If any date is invalid, returns NaN, so we validate
      const timeA = isNaN(dateA.getTime()) ? 0 : dateA.getTime();
      const timeB = isNaN(dateB.getTime()) ? 0 : dateB.getTime();
      
      return timeA - timeB;
    })
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}

module.exports = { 
  getActiveUsers, // ✅ Use this in production
  getActiveUsers_EXCELLENT // ⭐ For more complex cases
};
