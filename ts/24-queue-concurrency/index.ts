/**
 * Cola con concurrencia limitada - TypeScript
 */
type Task<T> = () => Promise<T>;

async function runQueue<T>(tasks: Task<T>[], concurrency: number = 2): Promise<T[]> {
  const results: (T | { error: any })[] = [];
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
              resolve(results as T[]);
            }
          })
          .catch(error => {
            results[currentIndex] = { error } as any;
            running--;
            runNext();
            
            if (results.filter(r => r !== undefined).length === tasks.length) {
              resolve(results as T[]);
            }
          });
      }
    }
    
    runNext();
  });
}

export { runQueue, Task };

