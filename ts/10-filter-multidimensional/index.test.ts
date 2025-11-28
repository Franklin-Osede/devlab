import { filterProducts, Product } from './index';

describe('filterProducts - Ejercicio 10: Filtro Multidimensional (TypeScript)', () => {
  const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics', stock: 5 },
    { id: 2, name: 'Mouse', price: 25, category: 'electronics', stock: 0 }
  ];

  test('debe filtrar por precio mínimo', () => {
    const result = filterProducts(products, { minPrice: 100 });
    expect(result.length).toBe(1);
  });
});

