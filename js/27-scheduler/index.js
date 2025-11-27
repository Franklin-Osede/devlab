/**
 * Scheduler básico para ejecutar funciones en el futuro
 */
function createScheduler() {
  const timers = new Map();
  
  return {
    schedule(fn, delay, repeat = false) {
      const id = Symbol();
      
      const execute = () => {
        fn();
        if (repeat) {
          const timerId = setTimeout(execute, delay);
          timers.set(id, timerId);
        }
      };
      
      const timerId = setTimeout(execute, delay);
      timers.set(id, timerId);
      
      return id;
    },
    
    cancel(id) {
      const timerId = timers.get(id);
      if (timerId) {
        clearTimeout(timerId);
        timers.delete(id);
      }
    },
    
    cancelAll() {
      timers.forEach(timerId => clearTimeout(timerId));
      timers.clear();
    }
  };
}

module.exports = { createScheduler };

