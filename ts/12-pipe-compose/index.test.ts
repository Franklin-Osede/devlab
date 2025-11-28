import { pipe, compose } from './index';

describe('pipe/compose - Ejercicio 12 (TypeScript)', () => {
  const double = (x: number) => x * 2;
  const increment = (x: number) => x + 1;

  test('pipe ejecuta de izquierda a derecha', () => {
    const fn = pipe(increment, double);
    expect(fn(2)).toBe(6);
  });

  test('compose ejecuta de derecha a izquierda', () => {
    const fn = compose(increment, double);
    expect(fn(2)).toBe(5);
  });
});

