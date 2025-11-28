// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, immutable, readable, efficient
// ============================================================================
/**
 * Normalizes an array of objects with id to an object indexed by id
 * 
 * @param {Array} items - Array of objects with id property
 * @returns {Object} Object with id keys and complete objects as values
 */
function normalizeById(items) {
  // 1. VALIDATE INPUT
  if (!Array.isArray(items)) return {};

  // 2. REDUCE TO OBJECT INDEXED BY ID
  return items.reduce((byId, item) => {
    // If item doesn't have id, skip it
    if (item?.id == null) return byId;
    
    // Use id as key, complete object as value
    byId[item.id] = item;
    return byId;
  }, {});
}

module.exports = { normalizeById };
