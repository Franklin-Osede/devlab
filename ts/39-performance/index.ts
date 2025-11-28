/**
 * Medición de performance - TypeScript
 */
function measurePerformance<T extends (...args: any[]) => any>(
  fn: T,
  label: string = 'Function'
): T {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    const duration = end - start;
    
    console.log(`[${label}] Execution time: ${duration.toFixed(2)}ms`);
    
    return result;
  }) as T;
}

async function measureAsyncPerformance<T>(
  fn: () => Promise<T>,
  label: string = 'Async Function'
): Promise<T> {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  const duration = end - start;
  
  console.log(`[${label}] Execution time: ${duration.toFixed(2)}ms`);
  
  return result;
}

export { measurePerformance, measureAsyncPerformance };

