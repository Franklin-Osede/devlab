// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, immutable, readable, efficient
// ============================================================================
/**
 * Groups array elements by a property or function
 * 
 * @param {Array} items - Array of elements to group
 * @param {string|Function} keyOrFn - Property name to group by or function that returns the key
 * @returns {Object} Object with unique keys and arrays of elements
 */
function groupBy(items, keyOrFn) {
  // 1. VALIDATE INPUT
  if (!Array.isArray(items)) return {};

  // 2. DETERMINE KEY FUNCTION (string or function)
  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : (item) => item?.[keyOrFn];

  // 3. REDUCE TO GROUPED OBJECT
  return items.reduce((groups, item) => {
    const key = getKey(item);
    
    // If key is undefined, skip this element
    if (key === undefined) return groups;

    // If group doesn't exist, create it
    if (!groups[key]) {
      groups[key] = [];
    }

    // Add element to group
    groups[key].push(item);
    return groups;
  }, {});
}

module.exports = { groupBy };
