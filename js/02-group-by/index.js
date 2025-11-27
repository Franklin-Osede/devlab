/**
 * Agrupa elementos de un array por una propiedad o función
 * 
 * @param {Array} items - Array de elementos a agrupar
 * @param {string|Function} keyOrFn - Propiedad por la que agrupar o función que retorna la clave
 * @returns {Object} Objeto con claves únicas y arrays de elementos
 */
function groupBy(items, keyOrFn) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(items)) return {};

  // 2. DETERMINAR FUNCIÓN DE CLAVE (string o función)
  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : (item) => item?.[keyOrFn];

  // 3. REDUCIR A OBJETO AGRUPADO
  return items.reduce((groups, item) => {
    const key = getKey(item);
    
    // Si la clave es undefined, saltar este elemento
    if (key === undefined) return groups;

    // Si el grupo no existe, crearlo
    if (!groups[key]) {
      groups[key] = [];
    }

    // Añadir el elemento al grupo
    groups[key].push(item);
    return groups;
  }, {});
}

module.exports = { groupBy };

