/**
 * EventEmitter - TypeScript
 */
type EventHandler<T = any> = (data: T) => void;

interface EventEmitter {
  on<T = any>(event: string, handler: EventHandler<T>): void;
  emit<T = any>(event: string, ...args: T[]): void;
  off<T = any>(event: string, handler: EventHandler<T>): void;
  once<T = any>(event: string, handler: EventHandler<T>): void;
}

function createEventEmitter(): EventEmitter {
  const events = new Map<string, EventHandler[]>();
  
  return {
    on<T = any>(event: string, handler: EventHandler<T>): void {
      if (!events.has(event)) {
        events.set(event, []);
      }
      events.get(event)!.push(handler as EventHandler);
    },
    
    emit<T = any>(event: string, ...args: T[]): void {
      const handlers = events.get(event) || [];
      handlers.forEach(handler => handler(...args));
    },
    
    off<T = any>(event: string, handler: EventHandler<T>): void {
      const handlers = events.get(event) || [];
      const index = handlers.indexOf(handler as EventHandler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    },
    
    once<T = any>(event: string, handler: EventHandler<T>): void {
      const onceHandler = (...args: T[]) => {
        handler(...args);
        this.off(event, onceHandler as EventHandler);
      };
      this.on(event, onceHandler as EventHandler);
    }
  };
}

export { createEventEmitter, EventEmitter, EventHandler };

