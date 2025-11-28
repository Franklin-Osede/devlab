import { memoize } from './index';

describe('memoize - Ejercicio 13 (TypeScript)', () => {
  test('debe cachear resultados', () => {
    let callCount = 0;
    const expensiveFn = (x: number) => {
      callCount++;
      return x * 2;
    };
    
    const memoized = memoize(expensiveFn);
    memoized(5);
    memoized(5);
    
    expect(callCount).toBe(1);
  });
});

