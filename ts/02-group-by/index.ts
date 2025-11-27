/**
 * Agrupa elementos de un array por una propiedad o función
 * Versión TypeScript con genéricos
 */

/**
 * Agrupa elementos por una propiedad o función que retorna la clave
 * 
 * @param items - Array de elementos a agrupar
 * @param keyOrFn - Propiedad por la que agrupar (keyof T) o función que retorna la clave
 * @returns Objeto con claves únicas y arrays de elementos
 */
function groupBy<T>(
  items: T[],
  keyOrFn: keyof T | ((item: T) => string | number)
): Record<string, T[]> {
  // 1. VALIDAR INPUT
  if (!Array.isArray(items)) return {};

  // 2. DETERMINAR FUNCIÓN DE CLAVE (string o función)
  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : (item: T) => {
          const value = item[keyOrFn];
          return value != null ? String(value) : '';
        };

  // 3. REDUCIR A OBJETO AGRUPADO
  return items.reduce((groups, item) => {
    const key = getKey(item);
    
    // Si la clave está vacía, saltar este elemento
    if (!key) return groups;

    // Si el grupo no existe, crearlo
    if (!groups[key]) {
      groups[key] = [];
    }

    // Añadir el elemento al grupo
    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

export { groupBy };

