import { jsonToCsv, csvToJson } from './index';

describe('jsonToCsv/csvToJson - Ejercicio 19 (TypeScript)', () => {
  const data = [
    { name: 'Ana', age: 30, city: 'Madrid' },
    { name: 'Luis', age: 25, city: 'Barcelona' }
  ];

  test('debe convertir JSON a CSV', () => {
    const csv = jsonToCsv(data);
    expect(csv).toContain('name,age,city');
  });
});

