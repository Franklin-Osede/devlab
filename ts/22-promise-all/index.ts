/**
 * Promise.all personalizado - TypeScript
 */
function promiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises) || promises.length === 0) {
      resolve([]);
      return;
    }
    
    const results: T[] = [];
    let completed = 0;
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

export { promiseAll };

