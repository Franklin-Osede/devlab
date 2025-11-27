/**
 * Saga/Transactional workflow simple
 */
async function executeSaga(steps) {
  const executed = [];
  
  try {
    for (const step of steps) {
      const result = await step.execute();
      executed.push({ step, result });
    }
    return { success: true, results: executed.map(e => e.result) };
  } catch (error) {
    // Rollback en orden inverso
    for (let i = executed.length - 1; i >= 0; i--) {
      if (executed[i].step.compensate) {
        await executed[i].step.compensate(executed[i].result);
      }
    }
    throw error;
  }
}

module.exports = { executeSaga };

