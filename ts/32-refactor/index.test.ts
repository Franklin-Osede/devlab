import { processOrder } from './index';

describe('processOrder - Ejercicio 32 (TypeScript)', () => {
  test('debe procesar orden válida', () => {
    const order = {
      items: [{ price: 100, quantity: 2, name: 'Item', stock: 10 }]
    };
    
    const result = processOrder(order);
    expect(result.total).toBeDefined();
  });
});

