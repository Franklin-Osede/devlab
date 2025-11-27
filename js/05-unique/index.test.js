const { uniqueBy } = require('./index');
const fs = require('fs');
const path = require('path');

const loadSample = (filename) => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('uniqueBy - Ejercicio 05: Eliminar Duplicados', () => {
  
  describe('Sample 1: Números primitivos', () => {
    const numbers = loadSample('sample-1-numbers.json');
    
    test('debe eliminar duplicados sin keyOrFn', () => {
      const result = uniqueBy(numbers);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('Sample 2: Objetos por id', () => {
    const users = loadSample('sample-2-users.json');
    
    test('debe eliminar duplicados por propiedad id', () => {
      const result = uniqueBy(users, 'id');
      expect(result.length).toBe(3);
      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
      expect(result[2].id).toBe(3);
    });
  });

  describe('Sample 3: Strings', () => {
    const strings = loadSample('sample-3-strings.json');
    
    test('debe eliminar strings duplicados', () => {
      const result = uniqueBy(strings);
      expect(result).toEqual(["apple", "banana", "cherry"]);
    });
  });

  describe('Sample 4: Por función', () => {
    const items = loadSample('sample-4-mixed.json');
    
    test('debe eliminar duplicados por función', () => {
      const result = uniqueBy(items, item => item.category);
      expect(result.length).toBe(3);
      expect(result.map(r => r.category)).toEqual(["A", "B", "C"]);
    });
  });

  describe('Casos edge', () => {
    test('debe retornar array vacío si input inválido', () => {
      expect(uniqueBy(null)).toEqual([]);
      expect(uniqueBy(undefined)).toEqual([]);
    });

    test('debe manejar array vacío', () => {
      expect(uniqueBy([])).toEqual([]);
    });

    test('debe mantener orden (primer elemento)', () => {
      const items = [
        { id: 1, name: 'First' },
        { id: 1, name: 'Second' }
      ];
      const result = uniqueBy(items, 'id');
      expect(result[0].name).toBe('First');
    });
  });
});

