import { can } from './index';

describe('can - Ejercicio 20 (TypeScript)', () => {
  test('admin debe tener todos los permisos', () => {
    const admin = { role: 'admin' as const };
    expect(can(admin, 'read', 'post')).toBe(true);
    expect(can(admin, 'delete', 'post')).toBe(true);
  });
});

