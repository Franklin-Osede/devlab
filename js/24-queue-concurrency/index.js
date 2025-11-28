// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Async queue with limited concurrency
// ============================================================================
/**
 * Async task queue with limited concurrency
 */
async function runQueue(tasks, concurrency = 2) {
  const results = [];
  let running = 0;
  let index = 0;
  
  return new Promise((resolve) => {
    function runNext() {
      while (running < concurrency && index < tasks.length) {
        const currentIndex = index++;
        running++;
        
        Promise.resolve(tasks[currentIndex]())
          .then(result => {
            results[currentIndex] = result;
            running--;
            runNext();
            
            if (results.filter(r => r !== undefined).length === tasks.length) {
              resolve(results);
            }
          })
          .catch(error => {
            results[currentIndex] = { error };
            running--;
            runNext();
            
            if (results.filter(r => r !== undefined).length === tasks.length) {
              resolve(results);
            }
          });
      }
    }
    
    runNext();
  });
}

module.exports = { runQueue };
