// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, chainable filters, flexible sorting
// ============================================================================
/**
 * Filters and sorts products by multiple criteria
 * 
 * @param {Array} products - Array of products
 * @param {Object} filters - Object with filtering criteria
 * @returns {Array} Filtered and sorted products
 */
function filterProducts(products, filters = {}) {
  // 1. VALIDATE INPUT
  if (!Array.isArray(products)) return [];

  const {
    minPrice,
    maxPrice,
    category,
    onlyAvailable,
    sortBy = 'name', // default: sort by name
  } = filters;

  // 2. APPLY FILTERS IN CHAIN
  let result = products
    .filter(p => minPrice == null || p.price >= minPrice)
    .filter(p => maxPrice == null || p.price <= maxPrice)
    .filter(p => !category || p.category === category)
    .filter(p => !onlyAvailable || p.stock > 0);

  // 3. APPLY SORTING
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
