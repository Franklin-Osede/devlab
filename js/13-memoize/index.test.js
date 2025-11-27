const { memoize } = require('./index');

describe('memoize - Ejercicio 13', () => {
  test('debe cachear resultados', () => {
    let callCount = 0;
    const expensiveFn = (x) => {
      callCount++;
      return x * 2;
    };
    
    const memoized = memoize(expensiveFn);
    memoized(5);
    memoized(5);
    
    expect(callCount).toBe(1);
  });
});

