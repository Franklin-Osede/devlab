# Solución: Top N Más Frecuentes

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este ejercicio combina **conteo**, **ordenamiento** y **extracción**. Muy común en análisis de datos.

### Estructura Universal

```javascript
function topNFrequent(items, n) {
  if (!Array.isArray(items) || n <= 0) return [];

  // 1. CONTAR OCURRENCIAS
  const counts = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // 2. CONVERTIR A ARRAY Y ORDENAR
  return Object.entries(counts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, n)
    .map(([value]) => value);
}
```

## 🔑 Puntos Clave

1. **Reduce para contar** ocurrencias eficientemente
2. **Object.entries** para convertir objeto → array
3. **Sort por count** descendente
4. **Slice y map** para extraer valores

