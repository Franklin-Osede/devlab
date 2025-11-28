import { validate } from './index';

describe('validate - Ejercicio 17 (TypeScript)', () => {
  const schema = {
    name: { required: true, type: 'string' as const },
    age: { required: true, type: 'number' as const, min: 18, max: 100 }
  };

  test('debe validar datos correctos', () => {
    const data = { name: 'Ana', age: 30 };
    const result = validate(schema, data);
    expect(result.valid).toBe(true);
  });
});

