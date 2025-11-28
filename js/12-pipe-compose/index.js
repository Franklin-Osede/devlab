// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure functions, functional composition
// ============================================================================
/**
 * Implements pipe: executes functions from left to right
 */
function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

/**
 * Implements compose: executes functions from right to left
 */
function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}

module.exports = { pipe, compose };
