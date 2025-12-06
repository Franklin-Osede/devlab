// ============================================================================
// SOLUTION 1: ✅ RECOMMENDED - Pure function, immutable, readable, efficient
// ============================================================================

function getActiveUsers(users) {
  // Ok, validate input first - if it's not an array, return empty array
  if (!Array.isArray(users)) return [];

  return users
    // Filter active users first - this way we sort fewer items (more efficient)
    // The ?. means "if user exists, check active, otherwise return undefined"
    .filter(user => user?.active)
    
    // Sort by creation date - oldest first
    // Subtracting dates gives us the difference in milliseconds
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    
    // Map to new objects with only what we need
    // The () around {} is needed because we're returning an object from arrow function
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}

// WHY THIS WORKS:
// ✅ Pure function - same input always gives same output
// ✅ Doesn't change the original array
// ✅ Filter first, then sort - faster because we sort less items
// ✅ Safe - handles null/undefined with ?.

// ============================================================================
// SOLUTION 2: ⭐ EXCELLENT - Advanced edge case handling
// ============================================================================

function getActiveUsers_EXCELLENT(users) {
  if (!Array.isArray(users)) return [];

  return users
    .filter(user => user?.active)
    
    // Handle cases where dates might be missing or broken
    .sort((a, b) => {
      // If createdAt is missing, use year 1970 as default
      const dateA = a?.createdAt ? new Date(a.createdAt) : new Date(0);
      const dateB = b?.createdAt ? new Date(b.createdAt) : new Date(0);
      
      // Check if date is valid - if not, use 0
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

// WHEN TO USE:
// ✅ Solution 1: Use this most of the time (works for 95% of cases)
// ⭐ Solution 2: Use when you get bad data from APIs (missing dates, broken dates)

module.exports = { 
  getActiveUsers,
  getActiveUsers_EXCELLENT
};
