/**
 * Cache con TTL y limpieza periódica
 */
function createCache(ttlMs = 60000) {
  const cache = new Map();
  
  setInterval(() => {
    const now = Date.now();
    for (const [key, { expires }] of cache.entries()) {
      if (now > expires) {
        cache.delete(key);
      }
    }
  }, 1000);
  
  return {
    set(key, value, customTtl) {
      const expires = Date.now() + (customTtl || ttlMs);
      cache.set(key, { value, expires });
    },
    
    get(key) {
      const item = cache.get(key);
      if (!item) return undefined;
      
      if (Date.now() > item.expires) {
        cache.delete(key);
        return undefined;
      }
      
      return item.value;
    },
    
    delete(key) {
      cache.delete(key);
    },
    
    clear() {
      cache.clear();
    }
  };
}

module.exports = { createCache };

