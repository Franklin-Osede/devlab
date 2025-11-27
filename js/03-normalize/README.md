# 03 - Normalizar Datos

## 📋 Enunciado

Convierte un array de objetos con `id` en un objeto donde las claves son los `id` y los valores son los objetos completos.

Esto es útil para:
- Optimizar búsquedas por ID (O(1) en vez de O(n))
- Crear índices de datos
- Preparar datos para estados de React/Redux

## 🎯 Requisitos

- Si el input no es un array, devolver `{}`
- Si un objeto no tiene `id`, saltarlo
- Manejar `id` duplicados (el último sobrescribe)
- Retornar objeto vacío si el array está vacío

## 💡 Ejemplos

### Ejemplo 1: Usuarios
```javascript
const users = [
  { id: 1, name: "Ana", email: "ana@test.com" },
  { id: 2, name: "Luis", email: "luis@test.com" }
];

normalizeById(users);
// Resultado: { 1: { id: 1, name: "Ana", ... }, 2: { id: 2, name: "Luis", ... } }
```

### Ejemplo 2: Productos
```javascript
const products = [
  { id: "prod-1", name: "Laptop", price: 999 },
  { id: "prod-2", name: "Mouse", price: 25 }
];

normalizeById(products);
// Resultado: { "prod-1": {...}, "prod-2": {...} }
```

## 🧠 Patrón Mental a Memorizar

1. **Validar input** → `if (!Array.isArray(items)) return {}`
2. **Crear objeto acumulador** → `{}`
3. **Iterar y asignar** → `reduce` o `forEach`
4. **Usar id como clave** → `acc[item.id] = item`
5. **Retornar objeto normalizado**

## ⏱️ Tiempo Esperado

- Primera vez: 10-15 minutos
- Con práctica: 3-5 minutos
- En entrevista: 2-3 minutos

