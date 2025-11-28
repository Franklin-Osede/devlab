import { runMiddlewares } from './index';

describe('runMiddlewares - Ejercicio 26 (TypeScript)', () => {
  test('debe ejecutar middlewares en orden', async () => {
    const order: number[] = [];
    const middlewares = [
      async (req, res, next) => { order.push(1); await next(); },
      async (req, res, next) => { order.push(2); await next(); }
    ];
    
    await runMiddlewares({}, {}, middlewares);
    expect(order).toEqual([1, 2]);
  });
});

