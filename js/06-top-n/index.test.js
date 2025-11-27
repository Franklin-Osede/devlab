const { topNFrequent } = require('./index');
const fs = require('fs');
const path = require('path');

const loadSample = (filename) => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('topNFrequent - Ejercicio 06: Top N Más Frecuentes', () => {
  
  describe('Sample 1: Strings', () => {
    const items = loadSample('sample-1-strings.json');
    
    test('debe retornar top 2 más frecuentes', () => {
      const result = topNFrequent(items, 2);
      expect(result).toContain('apple');
      expect(result).toContain('banana');
      expect(result.length).toBe(2);
    });

    test('debe retornar top 1 (apple con 3 ocurrencias)', () => {
      const result = topNFrequent(items, 1);
      expect(result).toEqual(['apple']);
    });
  });

  describe('Sample 2: Números', () => {
    const items = loadSample('sample-2-numbers.json');
    
    test('debe retornar top 3 más frecuentes', () => {
      const result = topNFrequent(items, 3);
      expect(result).toContain(4);
      expect(result).toContain(3);
      expect(result.length).toBe(3);
    });
  });

  describe('Sample 3: Colores', () => {
    const items = loadSample('sample-3-mixed.json');
    
    test('debe retornar top 2 (blue y red)', () => {
      const result = topNFrequent(items, 2);
      expect(result).toContain('blue');
      expect(result.length).toBe(2);
    });
  });

  describe('Sample 4: Todos iguales', () => {
    const items = loadSample('sample-4-single.json');
    
    test('debe retornar el único elemento', () => {
      const result = topNFrequent(items, 1);
      expect(result).toEqual(['a']);
    });
  });

  describe('Casos edge', () => {
    test('debe retornar array vacío si n <= 0', () => {
      expect(topNFrequent([1, 2, 2], 0)).toEqual([]);
      expect(topNFrequent([1, 2, 2], -1)).toEqual([]);
    });

    test('debe retornar array vacío si input inválido', () => {
      expect(topNFrequent(null, 2)).toEqual([]);
      expect(topNFrequent(undefined, 2)).toEqual([]);
    });

    test('debe retornar todos si n > elementos únicos', () => {
      const result = topNFrequent([1, 2, 2, 3], 10);
      expect(result.length).toBeLessThanOrEqual(3);
    });
  });
});

