// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, uses timestamp for rate limiting
// ============================================================================
/**
 * Throttle: limits execution to maximum once per time period
 */
function throttle(fn, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

module.exports = { throttle };
