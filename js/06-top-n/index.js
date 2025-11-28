// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, efficient counting and sorting
// ============================================================================
/**
 * Returns the N most frequent elements of an array
 * 
 * @param {Array} items - Array of elements
 * @param {number} n - Number of elements to return
 * @returns {Array} Array with the N most frequent elements
 */
function topNFrequent(items, n) {
  // 1. VALIDATE INPUT
  if (!Array.isArray(items) || n <= 0) return [];

  // 2. COUNT OCCURRENCES
  const counts = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // 3. CONVERT TO ARRAY, SORT AND TAKE FIRST N
  return Object.entries(counts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, n)
    .map(([value]) => {
      // Try to convert to number if possible, otherwise keep string
      const numValue = Number(value);
      return isNaN(numValue) || value !== String(numValue) ? value : numValue;
    });
}

module.exports = { topNFrequent };
