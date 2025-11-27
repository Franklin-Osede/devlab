const { throttle } = require('./index');

describe('throttle - Ejercicio 15', () => {
  jest.useFakeTimers();
  
  test('debe limitar ejecuciones', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);
    
    throttled();
    throttled();
    throttled();
    
    expect(fn).toHaveBeenCalledTimes(1);
    
    jest.advanceTimersByTime(100);
    throttled();
    expect(fn).toHaveBeenCalledTimes(2);
  });
});

