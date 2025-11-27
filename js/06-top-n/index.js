/**
 * Devuelve los N elementos más frecuentes de un array
 * 
 * @param {Array} items - Array de elementos
 * @param {number} n - Número de elementos a retornar
 * @returns {Array} Array con los N elementos más frecuentes
 */
function topNFrequent(items, n) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(items) || n <= 0) return [];

  // 2. CONTAR OCURRENCIAS
  const counts = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // 3. CONVERTIR A ARRAY, ORDENAR Y TOMAR PRIMEROS N
  return Object.entries(counts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, n)
    .map(([value]) => {
      // Intentar convertir a número si es posible, sino mantener string
      const numValue = Number(value);
      return isNaN(numValue) || value !== String(numValue) ? value : numValue;
    });
}

module.exports = { topNFrequent };

