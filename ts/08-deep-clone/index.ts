/**
 * Crea una copia profunda de un objeto o array
 * Versión TypeScript
 */

function deepClone<T>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepClone) as T;
  }

  const cloned = {} as T;
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      (cloned as any)[key] = deepClone((value as any)[key]);
    }
  }
  return cloned;
}

export { deepClone };

