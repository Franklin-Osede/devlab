# 01 - Filtrar y Transformar

## 📋 Enunciado

Dada una lista de elementos (usuarios, productos, órdenes, etc.), debes:

1. **Filtrar** solo los elementos que cumplan una condición (ej: activos, disponibles, etc.)
2. **Ordenar** por una propiedad específica (fecha, precio, nombre, etc.)
3. **Transformar** a un formato más simple (solo las propiedades necesarias)
4. **Manejar** casos edge (input inválido, arrays vacíos, etc.)

## 🎯 Requisitos

- Si el input no es un array, devolver `[]`
- Filtrar elementos que cumplan la condición
- Ordenar por la propiedad especificada (ascendente o descendente)
- Mapear a un objeto con solo las propiedades requeridas
- Manejar valores `null` o `undefined` en los elementos

## 💡 Ejemplos

### Ejemplo 1: Usuarios activos
```javascript
const users = [
  { id: 1, name: "Ana", email: "ana@test.com", active: true, createdAt: "2024-01-15" },
  { id: 2, name: "Luis", email: "luis@test.com", active: false, createdAt: "2024-01-01" },
  { id: 3, name: "Carmen", email: "carmen@test.com", active: true, createdAt: "2024-02-01" }
];

// Resultado esperado: solo activos, ordenados por fecha, con id, name, email
```

### Ejemplo 2: Productos disponibles
```javascript
const products = [
  { id: 1, name: "Laptop", price: 999, stock: 5, category: "electronics" },
  { id: 2, name: "Mouse", price: 25, stock: 0, category: "electronics" },
  { id: 3, name: "Keyboard", price: 75, stock: 10, category: "electronics" }
];

// Resultado esperado: solo con stock > 0, ordenados por precio, con id, name, price
```

## 🧠 Patrón Mental a Memorizar

1. **Validar input** → `if (!Array.isArray(input)) return []`
2. **Filtrar** → `.filter(item => condición)`
3. **Ordenar** → `.sort((a, b) => comparación)`
4. **Transformar** → `.map(item => ({ propiedades }))`
5. **Retornar** → `return resultado`

## ⏱️ Tiempo Esperado

- Primera vez: 15-20 minutos
- Con práctica: 5-7 minutos
- En entrevista: 3-5 minutos

