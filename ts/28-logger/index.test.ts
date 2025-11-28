import { createLogger } from './index';

describe('createLogger - Ejercicio 28 (TypeScript)', () => {
  test('debe loggear según nivel', () => {
    const logger = createLogger('info');
    const output = jest.fn();
    const loggerWithOutput = createLogger('info', output);
    
    loggerWithOutput.info('test');
    expect(output).toHaveBeenCalled();
  });
});

