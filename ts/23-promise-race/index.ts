/**
 * Promise.race personalizado - TypeScript
 */
function promiseRace<T>(promises: Promise<T>[]): Promise<T> {
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

export { promiseRace };

