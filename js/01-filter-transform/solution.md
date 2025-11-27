# Solución: Filtrar y Transformar

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este ejercicio es el **más común** en entrevistas. Aprende este patrón y lo usarás en el 80% de los ejercicios.

### Estructura Universal

```javascript
function filterAndTransform(items, options) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(items)) return [];
  
  // 2. FILTRAR
  const filtered = items.filter(item => condición);
  
  // 3. ORDENAR
  const sorted = filtered.sort((a, b) => comparación);
  
  // 4. TRANSFORMAR
  const transformed = sorted.map(item => ({ propiedades }));
  
  // 5. RETORNAR
  return transformed;
}
```

## 📝 Explicación Paso a Paso

### Paso 1: Validación
**¿Por qué?** Porque en producción siempre recibes datos inesperados.

```javascript
if (!Array.isArray(items)) return [];
```

### Paso 2: Filtrar
**¿Por qué?** Porque necesitas solo los elementos que cumplen la condición.

```javascript
.filter(item => item?.active)  // Usa optional chaining para seguridad
```

### Paso 3: Ordenar
**¿Por qué?** Porque los datos vienen desordenados y necesitas un orden específico.

```javascript
.sort((a, b) => {
  // Para fechas
  return new Date(a.createdAt) - new Date(b.createdAt);
  
  // Para números
  return a.price - b.price;
  
  // Para strings
  return a.name.localeCompare(b.name);
  
  // Descendente: invierte el orden
  return b.price - a.price;
})
```

### Paso 4: Transformar
**¿Por qué?** Porque solo necesitas ciertas propiedades, no todo el objeto.

```javascript
.map(item => ({
  id: item.id,
  name: item.name,
  email: item.email
}))
```

## ✅ Código Final (Memorizar la estructura)

```javascript
function getActiveUsers(users) {
  if (!Array.isArray(users)) return [];

  return users
    .filter(user => user?.active)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}
```

## 🎥 Script para Video de LinkedIn

### Intro (10 seg)
"Hoy te muestro el ejercicio MÁS común en entrevistas de pair programming: filtrar y transformar datos."

### El Problema (20 seg)
"Tienes una lista de usuarios y necesitas: filtrar solo los activos, ordenarlos por fecha, y devolver solo id, name y email."

### Tu Enfoque Mental (30 seg)
"Mi patrón mental siempre es el mismo: validar → filtrar → ordenar → transformar → retornar. Esta estructura funciona para el 80% de ejercicios de arrays."

### El Código (1 min)
"Primero valido que sea un array. Luego filtro con optional chaining para seguridad. Ordeno por fecha. Y finalmente mapeo a solo las propiedades que necesito."

### Por Qué Importa (20 seg)
"Esto lo haces TODOS los días en el trabajo: procesar datos de APIs, limpiar respuestas, preparar datos para UI. Dominar este patrón te hace rápido y confiable."

## 🔑 Puntos Clave para Memorizar

1. **Siempre valida el input primero**
2. **Usa optional chaining (`?.`) para seguridad**
3. **Encadena métodos: filter → sort → map**
4. **El orden importa: primero filtrar, luego ordenar**
5. **Retorna objetos simples, no todo el objeto original**

## 🎯 Variaciones Comunes

- Filtrar por múltiples condiciones
- Ordenar por múltiples criterios
- Transformar con cálculos (ej: añadir campo calculado)
- Manejar arrays anidados

**Todas siguen el mismo patrón mental.**

