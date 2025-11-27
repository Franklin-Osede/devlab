# 01 - Filtrar y Transformar (TypeScript)

## 📋 Enunciado

Mismo ejercicio que la versión JavaScript, pero con tipos explícitos.

Dada una lista de elementos (usuarios, productos, órdenes, etc.), debes:

1. **Filtrar** solo los elementos que cumplan una condición (ej: activos, disponibles, etc.)
2. **Ordenar** por una propiedad específica (fecha, precio, nombre, etc.)
3. **Transformar** a un formato más simple (solo las propiedades necesarias)
4. **Manejar** casos edge (input inválido, arrays vacíos, etc.)

## 🎯 Requisitos TypeScript

- Tipar correctamente los parámetros de entrada
- Tipar el valor de retorno
- Usar interfaces/tipos para los objetos
- Manejar tipos opcionales (`?`)
- Usar genéricos si es necesario

## 💡 Diferencia con JavaScript

En TypeScript debes:
- Definir interfaces para los tipos de datos
- Tipar explícitamente los parámetros y retorno
- Usar tipos genéricos para reutilización
- Manejar tipos opcionales correctamente

## 🧠 Patrón Mental a Memorizar

1. **Definir interfaces** para los tipos de datos
2. **Tipar la función** con parámetros y retorno explícitos
3. **Validar input** → `if (!Array.isArray(items)) return []`
4. **Filtrar** → `.filter(item => condición)`
5. **Ordenar** → `.sort((a, b) => comparación)`
6. **Transformar** → `.map(item => ({ propiedades }))`
7. **Retornar** → `return resultado`

## ⏱️ Tiempo Esperado

- Primera vez: 20-25 minutos (incluyendo tipos)
- Con práctica: 7-10 minutos
- En entrevista: 5-7 minutos

