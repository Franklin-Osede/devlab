# 02 - Group By (TypeScript)

## 📋 Enunciado

Mismo ejercicio que la versión JavaScript, pero con tipos explícitos y genéricos.

Agrupa elementos de un array por una propiedad específica o por el resultado de una función.

## 🎯 Requisitos TypeScript

- Usar genéricos para hacer la función reutilizable
- Tipar correctamente los parámetros de entrada
- Tipar el valor de retorno
- Manejar tipos de clave (string | number | symbol)
- Usar tipos condicionales si es necesario

## 💡 Diferencia con JavaScript

En TypeScript debes:
- Usar genéricos (`<T>`) para hacer la función reutilizable
- Tipar la función clave correctamente
- Manejar tipos de retorno con Record o tipos indexados
- Usar tipos condicionales para distinguir entre string y función

## 🧠 Patrón Mental a Memorizar

1. **Definir genéricos** para hacer la función reutilizable
2. **Tipar la función clave** (string o función)
3. **Validar input** → `if (!Array.isArray(items)) return {}`
4. **Determinar función de clave** con tipos condicionales
5. **Reducir a objeto agrupado** con tipos correctos
6. **Retornar objeto tipado**

## ⏱️ Tiempo Esperado

- Primera vez: 20-25 minutos (incluyendo tipos y genéricos)
- Con práctica: 7-10 minutos
- En entrevista: 5-7 minutos

