/**
 * Crea una copia profunda de un objeto o array
 * 
 * @param {*} value - Valor a clonar
 * @returns {*} Copia profunda del valor
 */
function deepClone(value) {
  // 1. CASOS BASE: primitivos, null, undefined
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // 2. SI ES ARRAY: clonar cada elemento
  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  // 3. SI ES OBJETO: clonar cada propiedad
  const cloned = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      cloned[key] = deepClone(value[key]);
    }
  }
  return cloned;
}

module.exports = { deepClone };

