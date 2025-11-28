import { deepClone } from './index';

describe('deepClone - Ejercicio 08: Deep Clone (TypeScript)', () => {
  test('debe clonar objetos anidados', () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
  });
});

