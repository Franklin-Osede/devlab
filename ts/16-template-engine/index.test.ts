import { render } from './index';

describe('render - Ejercicio 16 (TypeScript)', () => {
  test('debe reemplazar placeholders', () => {
    const template = 'Hola {{name}}, tienes {{age}} años';
    const data = { name: 'Ana', age: 30 };
    expect(render(template, data)).toBe('Hola Ana, tienes 30 años');
  });
});

