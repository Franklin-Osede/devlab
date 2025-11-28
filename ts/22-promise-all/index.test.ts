import { promiseAll } from './index';

describe('promiseAll - Ejercicio 22 (TypeScript)', () => {
  test('debe resolver todas las promesas', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3)
    ];
    
    const result = await promiseAll(promises);
    expect(result).toEqual([1, 2, 3]);
  });
});

