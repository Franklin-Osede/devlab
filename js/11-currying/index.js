// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, handles partial application
// ============================================================================
/**
 * Implements currying: converts function with multiple arguments into chain of functions
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

module.exports = { curry };
