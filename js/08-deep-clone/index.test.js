const { deepClone } = require('./index');

describe('deepClone - Ejercicio 08: Deep Clone', () => {
  
  test('debe clonar objetos anidados', () => {
    const original = {
      a: 1,
      b: { c: 2, d: { e: 3 } }
    };
    
    const cloned = deepClone(original);
    
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b.d).not.toBe(original.b.d);
  });

  test('debe clonar arrays anidados', () => {
    const original = [1, [2, [3, 4]]];
    const cloned = deepClone(original);
    
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned[1]).not.toBe(original[1]);
  });

  test('debe retornar primitivos tal cual', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('string')).toBe('string');
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('las modificaciones no deben afectar el original', () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    
    cloned.b.c = 999;
    
    expect(original.b.c).toBe(2);
    expect(cloned.b.c).toBe(999);
  });
});

