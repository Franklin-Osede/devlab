import { transformError } from './index';

describe('transformError - Ejercicio 38 (TypeScript)', () => {
  test('debe transformar Error a formato estándar', () => {
    const error = new Error('Test error');
    const result = transformError(error);
    expect(result.message).toBe('Test error');
    expect(result.code).toBeDefined();
  });
});

