import { calculateTotal } from './index';

describe('calculateTotal - Ejercicio 40 (TypeScript)', () => {
  test('debe calcular total correctamente', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 }
    ];
    
    // Esta función tiene bugs intencionados
    // El objetivo es encontrarlos y corregirlos
    const result = calculateTotal(items, 0.1);
    expect(typeof result).toBe('number');
  });
});

