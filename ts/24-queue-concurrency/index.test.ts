import { runQueue } from './index';

describe('runQueue - Ejercicio 24 (TypeScript)', () => {
  test('debe ejecutar tareas con límite de concurrencia', async () => {
    const tasks = [
      () => Promise.resolve(1),
      () => Promise.resolve(2),
      () => Promise.resolve(3)
    ];
    
    const results = await runQueue(tasks, 2);
    expect(results.length).toBe(3);
  });
});

