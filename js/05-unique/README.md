# 05 - Eliminar Duplicados

## 📋 Enunciado

Elimina elementos duplicados de un array usando una estrategia configurable.

Implementa `uniqueBy(items, keyOrFn)` que:
- Si `keyOrFn` es string: elimina duplicados por esa propiedad
- Si `keyOrFn` es función: elimina duplicados por el resultado de la función
- Si no se proporciona: elimina duplicados por valor

## 🎯 Requisitos

- Si el input no es array, devolver `[]`
- Mantener el primer elemento de cada duplicado
- Funcionar con primitivos y objetos
- Manejar casos edge (null, undefined)

## 🧠 Patrón Mental a Memorizar

1. **Validar input**
2. **Determinar función de clave** (string, función, o identidad)
3. **Usar Set para tracking** de claves vistas
4. **Filtrar** manteniendo solo primeros
5. **Retornar** array único

## ⏱️ Tiempo Esperado

- Primera vez: 15-20 minutos
- Con práctica: 5-7 minutos
- En entrevista: 3-5 minutos

