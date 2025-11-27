const { searchText } = require('./index');

describe('searchText - Ejercicio 18', () => {
  const texts = [
    'JavaScript is awesome',
    'Python is great',
    'JavaScript tutorials',
    'Learn JavaScript'
  ];

  test('debe encontrar y ordenar por relevancia', () => {
    const results = searchText('JavaScript', texts);
    expect(results[0]).toBe('Learn JavaScript'); // Empieza con el término
    expect(results.length).toBe(3);
  });
});

