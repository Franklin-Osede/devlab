/**
 * Normaliza un array de objetos con id a un objeto indexado por id
 * 
 * @param {Array} items - Array de objetos con propiedad id
 * @returns {Object} Objeto con claves id y valores objetos completos
 */
function normalizeById(items) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(items)) return {};

  // 2. REDUCIR A OBJETO INDEXADO POR ID
  return items.reduce((byId, item) => {
    // Si el item no tiene id, saltarlo
    if (item?.id == null) return byId;
    
    // Usar id como clave, objeto completo como valor
    byId[item.id] = item;
    return byId;
  }, {});
}

module.exports = { normalizeById };

