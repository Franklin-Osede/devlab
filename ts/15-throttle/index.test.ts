import { throttle } from './index';

describe('throttle - Ejercicio 15 (TypeScript)', () => {
  jest.useFakeTimers();
  
  test('debe limitar ejecuciones', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);
    
    throttled();
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

