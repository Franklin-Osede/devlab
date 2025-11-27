/**
 * Filtra y ordena productos por múltiples criterios
 * 
 * @param {Array} products - Array de productos
 * @param {Object} filters - Objeto con criterios de filtrado
 * @returns {Array} Productos filtrados y ordenados
 */
function filterProducts(products, filters = {}) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(products)) return [];

  const {
    minPrice,
    maxPrice,
    category,
    onlyAvailable,
    sortBy = 'name', // default: ordenar por nombre
  } = filters;

  // 2. APLICAR FILTROS EN CADENA
  let result = products
    .filter(p => minPrice == null || p.price >= minPrice)
    .filter(p => maxPrice == null || p.price <= maxPrice)
    .filter(p => !category || p.category === category)
    .filter(p => !onlyAvailable || p.stock > 0);

  // 3. APLICAR ORDENAMIENTO
  if (sortBy === 'priceAsc') {
    result = result.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceDesc') {
    result = result.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    result = result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

module.exports = { filterProducts };

