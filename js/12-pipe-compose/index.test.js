const { pipe, compose } = require('./index');

describe('pipe/compose - Ejercicio 12', () => {
  const double = x => x * 2;
  const increment = x => x + 1;
  const square = x => x * x;

  test('pipe ejecuta de izquierda a derecha', () => {
    const fn = pipe(increment, double, square);
    expect(fn(2)).toBe(36); // (2+1)*2 = 6, 6^2 = 36
  });

  test('compose ejecuta de derecha a izquierda', () => {
    const fn = compose(increment, double, square);
    expect(fn(2)).toBe(9); // 2^2 = 4, 4*2 = 8, 8+1 = 9
  });
});

