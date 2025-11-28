/**
 * Mini test runner - TypeScript
 */
interface Test {
  name: string;
  fn: () => void | Promise<void>;
}

interface TestResult {
  passed: number;
  failed: number;
  total: number;
}

interface TestRunner {
  test(name: string, fn: () => void | Promise<void>): void;
  run(): Promise<TestResult>;
}

function createTestRunner(): TestRunner {
  const tests: Test[] = [];
  let passed = 0;
  let failed = 0;
  
  return {
    test(name: string, fn: () => void | Promise<void>) {
      tests.push({ name, fn });
    },
    
    async run(): Promise<TestResult> {
      for (const { name, fn } of tests) {
        try {
          await fn();
          console.log(`✅ ${name}`);
          passed++;
        } catch (error: any) {
          console.log(`❌ ${name}: ${error.message}`);
          failed++;
        }
      }
      
      console.log(`\nTotal: ${tests.length}, Passed: ${passed}, Failed: ${failed}`);
      return { passed, failed, total: tests.length };
    }
  };
}

export { createTestRunner, TestRunner, TestResult };

