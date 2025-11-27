# Solución: Normalizar Datos

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este patrón es **súper común** cuando trabajas con estados de frontend (React, Redux) o necesitas crear índices de datos para búsquedas rápidas.

### Estructura Universal

```javascript
function normalizeById(items) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(items)) return {};
  
  // 2. REDUCIR A OBJETO INDEXADO POR ID
  return items.reduce((byId, item) => {
    if (item?.id == null) return byId; // Saltar si no tiene id
    byId[item.id] = item;
    return byId;
  }, {});
}
```

## 📝 Explicación Paso a Paso

### Paso 1: Validación
```javascript
if (!Array.isArray(items)) return {};
```

### Paso 2: Reduce para Transformar Array → Objeto
**¿Por qué reduce?** Porque transformas un array en un objeto. Es el método perfecto.

```javascript
return items.reduce((byId, item) => {
  // byId es el acumulador (objeto)
  // item es cada elemento del array
}, {});
```

### Paso 3: Validar que tenga ID
```javascript
if (item?.id == null) return byId;
// Si no tiene id, saltar este elemento
```

### Paso 4: Asignar al Objeto
```javascript
byId[item.id] = item;
// Usa el id como clave, el objeto completo como valor
```

## ✅ Código Final (Memorizar la estructura)

```javascript
function normalizeById(items) {
  if (!Array.isArray(items)) return {};

  return items.reduce((byId, item) => {
    if (item?.id == null) return byId;
    byId[item.id] = item;
    return byId;
  }, {});
}
```

## 🎥 Script para Video de LinkedIn

### Intro (10 seg)
"Normalizar datos es un patrón que usas constantemente en frontend. Te muestro cómo hacerlo bien."

### El Problema (20 seg)
"Tienes un array de objetos con id y necesitas convertirlo en un objeto indexado por id para búsquedas rápidas."

### Tu Enfoque Mental (30 seg)
"Mi patrón: validar → usar reduce para transformar array en objeto → usar id como clave → asignar objeto completo como valor."

### El Código (1 min)
"Primero valido el input. Uso reduce porque transformo array en objeto. Si el item no tiene id, lo salto. Luego asigno byId[item.id] = item."

### Por Qué Importa (20 seg)
"Lo usas en Redux para normalizar estados, en React para crear índices, en cualquier lugar donde necesites búsqueda O(1) por id. Es fundamental en frontend moderno."

## 🔑 Puntos Clave para Memorizar

1. **Usa `reduce` para transformar array → objeto**
2. **Valida que el item tenga `id` antes de asignar**
3. **El id puede ser number o string**
4. **Si hay ids duplicados, el último sobrescribe**
5. **Retorna objeto vacío si input inválido**

## 🎯 Variaciones Comunes

- Normalizar con función de clave personalizada
- Normalizar y transformar (solo ciertas propiedades)
- Normalizar arrays anidados
- Desnormalizar (objeto → array)

**Todas siguen el mismo patrón mental con reduce.**

