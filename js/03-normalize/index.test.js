const { normalizeById } = require('./index');
const fs = require('fs');
const path = require('path');

const loadSample = (filename) => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('normalizeById - Ejercicio 03: Normalizar Datos', () => {
  
  describe('Sample 1: Usuarios con id numérico', () => {
    const users = loadSample('sample-1-users.json');
    
    test('debe normalizar usuarios por id', () => {
      const result = normalizeById(users);
      
      expect(result[1]).toEqual(users[0]);
      expect(result[2]).toEqual(users[1]);
      expect(result[3]).toEqual(users[2]);
    });

    test('debe retornar objeto con claves numéricas', () => {
      const result = normalizeById(users);
      expect(typeof result[1]).toBe('object');
      expect(result[1].name).toBe('Ana García');
    });
  });

  describe('Sample 2: Productos con id string', () => {
    const products = loadSample('sample-2-products.json');
    
    test('debe normalizar productos con id string', () => {
      const result = normalizeById(products);
      
      expect(result['prod-001']).toEqual(products[0]);
      expect(result['prod-002']).toEqual(products[1]);
      expect(result['prod-003']).toEqual(products[2]);
    });
  });

  describe('Sample 3: Órdenes', () => {
    const orders = loadSample('sample-3-orders.json');
    
    test('debe normalizar órdenes', () => {
      const result = normalizeById(orders);
      
      expect(result['ORD-001']).toEqual(orders[0]);
      expect(result['ORD-002']).toEqual(orders[1]);
      expect(result['ORD-003']).toEqual(orders[2]);
    });
  });

  describe('Sample 4: Casos edge', () => {
    const mixed = loadSample('sample-4-mixed.json');
    
    test('debe saltar elementos sin id', () => {
      const result = normalizeById(mixed);
      
      expect(result[1]).toBeDefined();
      expect(result['two']).toBeDefined();
      expect(result[4]).toBeDefined();
      // El elemento sin id no debe estar
      expect(Object.keys(result).length).toBe(3);
    });

    test('debe manejar ids mixtos (number y string)', () => {
      const result = normalizeById(mixed);
      expect(result[1]).toBeDefined();
      expect(result['two']).toBeDefined();
    });
  });

  describe('Casos adicionales', () => {
    test('debe retornar objeto vacío si input no es array', () => {
      expect(normalizeById(null)).toEqual({});
      expect(normalizeById(undefined)).toEqual({});
      expect(normalizeById('not array')).toEqual({});
      expect(normalizeById(123)).toEqual({});
    });

    test('debe retornar objeto vacío si array está vacío', () => {
      expect(normalizeById([])).toEqual({});
    });

    test('debe manejar ids duplicados (último sobrescribe)', () => {
      const items = [
        { id: 1, name: 'First' },
        { id: 1, name: 'Second' }
      ];
      
      const result = normalizeById(items);
      expect(result[1].name).toBe('Second');
    });

    test('debe manejar id null o undefined', () => {
      const items = [
        { id: null, name: 'A' },
        { id: undefined, name: 'B' },
        { id: 1, name: 'C' }
      ];
      
      const result = normalizeById(items);
      expect(result[1]).toBeDefined();
      expect(result[null]).toBeUndefined();
      expect(result[undefined]).toBeUndefined();
    });
  });
});

