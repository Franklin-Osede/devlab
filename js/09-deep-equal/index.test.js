const { deepEqual } = require('./index');

describe('deepEqual - Ejercicio 09: Deep Equal', () => {
  
  test('debe retornar true para valores iguales', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('hello', 'hello')).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
  });

  test('debe retornar true para objetos iguales', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('debe retornar false para objetos diferentes', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('debe retornar false si tienen diferente número de claves', () => {
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  test('debe retornar true para arrays iguales', () => {
    expect(deepEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
  });

  test('debe retornar false para arrays diferentes', () => {
    expect(deepEqual([1, 2], [1, 3])).toBe(false);
  });
});

