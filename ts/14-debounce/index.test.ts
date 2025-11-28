import { debounce } from './index';

describe('debounce - Ejercicio 14 (TypeScript)', () => {
  jest.useFakeTimers();
  
  test('debe retrasar ejecución', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    
    debounced();
    expect(fn).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

