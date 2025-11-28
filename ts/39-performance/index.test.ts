import { measurePerformance } from './index';

describe('measurePerformance - Ejercicio 39 (TypeScript)', () => {
  test('debe medir tiempo de ejecución', () => {
    const fn = jest.fn(() => 42);
    const measured = measurePerformance(fn, 'test');
    const result = measured();
    
    expect(result).toBe(42);
    expect(fn).toHaveBeenCalled();
  });
});

