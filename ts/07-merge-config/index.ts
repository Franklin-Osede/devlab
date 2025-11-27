/**
 * Combina dos objetos de configuración sin mutar los originales
 * Versión TypeScript con genéricos
 */

function mergeConfig<T extends Record<string, any>>(
  defaultConfig: T,
  userConfig?: Partial<T>
): T {
  if (!userConfig) return { ...defaultConfig };
  if (!defaultConfig) return userConfig as T;
  
  return {
    ...defaultConfig,
    ...userConfig,
  };
}

export { mergeConfig };

