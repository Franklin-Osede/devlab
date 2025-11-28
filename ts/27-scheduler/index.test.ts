import { createScheduler } from './index';

describe('createScheduler - Ejercicio 27 (TypeScript)', () => {
  jest.useFakeTimers();
  
  test('debe programar función', () => {
    const scheduler = createScheduler();
    const fn = jest.fn();
    
    scheduler.schedule(fn, 100);
    jest.advanceTimersByTime(100);
    
    expect(fn).toHaveBeenCalled();
  });
});

