const { groupBy } = require('./index');
const fs = require('fs');
const path = require('path');

// Cargar samples
const loadSample = (filename) => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('groupBy - Ejercicio 02: Group By', () => {
  
  describe('Sample 1: Agrupar usuarios por país', () => {
    const users = loadSample('sample-1-users.json');
    
    test('debe agrupar usuarios por país', () => {
      const result = groupBy(users, 'country');
      
      expect(result.Spain).toHaveLength(3);
      expect(result.Mexico).toHaveLength(1);
      expect(result.Argentina).toHaveLength(1);
    });

    test('debe contener los usuarios correctos en cada grupo', () => {
      const result = groupBy(users, 'country');
      
      const spainUsers = result.Spain;
      expect(spainUsers.some(u => u.name === 'Ana García')).toBe(true);
      expect(spainUsers.some(u => u.name === 'Carmen López')).toBe(true);
      expect(spainUsers.some(u => u.name === 'María Rodríguez')).toBe(true);
    });
  });

  describe('Sample 2: Agrupar productos por categoría', () => {
    const products = loadSample('sample-2-products.json');
    
    test('debe agrupar productos por categoría', () => {
      const result = groupBy(products, 'category');
      
      expect(result.electronics).toHaveLength(3);
      expect(result.furniture).toHaveLength(2);
    });

    test('debe agrupar por role', () => {
      const users = loadSample('sample-1-users.json');
      const result = groupBy(users, 'role');
      
      expect(result.developer).toHaveLength(2);
      expect(result.designer).toHaveLength(2);
      expect(result.manager).toHaveLength(1);
    });
  });

  describe('Sample 3: Agrupar números con función', () => {
    const numbers = loadSample('sample-3-numbers.json');
    
    test('debe agrupar números por par/impar usando función', () => {
      const result = groupBy(numbers, n => n % 2 === 0 ? 'even' : 'odd');
      
      expect(result.even).toHaveLength(5); // 2, 4, 6, 8, 10
      expect(result.odd).toHaveLength(5);  // 1, 3, 5, 7, 9
    });

    test('debe agrupar números por rango usando función', () => {
      const result = groupBy(numbers, n => {
        if (n <= 3) return 'low';
        if (n <= 7) return 'medium';
        return 'high';
      });
      
      expect(result.low).toHaveLength(3);
      expect(result.medium).toHaveLength(4);
      expect(result.high).toHaveLength(3);
    });
  });

  describe('Sample 4: Agrupar órdenes por status', () => {
    const orders = loadSample('sample-4-orders.json');
    
    test('debe agrupar órdenes por status', () => {
      const result = groupBy(orders, 'status');
      
      expect(result.completed).toHaveLength(2);
      expect(result.pending).toHaveLength(2);
      expect(result.cancelled).toHaveLength(1);
    });
  });

  describe('Casos edge', () => {
    test('debe retornar objeto vacío si input no es array', () => {
      expect(groupBy(null, 'key')).toEqual({});
      expect(groupBy(undefined, 'key')).toEqual({});
      expect(groupBy('not array', 'key')).toEqual({});
      expect(groupBy(123, 'key')).toEqual({});
    });

    test('debe retornar objeto vacío si array está vacío', () => {
      expect(groupBy([], 'key')).toEqual({});
    });

    test('debe manejar elementos sin la propiedad', () => {
      const items = [
        { id: 1, name: 'A', category: 'X' },
        { id: 2, name: 'B' }, // Sin category
        { id: 3, name: 'C', category: 'Y' }
      ];
      
      const result = groupBy(items, 'category');
      expect(result.X).toHaveLength(1);
      expect(result.Y).toHaveLength(1);
      expect(result.undefined).toBeUndefined(); // No debe crear grupo undefined
    });

    test('debe manejar claves con valor null', () => {
      const items = [
        { id: 1, name: 'A', category: null },
        { id: 2, name: 'B', category: 'X' }
      ];
      
      const result = groupBy(items, 'category');
      expect(result.null).toHaveLength(1);
      expect(result.X).toHaveLength(1);
    });
  });
});

