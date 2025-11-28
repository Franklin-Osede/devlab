// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, uses Set for tracking
// ============================================================================
/**
 * Removes duplicate elements using a configurable strategy
 * 
 * @param {Array} items - Array of elements
 * @param {string|Function} keyOrFn - Property or function to determine uniqueness
 * @returns {Array} Array without duplicates
 */
function uniqueBy(items, keyOrFn) {
  if (!Array.isArray(items)) return [];

  const seen = new Set();
  
  // Determine key function
  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : typeof keyOrFn === 'string'
      ? (item) => item?.[keyOrFn]
      : (item) => item; // Identity if not provided

  return items.filter(item => {
    const key = getKey(item);
    // Handle null/undefined as valid keys
    const keyToCheck = key === null || key === undefined ? Symbol('nullish') : key;
    
    if (seen.has(keyToCheck)) return false;
    seen.add(keyToCheck);
    return true;
  });
}

module.exports = { uniqueBy };
