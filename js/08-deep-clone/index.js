// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, recursive deep cloning
// ============================================================================
/**
 * Creates a deep copy of an object or array
 * 
 * @param {*} value - Value to clone
 * @returns {*} Deep copy of the value
 */
function deepClone(value) {
  // 1. BASE CASES: primitives, null, undefined
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // 2. IF ARRAY: clone each element
  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  // 3. IF OBJECT: clone each property
  const cloned = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      cloned[key] = deepClone(value[key]);
    }
  }
  return cloned;
}

module.exports = { deepClone };
