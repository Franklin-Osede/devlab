import { getActiveUsers, User } from './index';
import * as fs from 'fs';
import * as path from 'path';

// Cargar samples
const loadSample = (filename: string): User[] => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('getActiveUsers - Ejercicio 01: Filtrar y Transformar (TypeScript)', () => {
  
  describe('Sample 1: Usuarios', () => {
    const users = loadSample('sample-1-users.json');
    
    test('debe filtrar solo usuarios activos', () => {
      const result = getActiveUsers(users);
      expect(result.length).toBe(3); // Solo Ana, Carmen y Pedro están activos
    });

    test('debe ordenar por fecha de creación ascendente', () => {
      const result = getActiveUsers(users);
      expect(result[0].name).toBe('Ana García'); // 2024-01-15
      expect(result[1].name).toBe('Pedro Sánchez'); // 2024-01-20
      expect(result[2].name).toBe('Carmen López'); // 2024-02-01
    });

    test('debe transformar a solo id, name, email', () => {
      const result = getActiveUsers(users);
      expect(result[0]).toEqual({
        id: 1,
        name: 'Ana García',
        email: 'ana@test.com'
      });
      // TypeScript valida que no tenga otras propiedades
      expect(result[0]).not.toHaveProperty('active');
      expect(result[0]).not.toHaveProperty('role');
    });

    test('debe tener tipos correctos', () => {
      const result = getActiveUsers(users);
      // TypeScript valida que result es UserSummary[]
      expect(Array.isArray(result)).toBe(true);
      if (result.length > 0) {
        expect(typeof result[0].id).toBe('number');
        expect(typeof result[0].name).toBe('string');
        expect(typeof result[0].email).toBe('string');
      }
    });
  });

  describe('Casos edge', () => {
    test('debe manejar arrays vacíos', () => {
      expect(getActiveUsers([])).toEqual([]);
    });

    test('debe manejar input inválido', () => {
      // TypeScript debería prevenir esto, pero validamos en runtime también
      expect(getActiveUsers(null as any)).toEqual([]);
      expect(getActiveUsers(undefined as any)).toEqual([]);
    });

    test('debe manejar usuarios sin propiedades opcionales', () => {
      const usersWithoutOptional: User[] = [
        { id: 1, name: 'Test', email: 'test@test.com', active: true, createdAt: '2024-01-01' }
      ];
      
      const result = getActiveUsers(usersWithoutOptional);
      expect(result.length).toBe(1);
    });
  });
});

