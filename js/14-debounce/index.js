// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, uses setTimeout for delay
// ============================================================================
/**
 * Debounce: delays execution until time passes without calls
 */
function debounce(fn, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

module.exports = { debounce };
