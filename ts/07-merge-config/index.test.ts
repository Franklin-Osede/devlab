import { mergeConfig } from './index';

describe('mergeConfig - Ejercicio 07: Merge Configs (TypeScript)', () => {
  test('debe combinar configs', () => {
    const defaultConfig = { theme: 'light', language: 'en' };
    const userConfig = { theme: 'dark' };
    
    const result = mergeConfig(defaultConfig, userConfig);
    expect(result.theme).toBe('dark');
    expect(result.language).toBe('en');
  });
});

