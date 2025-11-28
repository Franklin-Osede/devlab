import { createRateLimiter } from './index';

describe('createRateLimiter - Ejercicio 25 (TypeScript)', () => {
  test('debe limitar peticiones', () => {
    const limiter = createRateLimiter(2, 1000);
    expect(limiter('user1')).toBe(true);
    expect(limiter('user1')).toBe(true);
    expect(limiter('user1')).toBe(false);
  });
});

