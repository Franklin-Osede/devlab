import { createEventEmitter } from './index';

describe('createEventEmitter - Ejercicio 36 (TypeScript)', () => {
  test('debe emitir y escuchar eventos', () => {
    const emitter = createEventEmitter();
    const handler = jest.fn();
    
    emitter.on('test', handler);
    emitter.emit('test', 'data');
    
    expect(handler).toHaveBeenCalledWith('data');
  });
});

