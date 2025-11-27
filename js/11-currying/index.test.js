const { curry } = require('./index');

describe('curry - Ejercicio 11: Currying', () => {
  test('debe currear función de 2 argumentos', () => {
    const add = (a, b) => a + b;
    const curriedAdd = curry(add);
    
    expect(curriedAdd(2)(3)).toBe(5);
    expect(curriedAdd(2, 3)).toBe(5);
  });

  test('debe currear función de 3 argumentos', () => {
    const multiply = (a, b, c) => a * b * c;
    const curriedMultiply = curry(multiply);
    
    expect(curriedMultiply(2)(3)(4)).toBe(24);
    expect(curriedMultiply(2, 3)(4)).toBe(24);
  });
});

