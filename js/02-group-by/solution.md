# Solución: Group By

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este patrón es **súper común** cuando necesitas organizar datos para dashboards, reportes, o agrupaciones en UI.

### Estructura Universal

```javascript
function groupBy(items, keyOrFn) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(items)) return {};
  
  // 2. DETERMINAR FUNCIÓN DE CLAVE
  const getKey = typeof keyOrFn === 'function' 
    ? keyOrFn 
    : (item) => item?.[keyOrFn];
  
  // 3. REDUCIR A OBJETO AGRUPADO
  return items.reduce((groups, item) => {
    const key = getKey(item);
    if (key === undefined) return groups; // Saltar si no hay clave
    
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}
```

## 📝 Explicación Paso a Paso

### Paso 1: Validación
```javascript
if (!Array.isArray(items)) return {};
```

### Paso 2: Función de Clave Flexible
**¿Por qué?** Porque a veces agrupas por propiedad, otras por resultado de función.

```javascript
const getKey = typeof keyOrFn === 'function'
  ? keyOrFn                    // Si es función, úsala directamente
  : (item) => item?.[keyOrFn]; // Si es string, accede a la propiedad
```

### Paso 3: Reducir a Objeto
**¿Por qué `reduce`?** Porque transformas un array en un objeto. Es el método perfecto.

```javascript
return items.reduce((groups, item) => {
  const key = getKey(item);
  
  // Si la clave no existe, saltar el elemento
  if (key === undefined) return groups;
  
  // Si el grupo no existe, crearlo
  if (!groups[key]) {
    groups[key] = [];
  }
  
  // Añadir el elemento al grupo
  groups[key].push(item);
  
  return groups;
}, {});
```

## ✅ Código Final (Memorizar la estructura)

```javascript
function groupBy(items, keyOrFn) {
  if (!Array.isArray(items)) return {};

  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : (item) => item?.[keyOrFn];

  return items.reduce((groups, item) => {
    const key = getKey(item);
    if (key === undefined) return groups;

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}
```

## 🎥 Script para Video de LinkedIn

### Intro (10 seg)
"Group By es uno de los ejercicios más útiles en el trabajo real. Te muestro cómo hacerlo bien."

### El Problema (20 seg)
"Tienes una lista de usuarios y necesitas agruparlos por país. O una lista de números y agruparlos por par/impar."

### Tu Enfoque Mental (30 seg)
"Mi patrón: validar → determinar función de clave (string o función) → usar reduce para construir el objeto agrupado. Reduce es perfecto porque transformas array → objeto."

### El Código (1 min)
"Primero valido el input. Luego creo una función getKey que funciona con string o función. Uso reduce porque transformo array en objeto. Si la clave no existe, creo el array. Luego añado el elemento."

### Por Qué Importa (20 seg)
"Lo usas en dashboards, reportes, agrupaciones en UI, análisis de datos. Es un patrón que aparece constantemente en el trabajo real."

## 🔑 Puntos Clave para Memorizar

1. **Usa `reduce` para transformar array → objeto**
2. **Soporta string O función como clave**
3. **Maneja claves undefined (saltar elemento)**
4. **Inicializa arrays vacíos cuando creas un grupo nuevo**
5. **Retorna objeto vacío si input inválido**

## 🎯 Variaciones Comunes

- Agrupar por múltiples propiedades (clave compuesta)
- Agrupar y contar (en vez de arrays, números)
- Agrupar y transformar (agrupar y luego mapear cada grupo)
- Agrupar con orden específico

**Todas siguen el mismo patrón mental con reduce.**

