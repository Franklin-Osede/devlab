// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, recursive deep comparison
// ============================================================================
/**
 * Compares two values deeply
 * 
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} true if deeply equal
 */
function deepEqual(a, b) {
  // 1. STRICT COMPARISON (covers primitives, null, undefined)
  if (a === b) return true;

  // 2. VALIDATE THAT BOTH ARE OBJECTS
  if (
    typeof a !== 'object' ||
    typeof b !== 'object' ||
    a === null ||
    b === null
  ) {
    return false;
  }

  // 3. GET KEYS FROM BOTH OBJECTS
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // 4. CHECK SAME NUMBER OF KEYS
  if (keysA.length !== keysB.length) return false;

  // 5. COMPARE EACH KEY RECURSIVELY
  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

module.exports = { deepEqual };
