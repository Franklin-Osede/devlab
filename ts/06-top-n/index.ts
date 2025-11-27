/**
 * Devuelve los N elementos más frecuentes de un array
 * Versión TypeScript
 */

function topNFrequent<T extends string | number>(items: T[], n: number): T[] {
  if (!Array.isArray(items) || n <= 0) return [];

  const counts = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {} as Record<T, number>);

  return Object.entries(counts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, n)
    .map(([value]) => value as T);
}

export { topNFrequent };

