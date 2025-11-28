import { createCache } from './index';

describe('createCache - Ejercicio 29 (TypeScript)', () => {
  test('debe guardar y recuperar valores', () => {
    const cache = createCache<string>(1000);
    cache.set('key1', 'value1');
    expect(cache.get('key1')).toBe('value1');
  });
});

