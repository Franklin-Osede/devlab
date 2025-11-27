const { render } = require('./index');

describe('render - Ejercicio 16', () => {
  test('debe reemplazar placeholders', () => {
    const template = 'Hola {{name}}, tienes {{age}} años';
    const data = { name: 'Ana', age: 30 };
    expect(render(template, data)).toBe('Hola Ana, tienes 30 años');
  });

  test('debe mantener placeholders sin valor', () => {
    const template = 'Hola {{name}}';
    expect(render(template, {})).toBe('Hola {{name}}');
  });
});

