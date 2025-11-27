const { filterProducts } = require('./index');

describe('filterProducts - Ejercicio 10: Filtro Multidimensional', () => {
  
  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics', stock: 5 },
    { id: 2, name: 'Mouse', price: 25, category: 'electronics', stock: 0 },
    { id: 3, name: 'Desk', price: 299, category: 'furniture', stock: 10 },
    { id: 4, name: 'Keyboard', price: 75, category: 'electronics', stock: 8 },
  ];

  test('debe filtrar por precio mínimo', () => {
    const result = filterProducts(products, { minPrice: 100 });
    expect(result.length).toBe(2);
    expect(result.every(p => p.price >= 100)).toBe(true);
  });

  test('debe filtrar por precio máximo', () => {
    const result = filterProducts(products, { maxPrice: 100 });
    expect(result.length).toBe(2);
    expect(result.every(p => p.price <= 100)).toBe(true);
  });

  test('debe filtrar por categoría', () => {
    const result = filterProducts(products, { category: 'electronics' });
    expect(result.length).toBe(3);
    expect(result.every(p => p.category === 'electronics')).toBe(true);
  });

  test('debe filtrar solo disponibles', () => {
    const result = filterProducts(products, { onlyAvailable: true });
    expect(result.length).toBe(3);
    expect(result.every(p => p.stock > 0)).toBe(true);
  });

  test('debe combinar múltiples filtros', () => {
    const result = filterProducts(products, {
      category: 'electronics',
      minPrice: 50,
      onlyAvailable: true
    });
    expect(result.length).toBe(2);
    expect(result.every(p => 
      p.category === 'electronics' && 
      p.price >= 50 && 
      p.stock > 0
    )).toBe(true);
  });

  test('debe ordenar por precio ascendente', () => {
    const result = filterProducts(products, { sortBy: 'priceAsc' });
    expect(result[0].price).toBeLessThanOrEqual(result[1].price);
  });

  test('debe ordenar por precio descendente', () => {
    const result = filterProducts(products, { sortBy: 'priceDesc' });
    expect(result[0].price).toBeGreaterThanOrEqual(result[1].price);
  });

  test('debe ordenar por nombre por defecto', () => {
    const result = filterProducts(products);
    expect(result[0].name <= result[1].name).toBe(true);
  });
});

