/**
 * Normaliza un array de objetos con id a un objeto indexado por id
 * Versión TypeScript con genéricos
 */

interface Identifiable {
  id: string | number;
  [key: string]: any;
}

/**
 * Normaliza array de objetos con id a objeto indexado por id
 */
function normalizeById<T extends Identifiable>(items: T[]): Record<string | number, T> {
  if (!Array.isArray(items)) return {} as Record<string | number, T>;

  return items.reduce((byId, item) => {
    if (item?.id == null) return byId;
    byId[item.id] = item;
    return byId;
  }, {} as Record<string | number, T>);
}

export { normalizeById, Identifiable };

