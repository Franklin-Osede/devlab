// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Simple Jest-style mini test runner
// ============================================================================
/**
 * Simple mini test runner
 */
function createTestRunner() {
  const tests = [];
  let passed = 0;
  let failed = 0;
  
  return {
    test(name, fn) {
      tests.push({ name, fn });
    },
    
    async run() {
      for (const { name, fn } of tests) {
        try {
          await fn();
          console.log(`✅ ${name}`);
          passed++;
        } catch (error) {
          console.log(`❌ ${name}: ${error.message}`);
          failed++;
        }
      }
      
      console.log(`\nTotal: ${tests.length}, Passed: ${passed}, Failed: ${failed}`);
      return { passed, failed, total: tests.length };
    }
  };
}

module.exports = { createTestRunner };
