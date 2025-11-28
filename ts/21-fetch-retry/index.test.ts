import { fetchWithRetry } from './index';

describe('fetchWithRetry - Ejercicio 21 (TypeScript)', () => {
  // Tests básicos - en producción usarías mocks
  test('debe tener la función definida', () => {
    expect(typeof fetchWithRetry).toBe('function');
  });
});

