/**
 * Cache con TTL - TypeScript
 */
interface CacheItem<T> {
  value: T;
  expires: number;
}

interface Cache<T> {
  set(key: string, value: T, customTtl?: number): void;
  get(key: string): T | undefined;
  delete(key: string): void;
  clear(): void;
}

function createCache<T>(ttlMs: number = 60000): Cache<T> {
  const cache = new Map<string, CacheItem<T>>();
  
  setInterval(() => {
    const now = Date.now();
    for (const [key, { expires }] of cache.entries()) {
      if (now > expires) {
        cache.delete(key);
      }
    }
  }, 1000);
  
  return {
    set(key: string, value: T, customTtl?: number): void {
      const expires = Date.now() + (customTtl || ttlMs);
      cache.set(key, { value, expires });
    },
    
    get(key: string): T | undefined {
      const item = cache.get(key);
      if (!item) return undefined;
      
      if (Date.now() > item.expires) {
        cache.delete(key);
        return undefined;
      }
      
      return item.value;
    },
    
    delete(key: string): void {
      cache.delete(key);
    },
    
    clear(): void {
      cache.clear();
    }
  };
}

export { createCache, Cache };

