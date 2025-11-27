const { getActiveUsers } = require('./index');
const fs = require('fs');
const path = require('path');

// Cargar samples
const loadSample = (filename) => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('getActiveUsers - Ejercicio 01: Filtrar y Transformar', () => {
  
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
      expect(result[0]).not.toHaveProperty('active');
      expect(result[0]).not.toHaveProperty('role');
    });
  });

  describe('Sample 2: Productos (adaptado para usuarios)', () => {
    // Nota: Este sample es para productos, pero puedes adaptar la función
    // o crear una función genérica. Por ahora, lo usamos para practicar el patrón.
    const products = loadSample('sample-2-products.json');
    
    test('debe manejar arrays vacíos', () => {
      expect(getActiveUsers([])).toEqual([]);
    });

    test('debe manejar input inválido', () => {
      expect(getActiveUsers(null)).toEqual([]);
      expect(getActiveUsers(undefined)).toEqual([]);
      expect(getActiveUsers('not an array')).toEqual([]);
      expect(getActiveUsers(123)).toEqual([]);
    });
  });

  describe('Sample 3: Órdenes (casos edge)', () => {
    const orders = loadSample('sample-3-orders.json');
    
    test('debe manejar elementos con propiedades undefined', () => {
      const usersWithUndefined = [
        { id: 1, name: 'Test', email: 'test@test.com', active: true, createdAt: '2024-01-01' },
        { id: 2, name: 'Test2', email: 'test2@test.com', active: undefined, createdAt: '2024-01-02' },
        { id: 3, name: 'Test3', email: 'test3@test.com', active: true, createdAt: '2024-01-03' }
      ];
      
      const result = getActiveUsers(usersWithUndefined);
      expect(result.length).toBe(2); // Solo los que tienen active === true
    });
  });

  describe('Sample 4: Transacciones (validación robusta)', () => {
    test('debe manejar usuarios sin createdAt', () => {
      const usersWithoutDate = [
        { id: 1, name: 'Test', email: 'test@test.com', active: true },
        { id: 2, name: 'Test2', email: 'test2@test.com', active: true, createdAt: '2024-01-01' }
      ];
      
      // No debería fallar, aunque el orden puede ser inesperado
      const result = getActiveUsers(usersWithoutDate);
      expect(result.length).toBe(2);
    });
  });

  describe('Casos adicionales para práctica', () => {
    test('debe retornar array vacío si ningún usuario está activo', () => {
      const inactiveUsers = [
        { id: 1, name: 'Test', email: 'test@test.com', active: false, createdAt: '2024-01-01' },
        { id: 2, name: 'Test2', email: 'test2@test.com', active: false, createdAt: '2024-01-02' }
      ];
      
      expect(getActiveUsers(inactiveUsers)).toEqual([]);
    });

    test('debe manejar un solo usuario activo', () => {
      const singleUser = [
        { id: 1, name: 'Test', email: 'test@test.com', active: true, createdAt: '2024-01-01' }
      ];
      
      const result = getActiveUsers(singleUser);
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        id: 1,
        name: 'Test',
        email: 'test@test.com'
      });
    });
  });
});

