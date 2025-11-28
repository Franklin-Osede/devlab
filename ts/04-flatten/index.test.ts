import { flatten } from './index';

describe('flatten - Ejercicio 04: Flatten Arrays (TypeScript)', () => {
  test('debe aplanar arrays anidados', () => {
    const result = flatten([1, [2, 3], [4, [5, 6]]]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('debe retornar tal cual si depth es 0', () => {
    expect(flatten([1, [2, 3]], 0)).toEqual([1, [2, 3]]);
  });
});

