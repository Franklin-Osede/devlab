# Solución: Filtro Multidimensional

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este ejercicio combina **múltiples filtros** y **ordenamiento**. Muy común en e-commerce y dashboards.

### Estructura Universal

```javascript
function filterProducts(products, filters) {
  if (!Array.isArray(products)) return [];
  
  // Aplicar filtros en cadena
  let result = products
    .filter(condición1)
    .filter(condición2)
    .filter(condición3);
  
  // Aplicar ordenamiento
  if (sortBy === 'criterio') {
    result.sort(...);
  }
  
  return result;
}
```

## 🔑 Puntos Clave

1. **Filtros en cadena** (cada uno es independiente)
2. **Filtros opcionales** (usar `== null` para verificar)
3. **Ordenamiento al final** (después de filtrar)
4. **Destructuring** para claridad

