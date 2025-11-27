/**
 * Aplana un array anidado hasta la profundidad especificada
 * Versión TypeScript
 */

function flatten<T>(array: (T | T[])[], depth: number = Infinity): T[] {
  if (!Array.isArray(array) || depth === 0) return array as T[];

  return array.reduce((result: T[], item) => {
    if (Array.isArray(item) && depth > 0) {
      return result.concat(flatten(item, depth - 1));
    }
    result.push(item as T);
    return result;
  }, []);
}

export { flatten };

