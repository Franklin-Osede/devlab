const { jsonToCsv, csvToJson } = require('./index');

describe('jsonToCsv/csvToJson - Ejercicio 19', () => {
  const data = [
    { name: 'Ana', age: 30, city: 'Madrid' },
    { name: 'Luis', age: 25, city: 'Barcelona' }
  ];

  test('debe convertir JSON a CSV', () => {
    const csv = jsonToCsv(data);
    expect(csv).toContain('name,age,city');
    expect(csv).toContain('Ana,30,Madrid');
  });

  test('debe convertir CSV a JSON', () => {
    const csv = 'name,age,city\nAna,30,Madrid';
    const json = csvToJson(csv);
    expect(json).toHaveLength(1);
    expect(json[0].name).toBe('Ana');
  });
});

