const { debounce } = require('./index');

describe('debounce - Ejercicio 14', () => {
  jest.useFakeTimers();
  
  test('debe retrasar ejecución', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    
    debounced();
    expect(fn).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('debe cancelar ejecución anterior si se llama de nuevo', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    
    debounced();
    debounced();
    debounced();
    
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

