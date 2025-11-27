# Solución: Eliminar Duplicados

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este ejercicio combina **flexibilidad de API** con **eficiencia** usando Set para O(1) lookups.

### Estructura Universal

```javascript
function uniqueBy(items, keyOrFn) {
  if (!Array.isArray(items)) return [];

  const seen = new Set();
  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : typeof keyOrFn === 'string'
      ? (item) => item?.[keyOrFn]
      : (item) => item; // Identidad si no se proporciona

  return items.filter(item => {
    const key = getKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
```

## 🔑 Puntos Clave

1. **Usa Set** para O(1) lookups (más eficiente que array.indexOf)
2. **Soporta string, función, o nada** como estrategia
3. **Mantiene orden** (primer elemento de cada duplicado)
4. **Filtra** en vez de reducir para claridad

