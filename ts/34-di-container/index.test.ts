import { createContainer } from './index';

describe('createContainer - Ejercicio 34 (TypeScript)', () => {
  test('debe registrar y resolver servicios', () => {
    const container = createContainer();
    container.register('test', () => 'value');
    expect(container.resolve('test')).toBe('value');
  });
});

