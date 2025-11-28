import { promiseRace } from './index';

describe('promiseRace - Ejercicio 23 (TypeScript)', () => {
  test('debe retornar la primera promesa que resuelva', async () => {
    const promises = [
      new Promise(resolve => setTimeout(() => resolve(1), 100)),
      new Promise(resolve => setTimeout(() => resolve(2), 50))
    ];
    
    const result = await promiseRace(promises);
    expect(result).toBe(2);
  });
});

