import { createTestRunner } from './index';

describe('createTestRunner - Ejercicio 31 (TypeScript)', () => {
  test('debe ejecutar tests', async () => {
    const runner = createTestRunner();
    runner.test('test1', () => {});
    const result = await runner.run();
    expect(result.total).toBe(1);
  });
});

