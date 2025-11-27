/**
 * Aplana un array anidado hasta la profundidad especificada
 * 
 * @param {Array} array - Array a aplanar
 * @param {number} depth - Profundidad máxima (default: Infinity)
 * @returns {Array} Array aplanado
 */
function flatten(array, depth = Infinity) {
  // 1. VALIDAR INPUT Y CASO BASE
  if (!Array.isArray(array) || depth === 0) return array;

  // 2. REDUCIR RECURSIVAMENTE
  return array.reduce((result, item) => {
    // Si es array y aún hay profundidad, aplanar recursivamente
    if (Array.isArray(item) && depth > 0) {
      return result.concat(flatten(item, depth - 1));
    }
    // Si no es array, añadirlo directamente
    result.push(item);
    return result;
  }, []);
}

module.exports = { flatten };

