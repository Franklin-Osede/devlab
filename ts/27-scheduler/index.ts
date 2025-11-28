/**
 * Scheduler básico - TypeScript
 */
type TimerId = symbol;

interface Scheduler {
  schedule(fn: () => void, delay: number, repeat?: boolean): TimerId;
  cancel(id: TimerId): void;
  cancelAll(): void;
}

function createScheduler(): Scheduler {
  const timers = new Map<TimerId, NodeJS.Timeout>();
  
  return {
    schedule(fn: () => void, delay: number, repeat: boolean = false): TimerId {
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
    
    cancel(id: TimerId): void {
      const timerId = timers.get(id);
      if (timerId) {
        clearTimeout(timerId);
        timers.delete(id);
      }
    },
    
    cancelAll(): void {
      timers.forEach(timerId => clearTimeout(timerId));
      timers.clear();
    }
  };
}

export { createScheduler, Scheduler, TimerId };

