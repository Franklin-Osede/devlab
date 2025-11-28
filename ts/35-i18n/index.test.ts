import { createI18n } from './index';

describe('createI18n - Ejercicio 35 (TypeScript)', () => {
  test('debe traducir textos', () => {
    const i18n = createI18n({
      en: { hello: 'Hello' },
      es: { hello: 'Hola' }
    });
    
    expect(i18n.t('hello', 'es')).toBe('Hola');
  });
});

