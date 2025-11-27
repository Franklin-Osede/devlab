const { can } = require('./index');

describe('can - Ejercicio 20', () => {
  test('admin debe tener todos los permisos', () => {
    const admin = { role: 'admin' };
    expect(can(admin, 'read', 'post')).toBe(true);
    expect(can(admin, 'delete', 'post')).toBe(true);
  });

  test('editor debe tener read y write', () => {
    const editor = { role: 'editor' };
    expect(can(editor, 'read', 'post')).toBe(true);
    expect(can(editor, 'write', 'post')).toBe(true);
    expect(can(editor, 'delete', 'post')).toBe(false);
  });

  test('viewer solo debe tener read', () => {
    const viewer = { role: 'viewer' };
    expect(can(viewer, 'read', 'post')).toBe(true);
    expect(can(viewer, 'write', 'post')).toBe(false);
  });
});

