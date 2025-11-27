# Solución: Filtrar y Transformar (TypeScript)

## 🧠 Patrón Mental (MEMORIZAR ESTO)

En TypeScript, el patrón es el mismo que JavaScript, pero añades **tipos explícitos** que te ayudan a pensar mejor y evitar errores.

### Estructura Universal con Tipos

```typescript
// 1. DEFINIR INTERFACES
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
  createdAt: string;
}

interface UserSummary {
  id: number;
  name: string;
  email: string;
}

// 2. TIPAR LA FUNCIÓN
function getActiveUsers(users: User[]): UserSummary[] {
  // 3. VALIDAR INPUT
  if (!Array.isArray(users)) return [];
  
  // 4. FILTRAR → ORDENAR → TRANSFORMAR
  return users
    .filter(user => user?.active)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}
```

## 📝 Explicación Paso a Paso

### Paso 1: Definir Interfaces
**¿Por qué?** Porque TypeScript necesita saber la estructura de tus datos.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
  createdAt: string;
  // Propiedades opcionales con ?
  role?: string;
  department?: string;
}
```

### Paso 2: Tipar la Función
**¿Por qué?** Porque TypeScript valida que uses los tipos correctos.

```typescript
function getActiveUsers(users: User[]): UserSummary[] {
  // users: User[] → array de User
  // : UserSummary[] → retorna array de UserSummary
}
```

### Paso 3: Validación con Tipos
```typescript
if (!Array.isArray(users)) return [];
// TypeScript sabe que después de esto, users es un array
```

### Paso 4: Filtrar con Tipos Seguros
```typescript
.filter(user => user?.active)
// TypeScript valida que user tiene la propiedad active
```

### Paso 5: Ordenar con Tipos
```typescript
.sort((a, b) => {
  // TypeScript sabe que a y b son User
  return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
})
```

### Paso 6: Transformar con Tipos
```typescript
.map(user => ({
  id: user.id,      // TypeScript valida que existe
  name: user.name,  // TypeScript valida que existe
  email: user.email // TypeScript valida que existe
}))
// TypeScript valida que el objeto retornado coincide con UserSummary
```

## ✅ Código Final (Memorizar la estructura)

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
  createdAt: string;
}

interface UserSummary {
  id: number;
  name: string;
  email: string;
}

function getActiveUsers(users: User[]): UserSummary[] {
  if (!Array.isArray(users)) return [];

  return users
    .filter(user => user?.active)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}
```

## 🎥 Script para Video de LinkedIn

### Intro (10 seg)
"TypeScript añade tipos al ejercicio más común de entrevistas. Te muestro cómo hacerlo bien."

### El Problema (20 seg)
"Mismo problema que JavaScript: filtrar usuarios activos, ordenarlos, transformarlos. Pero ahora con tipos explícitos."

### Tu Enfoque Mental (30 seg)
"Mi patrón: primero defino interfaces para los tipos. Luego tipó la función con parámetros y retorno. El resto es igual que JavaScript, pero TypeScript valida todo."

### El Código (1 min)
"Defino User y UserSummary como interfaces. La función recibe User[] y retorna UserSummary[]. TypeScript valida que uso las propiedades correctas y que el retorno coincide con el tipo."

### Por Qué Importa (20 seg)
"En entrevistas TypeScript, buscan que sepas tipar bien. Los tipos te ayudan a pensar mejor y evitar errores. Es la diferencia entre código que funciona y código profesional."

## 🔑 Puntos Clave para Memorizar

1. **Siempre define interfaces primero**
2. **Tipa explícitamente parámetros y retorno**
3. **Usa tipos opcionales (`?`) cuando corresponda**
4. **TypeScript valida automáticamente que uses tipos correctos**
5. **Los tipos ayudan a pensar mejor el problema**

## 🎯 Ventajas de TypeScript

- **Autocompletado**: El IDE te sugiere propiedades
- **Detección de errores**: Encuentra bugs antes de ejecutar
- **Documentación**: Los tipos documentan el código
- **Refactoring seguro**: Cambias tipos y TypeScript te dice qué rompiste

**Los mismos patrones mentales, pero con seguridad de tipos.**

