import { topNFrequent } from './index';

describe('topNFrequent - Ejercicio 06: Top N Más Frecuentes (TypeScript)', () => {
  test('debe retornar top 2 más frecuentes', () => {
    const result = topNFrequent(['apple', 'banana', 'apple', 'cherry', 'banana'], 2);
    expect(result).toContain('apple');
    expect(result).toContain('banana');
    expect(result.length).toBe(2);
  });
});

