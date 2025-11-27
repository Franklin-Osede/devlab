# 02 - Group By

## 📋 Enunciado

Agrupa elementos de un array por una propiedad específica o por el resultado de una función.

Dado un array de elementos y una clave (string) o función, devuelve un objeto donde:
- Las **claves** son los valores únicos de esa propiedad/función
- Los **valores** son arrays con todos los elementos que tienen esa clave

## 🎯 Requisitos

- Si el input no es un array, devolver `{}`
- Debe funcionar con string (nombre de propiedad) o función
- Manejar elementos donde la propiedad no existe
- Retornar objeto vacío si el array está vacío

## 💡 Ejemplos

### Ejemplo 1: Agrupar por propiedad
```javascript
const users = [
  { id: 1, name: "Ana", country: "Spain" },
  { id: 2, name: "Luis", country: "Mexico" },
  { id: 3, name: "Carmen", country: "Spain" }
];

groupBy(users, "country");
// Resultado: { Spain: [user1, user3], Mexico: [user2] }
```

### Ejemplo 2: Agrupar por función
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

groupBy(numbers, n => n % 2 === 0 ? "even" : "odd");
// Resultado: { even: [2, 4, 6], odd: [1, 3, 5] }
```

## 🧠 Patrón Mental a Memorizar

1. **Validar input** → `if (!Array.isArray(items)) return {}`
2. **Determinar función de clave** → string o función
3. **Crear objeto acumulador** → `{}`
4. **Iterar y agrupar** → `reduce` o `forEach`
5. **Retornar objeto agrupado**

## ⏱️ Tiempo Esperado

- Primera vez: 15-20 minutos
- Con práctica: 5-7 minutos
- En entrevista: 3-5 minutos

