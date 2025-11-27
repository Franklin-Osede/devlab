# 06 - Top N Más Frecuentes

## 📋 Enunciado

Dado un array de elementos (strings, números, etc.), devuelve los N elementos más frecuentes.

## 🎯 Requisitos

- Si el input no es array o n <= 0, devolver `[]`
- Contar ocurrencias de cada elemento
- Ordenar por frecuencia descendente
- Retornar solo los primeros N elementos
- Manejar empates (mantener orden original)

## 🧠 Patrón Mental a Memorizar

1. **Validar input**
2. **Contar ocurrencias** (usar Map u objeto)
3. **Convertir a array** de [valor, count]
4. **Ordenar por count** descendente
5. **Tomar primeros N** y extraer valores
6. **Retornar** array de valores

## ⏱️ Tiempo Esperado

- Primera vez: 15-20 minutos
- Con práctica: 5-7 minutos
- En entrevista: 3-5 minutos

