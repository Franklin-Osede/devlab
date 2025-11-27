# 08 - Deep Clone

## 📋 Enunciado

Crea una copia profunda (deep copy) de un objeto o array, clonando todos los objetos y arrays anidados.

## 🎯 Requisitos

- Clonar objetos y arrays anidados recursivamente
- Manejar primitivos (retornar tal cual)
- Manejar null y undefined
- No clonar funciones, Date, Map, Set (versión simple)
- Retornar nuevo objeto/array sin referencias compartidas

## 🧠 Patrón Mental a Memorizar

1. **Validar tipo** → si es primitivo, retornar tal cual
2. **Si es array** → clonar cada elemento recursivamente
3. **Si es objeto** → clonar cada propiedad recursivamente
4. **Retornar** nuevo objeto/array

## ⏱️ Tiempo Esperado

- Primera vez: 20-25 minutos
- Con práctica: 7-10 minutos
- En entrevista: 5-7 minutos

