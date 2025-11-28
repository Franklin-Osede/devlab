// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Custom Promise.race implementation
// ============================================================================
/**
 * Custom Promise.race implementation
 */
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises) || promises.length === 0) {
      return;
    }
    
    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject);
    });
  });
}

module.exports = { promiseRace };
