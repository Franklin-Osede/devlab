# 07 - Merge Configs

## 📋 Enunciado

Combina dos objetos de configuración, donde el segundo sobrescribe al primero, sin mutar los objetos originales.

## 🎯 Requisitos

- No mutar los objetos originales (inmutabilidad)
- El segundo objeto sobrescribe propiedades del primero
- Retornar nuevo objeto combinado
- Manejar objetos anidados (shallow merge)
- Manejar casos edge (null, undefined)

## 🧠 Patrón Mental a Memorizar

1. **Validar inputs**
2. **Spread operator** para crear copia del primero
3. **Spread del segundo** para sobrescribir
4. **Retornar** nuevo objeto

## ⏱️ Tiempo Esperado

- Primera vez: 10-15 minutos
- Con práctica: 3-5 minutos
- En entrevista: 2-3 minutos

