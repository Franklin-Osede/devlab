# Solución: Flatten Arrays

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este ejercicio es perfecto para practicar **recursión**. Es común en entrevistas porque combina arrays, recursión y manejo de profundidad.

### Estructura Universal

```javascript
function flatten(array, depth = Infinity) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(array) || depth === 0) return array;
  
  // 2. REDUCIR RECURSIVAMENTE
  return array.reduce((result, item) => {
    if (Array.isArray(item) && depth > 0) {
      return result.concat(flatten(item, depth - 1));
    }
    result.push(item);
    return result;
  }, []);
}
```

## 📝 Explicación Paso a Paso

### Paso 1: Validación y Caso Base
```javascript
if (!Array.isArray(array) || depth === 0) return array;
// Si no es array o depth es 0, retornar tal cual
```

### Paso 2: Reduce con Recursión
```javascript
return array.reduce((result, item) => {
  // result es el acumulador (array plano)
  // item es cada elemento
}, []);
```

### Paso 3: Verificar si es Array Anidado
```javascript
if (Array.isArray(item) && depth > 0) {
  return result.concat(flatten(item, depth - 1));
  // Si es array y aún hay profundidad, aplanar recursivamente
}
```

### Paso 4: Añadir Elemento No-Array
```javascript
result.push(item);
// Si no es array, añadirlo directamente
```

## ✅ Código Final

```javascript
function flatten(array, depth = Infinity) {
  if (!Array.isArray(array) || depth === 0) return array;

  return array.reduce((result, item) => {
    if (Array.isArray(item) && depth > 0) {
      return result.concat(flatten(item, depth - 1));
    }
    result.push(item);
    return result;
  }, []);
}
```

## 🔑 Puntos Clave

1. **Usa recursión** para manejar profundidad arbitraria
2. **Reduce depth en cada llamada recursiva**
3. **Concatena** arrays aplanados
4. **Caso base**: depth === 0 o no es array

