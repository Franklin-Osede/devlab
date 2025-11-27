import { groupBy } from './index';
import * as fs from 'fs';
import * as path from 'path';

// Interfaces para los tests
interface User {
  id: number;
  name: string;
  country: string;
  role: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface Order {
  id: string;
  status: string;
  total: number;
  createdAt: string;
}

// Cargar samples
const loadSample = <T>(filename: string): T[] => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('groupBy - Ejercicio 02: Group By (TypeScript)', () => {
  
  describe('Sample 1: Agrupar usuarios por país', () => {
    const users = loadSample<User>('sample-1-users.json');
    
    test('debe agrupar usuarios por país', () => {
      const result = groupBy(users, 'country');
      
      expect(result.Spain).toHaveLength(3);
      expect(result.Mexico).toHaveLength(1);
      expect(result.Argentina).toHaveLength(1);
    });

    test('debe tener tipos correctos', () => {
      const result = groupBy(users, 'country');
      // TypeScript valida que result es Record<string, User[]>
      expect(typeof result).toBe('object');
      expect(Array.isArray(result.Spain)).toBe(true);
      if (result.Spain && result.Spain.length > 0) {
        expect(result.Spain[0]).toHaveProperty('id');
        expect(result.Spain[0]).toHaveProperty('name');
        expect(result.Spain[0]).toHaveProperty('country');
      }
    });
  });

  describe('Sample 2: Agrupar productos por categoría', () => {
    const products = loadSample<Product>('sample-2-products.json');
    
    test('debe agrupar productos por categoría', () => {
      const result = groupBy(products, 'category');
      
      expect(result.electronics).toHaveLength(3);
      expect(result.furniture).toHaveLength(2);
    });
  });

  describe('Sample 3: Agrupar números con función', () => {
    const numbers = loadSample<number>('sample-3-numbers.json');
    
    test('debe agrupar números por par/impar usando función', () => {
      const result = groupBy(numbers, n => n % 2 === 0 ? 'even' : 'odd');
      
      expect(result.even).toHaveLength(5);
      expect(result.odd).toHaveLength(5);
    });

    test('debe agrupar números por rango usando función', () => {
      const result = groupBy(numbers, n => {
        if (n <= 3) return 'low';
        if (n <= 7) return 'medium';
        return 'high';
      });
      
      expect(result.low).toHaveLength(3);
      expect(result.medium).toHaveLength(4);
      expect(result.high).toHaveLength(3);
    });
  });

  describe('Sample 4: Agrupar órdenes por status', () => {
    const orders = loadSample<Order>('sample-4-orders.json');
    
    test('debe agrupar órdenes por status', () => {
      const result = groupBy(orders, 'status');
      
      expect(result.completed).toHaveLength(2);
      expect(result.pending).toHaveLength(2);
      expect(result.cancelled).toHaveLength(1);
    });
  });

  describe('Casos edge', () => {
    test('debe retornar objeto vacío si input no es array', () => {
      expect(groupBy(null as any, 'key')).toEqual({});
      expect(groupBy(undefined as any, 'key')).toEqual({});
    });

    test('debe retornar objeto vacío si array está vacío', () => {
      expect(groupBy([], 'key')).toEqual({});
    });

    test('debe manejar elementos sin la propiedad', () => {
      interface Item {
        id: number;
        name: string;
        category?: string;
      }
      
      const items: Item[] = [
        { id: 1, name: 'A', category: 'X' },
        { id: 2, name: 'B' }, // Sin category
        { id: 3, name: 'C', category: 'Y' }
      ];
      
      const result = groupBy(items, 'category');
      expect(result.X).toHaveLength(1);
      expect(result.Y).toHaveLength(1);
      expect(result['']).toHaveLength(1); // El sin category se agrupa con clave vacía
    });
  });
});

