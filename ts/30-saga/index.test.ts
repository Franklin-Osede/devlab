import { executeSaga } from './index';

describe('executeSaga - Ejercicio 30 (TypeScript)', () => {
  test('debe ejecutar pasos en orden', async () => {
    const steps = [
      { execute: async () => 1 },
      { execute: async () => 2 }
    ];
    
    const result = await executeSaga(steps);
    expect(result.success).toBe(true);
    expect(result.results).toEqual([1, 2]);
  });
});

