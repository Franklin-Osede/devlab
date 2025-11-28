import { searchText } from './index';

describe('searchText - Ejercicio 18 (TypeScript)', () => {
  const texts = [
    'JavaScript is awesome',
    'Python is great',
    'JavaScript tutorials'
  ];

  test('debe encontrar y ordenar por relevancia', () => {
    const results = searchText('JavaScript', texts);
    expect(results.length).toBe(2);
  });
});

