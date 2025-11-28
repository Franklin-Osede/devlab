import { curry } from './index';

describe('curry - Ejercicio 11: Currying (TypeScript)', () => {
  test('debe currear función de 2 argumentos', () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);
    
    expect(curriedAdd(2)(3)).toBe(5);
  });
});

