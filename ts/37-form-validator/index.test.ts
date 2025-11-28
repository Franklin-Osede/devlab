import { createFormValidator } from './index';

describe('createFormValidator - Ejercicio 37 (TypeScript)', () => {
  test('debe validar paso', () => {
    const validator = createFormValidator([
      { fields: { name: { required: true } } }
    ]);
    
    const result = validator.validateStep(0, { name: 'Test' });
    expect(result.valid).toBe(true);
  });
});

