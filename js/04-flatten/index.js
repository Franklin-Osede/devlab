// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, recursive, handles depth
// ============================================================================
/**
 * Flattens a nested array to the specified depth
 * 
 * @param {Array} array - Array to flatten
 * @param {number} depth - Maximum depth (default: Infinity)
 * @returns {Array} Flattened array
 */
function flatten(array, depth = Infinity) {
  // 1. VALIDATE INPUT AND BASE CASE
  if (!Array.isArray(array) || depth === 0) return array;

  // 2. REDUCE RECURSIVELY
  return array.reduce((result, item) => {
    // If it's an array and there's still depth, flatten recursively
    if (Array.isArray(item) && depth > 0) {
      return result.concat(flatten(item, depth - 1));
    }
    // If it's not an array, add it directly
    result.push(item);
    return result;
  }, []);
}

module.exports = { flatten };
