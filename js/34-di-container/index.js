// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Simple DI Container
// ============================================================================
/**
 * Simple DI Container
 */
function createContainer() {
  const services = new Map();
  const instances = new Map();
  
  return {
    register(name, factory) {
      services.set(name, factory);
    },
    
    resolve(name) {
      if (instances.has(name)) {
        return instances.get(name);
      }
      
      const factory = services.get(name);
      if (!factory) {
        throw new Error(`Service ${name} not registered`);
      }
      
      const instance = factory(this);
      instances.set(name, instance);
      return instance;
    },
    
    clear() {
      services.clear();
      instances.clear();
    }
  };
}

module.exports = { createContainer };
