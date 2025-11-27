/**
 * Elimina elementos duplicados usando una estrategia configurable
 * Versión TypeScript con genéricos
 */

function uniqueBy<T>(
  items: T[],
  keyOrFn?: keyof T | ((item: T) => any)
): T[] {
  if (!Array.isArray(items)) return [];

  const seen = new Set<any>();
  
  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : typeof keyOrFn === 'string'
      ? (item: T) => item?.[keyOrFn]
      : (item: T) => item;

  return items.filter(item => {
    const key = getKey(item);
    const keyToCheck = key === null || key === undefined ? Symbol('nullish') : key;
    
    if (seen.has(keyToCheck)) return false;
    seen.add(keyToCheck);
    return true;
  });
}

export { uniqueBy };

