import { uniqueBy } from './index';

interface User {
  id: number;
  name: string;
  country: string;
}

describe('uniqueBy - Ejercicio 05: Eliminar Duplicados (TypeScript)', () => {
  test('debe eliminar duplicados por propiedad', () => {
    const users: User[] = [
      { id: 1, name: 'Ana', country: 'Spain' },
      { id: 1, name: 'Ana', country: 'Spain' },
      { id: 2, name: 'Luis', country: 'Mexico' }
    ];
    
    const result = uniqueBy(users, 'id');
    expect(result.length).toBe(2);
  });

  test('debe eliminar duplicados por función', () => {
    const result = uniqueBy([1, 2, 2, 3], x => x);
    expect(result).toEqual([1, 2, 3]);
  });
});

