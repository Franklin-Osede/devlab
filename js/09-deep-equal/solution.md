# Solución: Deep Equal

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este ejercicio combina **recursión** con **validación de estructura**. Muy común en testing y validación.

### Estructura Universal

```javascript
function deepEqual(a, b) {
  // Comparación estricta primero
  if (a === b) return true;
  
  // Validar que ambos sean objetos
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }
  
  // Comparar claves
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  
  // Comparar valores recursivamente
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  
  return true;
}
```

## 🔑 Puntos Clave

1. **=== primero** para primitivos y referencias iguales
2. **Validar tipos** antes de comparar estructura
3. **Comparar número de claves** antes de iterar
4. **Recursión** para valores anidados

