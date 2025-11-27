# Solución: Deep Clone

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este ejercicio es perfecto para practicar **recursión** y entender **referencias vs valores**.

### Estructura Universal

```javascript
function deepClone(value) {
  // Casos base: primitivos
  if (value === null || typeof value !== 'object') {
    return value;
  }
  
  // Arrays: clonar cada elemento
  if (Array.isArray(value)) {
    return value.map(deepClone);
  }
  
  // Objetos: clonar cada propiedad
  const cloned = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      cloned[key] = deepClone(value[key]);
    }
  }
  return cloned;
}
```

## 🔑 Puntos Clave

1. **Casos base primero**: primitivos, null, undefined
2. **Recursión** para objetos y arrays anidados
3. **hasOwnProperty** para evitar propiedades del prototipo
4. **Map para arrays**, loop para objetos

