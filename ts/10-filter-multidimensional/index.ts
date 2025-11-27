/**
 * Filtra y ordena productos por múltiples criterios
 * Versión TypeScript con interfaces
 */

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
}

interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  onlyAvailable?: boolean;
  sortBy?: 'priceAsc' | 'priceDesc' | 'name';
}

function filterProducts(products: Product[], filters: FilterOptions = {}): Product[] {
  if (!Array.isArray(products)) return [];

  const {
    minPrice,
    maxPrice,
    category,
    onlyAvailable,
    sortBy = 'name',
  } = filters;

  let result = products
    .filter(p => minPrice == null || p.price >= minPrice)
    .filter(p => maxPrice == null || p.price <= maxPrice)
    .filter(p => !category || p.category === category)
    .filter(p => !onlyAvailable || p.stock > 0);

  if (sortBy === 'priceAsc') {
    result = result.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceDesc') {
    result = result.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    result = result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

export { filterProducts, Product, FilterOptions };

