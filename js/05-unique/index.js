/**
 * Elimina elementos duplicados usando una estrategia configurable
 * 
 * @param {Array} items - Array de elementos
 * @param {string|Function} keyOrFn - Propiedad o función para determinar unicidad
 * @returns {Array} Array sin duplicados
 */
function uniqueBy(items, keyOrFn) {
  if (!Array.isArray(items)) return [];

  const seen = new Set();
  
  // Determinar función de clave
  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : typeof keyOrFn === 'string'
      ? (item) => item?.[keyOrFn]
      : (item) => item; // Identidad si no se proporciona

  return items.filter(item => {
    const key = getKey(item);
    // Manejar null/undefined como claves válidas
    const keyToCheck = key === null || key === undefined ? Symbol('nullish') : key;
    
    if (seen.has(keyToCheck)) return false;
    seen.add(keyToCheck);
    return true;
  });
}

module.exports = { uniqueBy };

