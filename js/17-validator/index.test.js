const { validate } = require('./index');

describe('validate - Ejercicio 17', () => {
  const schema = {
    name: { required: true, type: 'string' },
    age: { required: true, type: 'number', min: 18, max: 100 },
    email: { required: false, type: 'string' }
  };

  test('debe validar datos correctos', () => {
    const data = { name: 'Ana', age: 30, email: 'ana@test.com' };
    const result = validate(schema, data);
    expect(result.valid).toBe(true);
  });

  test('debe detectar campos requeridos faltantes', () => {
    const data = { age: 30 };
    const result = validate(schema, data);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('name es requerido');
  });

  test('debe detectar tipos incorrectos', () => {
    const data = { name: 123, age: 30 };
    const result = validate(schema, data);
    expect(result.valid).toBe(false);
  });
});

