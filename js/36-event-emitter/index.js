// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Simple Node.js-style EventEmitter
// ============================================================================
/**
 * Simple Node.js-style EventEmitter
 */
function createEventEmitter() {
  const events = new Map();
  
  return {
    on(event, handler) {
      if (!events.has(event)) {
        events.set(event, []);
      }
      events.get(event).push(handler);
    },
    
    emit(event, ...args) {
      const handlers = events.get(event) || [];
      handlers.forEach(handler => handler(...args));
    },
    
    off(event, handler) {
      const handlers = events.get(event) || [];
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    },
    
    once(event, handler) {
      const onceHandler = (...args) => {
        handler(...args);
        this.off(event, onceHandler);
      };
      this.on(event, onceHandler);
    }
  };
}

module.exports = { createEventEmitter };
