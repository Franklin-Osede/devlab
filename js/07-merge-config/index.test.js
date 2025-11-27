const { mergeConfig } = require('./index');
const fs = require('fs');
const path = require('path');

const loadSample = (filename) => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('mergeConfig - Ejercicio 07: Merge Configs', () => {
  
  describe('Sample 1: Merge básico', () => {
    const sample = loadSample('sample-1-basic.json');
    
    test('debe combinar configs correctamente', () => {
      const result = mergeConfig(sample.default, sample.user);
      
      expect(result.theme).toBe('dark'); // user sobrescribe
      expect(result.language).toBe('es'); // user sobrescribe
      expect(result.notifications).toBe(true); // de default
    });

    test('no debe mutar objetos originales', () => {
      const defaultCopy = { ...sample.default };
      const userCopy = { ...sample.user };
      
      mergeConfig(sample.default, sample.user);
      
      expect(sample.default).toEqual(defaultCopy);
      expect(sample.user).toEqual(userCopy);
    });
  });

  describe('Sample 2: Merge anidado (shallow)', () => {
    const sample = loadSample('sample-2-nested.json');
    
    test('debe hacer shallow merge (objetos anidados se sobrescriben)', () => {
      const result = mergeConfig(sample.default, sample.user);
      
      // En shallow merge, el objeto api completo se sobrescribe
      expect(result.api).toEqual({ timeout: 10000 });
      expect(result.api.baseUrl).toBeUndefined(); // Se pierde porque es shallow
    });
  });

  describe('Casos edge', () => {
    test('debe retornar copia de default si user es null', () => {
      const defaultConfig = { a: 1 };
      const result = mergeConfig(defaultConfig, null);
      expect(result).toEqual({ a: 1 });
      expect(result).not.toBe(defaultConfig); // Debe ser copia
    });

    test('debe retornar copia de user si default es null', () => {
      const userConfig = { b: 2 };
      const result = mergeConfig(null, userConfig);
      expect(result).toEqual({ b: 2 });
    });

    test('debe retornar objeto vacío si ambos son null', () => {
      const result = mergeConfig(null, null);
      expect(result).toEqual({});
    });
  });
});

