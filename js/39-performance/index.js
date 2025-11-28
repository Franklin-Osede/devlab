// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Function performance measurement
// ============================================================================
/**
 * Function performance measurement
 */
function measurePerformance(fn, label = 'Function') {
  return function(...args) {
    const start = performance.now();
    const result = fn.apply(this, args);
    const end = performance.now();
    const duration = end - start;
    
    console.log(`[${label}] Execution time: ${duration.toFixed(2)}ms`);
    
    return result;
  };
}

async function measureAsyncPerformance(fn, label = 'Async Function') {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  const duration = end - start;
  
  console.log(`[${label}] Execution time: ${duration.toFixed(2)}ms`);
  
  return result;
}

module.exports = { measurePerformance, measureAsyncPerformance };
