const { flatten } = require('./index');
const fs = require('fs');
const path = require('path');

const loadSample = (filename) => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('flatten - Ejercicio 04: Flatten Arrays', () => {
  
  describe('Sample 1: Array simple anidado', () => {
    const arr = loadSample('sample-1-simple.json');
    
    test('debe aplanar completamente con depth Infinity', () => {
      const result = flatten(arr);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('debe aplanar un nivel con depth 1', () => {
      const result = flatten(arr, 1);
      expect(result).toEqual([1, 2, 3, 4, [5, 6]]);
    });
  });

  describe('Sample 2: Array profundamente anidado', () => {
    const arr = loadSample('sample-2-deep.json');
    
    test('debe aplanar completamente', () => {
      const result = flatten(arr);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('Sample 3: Array con tipos mixtos', () => {
    const arr = loadSample('sample-3-mixed.json');
    
    test('debe aplanar preservando tipos', () => {
      const result = flatten(arr);
      expect(result).toEqual([1, "hello", 2, 3, "world", 4, 5, 6, 7]);
    });
  });

  describe('Sample 4: Arrays vacíos', () => {
    const arr = loadSample('sample-4-empty.json');
    
    test('debe manejar arrays vacíos', () => {
      const result = flatten(arr);
      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe('Casos edge', () => {
    test('debe retornar tal cual si depth es 0', () => {
      expect(flatten([1, [2, 3]], 0)).toEqual([1, [2, 3]]);
    });

    test('debe retornar tal cual si no es array', () => {
      expect(flatten(123)).toBe(123);
      expect(flatten("string")).toBe("string");
      expect(flatten(null)).toBe(null);
    });

    test('debe manejar array vacío', () => {
      expect(flatten([])).toEqual([]);
    });

    test('debe manejar array ya plano', () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });
});

