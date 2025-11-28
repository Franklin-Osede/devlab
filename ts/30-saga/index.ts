/**
 * Saga/Transactional workflow - TypeScript
 */
interface SagaStep<T = any> {
  execute: () => Promise<T>;
  compensate?: (result: T) => Promise<void>;
}

interface SagaResult<T = any> {
  success: boolean;
  results: T[];
}

async function executeSaga<T = any>(steps: SagaStep<T>[]): Promise<SagaResult<T>> {
  const executed: Array<{ step: SagaStep<T>; result: T }> = [];
  
  try {
    for (const step of steps) {
      const result = await step.execute();
      executed.push({ step, result });
    }
    return { success: true, results: executed.map(e => e.result) };
  } catch (error) {
    for (let i = executed.length - 1; i >= 0; i--) {
      if (executed[i].step.compensate) {
        await executed[i].step.compensate(executed[i].result);
      }
    }
    throw error;
  }
}

export { executeSaga, SagaStep, SagaResult };

