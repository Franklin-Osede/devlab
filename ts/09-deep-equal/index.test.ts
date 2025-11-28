import { deepEqual } from './index';

describe('deepEqual - Ejercicio 09: Deep Equal (TypeScript)', () => {
  test('debe retornar true para objetos iguales', () => {
    expect(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })).toBe(true);
  });

  test('debe retornar false para objetos diferentes', () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
  });
});

