# 04 - Flatten Arrays

## 📋 Enunciado

Aplana un array anidado a un solo nivel o completamente (según la profundidad especificada).

Implementa `flatten(array, depth = Infinity)` sin usar `.flat()` nativo.

## 🎯 Requisitos

- Si el input no es un array, devolverlo tal cual
- Si depth es 0, devolver el array sin modificar
- Si depth es Infinity, aplanar completamente
- Manejar arrays vacíos y arrays anidados profundos

## 🧠 Patrón Mental a Memorizar

1. **Validar input** → si no es array, retornar tal cual
2. **Verificar depth** → si es 0, retornar sin modificar
3. **Recursión** → si es array y depth > 0, aplanar recursivamente
4. **Concatenar** → unir arrays aplanados
5. **Retornar** → array plano

## ⏱️ Tiempo Esperado

- Primera vez: 15-20 minutos
- Con práctica: 5-7 minutos
- En entrevista: 3-5 minutos

