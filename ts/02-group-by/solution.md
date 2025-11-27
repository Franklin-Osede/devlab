# Solución: Group By (TypeScript)

## 🧠 Patrón Mental (MEMORIZAR ESTO)

En TypeScript, este ejercicio es perfecto para practicar **genéricos** y **tipos condicionales**. Es más complejo que el anterior pero muy común en entrevistas TypeScript.

### Estructura Universal con Genéricos

```typescript
// Versión con genéricos (más flexible)
function groupBy<T>(
  items: T[],
  keyOrFn: keyof T | ((item: T) => string | number)
): Record<string, T[]> {
  if (!Array.isArray(items)) return {};

  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : (item: T) => String(item[keyOrFn]);

  return items.reduce((groups, item) => {
    const key = getKey(item);
    if (key === undefined) return groups;

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}
```

## 📝 Explicación Paso a Paso

### Paso 1: Genéricos
**¿Por qué?** Porque quieres que la función funcione con cualquier tipo de objeto.

```typescript
function groupBy<T>(items: T[], ...)
// <T> significa "cualquier tipo"
// items: T[] significa "array de cualquier tipo T"
```

### Paso 2: Tipar la Clave
**¿Por qué?** Porque puede ser una propiedad del objeto O una función.

```typescript
keyOrFn: keyof T | ((item: T) => string | number)
// keyof T → una propiedad del tipo T
// | → o
// (item: T) => string | number → función que retorna string o number
```

### Paso 3: Tipo de Retorno
**¿Por qué Record?** Porque es un objeto con claves string y valores arrays.

```typescript
Record<string, T[]>
// Record<K, V> = objeto con claves de tipo K y valores de tipo V
// En este caso: claves string, valores T[]
```

### Paso 4: Función de Clave con Tipos Condicionales
```typescript
const getKey =
  typeof keyOrFn === 'function'
    ? keyOrFn                    // Si es función, TypeScript sabe que es función
    : (item: T) => String(item[keyOrFn]); // Si es string, accede a la propiedad
```

### Paso 5: Reduce con Tipos
```typescript
return items.reduce((groups, item) => {
  const key = getKey(item); // TypeScript sabe que key es string | number
  // ...
  return groups;
}, {} as Record<string, T[]>); // Inicializamos con tipo explícito
```

## ✅ Código Final (Memorizar la estructura)

```typescript
function groupBy<T>(
  items: T[],
  keyOrFn: keyof T | ((item: T) => string | number)
): Record<string, T[]> {
  if (!Array.isArray(items)) return {};

  const getKey =
    typeof keyOrFn === 'function'
      ? keyOrFn
      : (item: T) => {
          const value = item[keyOrFn];
          return value != null ? String(value) : '';
        };

  return items.reduce((groups, item) => {
    const key = getKey(item);
    if (!key) return groups;

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}
```

## 🎥 Script para Video de LinkedIn

### Intro (10 seg)
"Group By en TypeScript es perfecto para aprender genéricos. Te muestro cómo hacerlo bien."

### El Problema (20 seg)
"Mismo problema que JavaScript: agrupar elementos por propiedad o función. Pero ahora con tipos genéricos para reutilización."

### Tu Enfoque Mental (30 seg)
"Mi patrón: uso genéricos `<T>` para que funcione con cualquier tipo. Tipó la clave como `keyof T | función`. Uso `Record<string, T[]>` para el retorno. TypeScript valida todo."

### El Código (1 min)
"Defino genéricos `<T>` para reutilización. La clave puede ser `keyof T` (propiedad) o función. Uso tipos condicionales para distinguir. Reduce construye el objeto tipado con `Record<string, T[]>`."

### Por Qué Importa (20 seg)
"Genéricos son fundamentales en TypeScript. Esta función funciona con usuarios, productos, órdenes, cualquier cosa. Los tipos te aseguran que todo es correcto."

## 🔑 Puntos Clave para Memorizar

1. **Usa genéricos `<T>` para funciones reutilizables**
2. **`keyof T` para acceder a propiedades del tipo**
3. **`Record<K, V>` para objetos con claves y valores tipados**
4. **Tipos condicionales para distinguir string vs función**
5. **Type assertions (`as`) cuando TypeScript no puede inferir**

## 🎯 Ventajas de TypeScript en este Ejercicio

- **Reutilización**: La función funciona con cualquier tipo
- **Seguridad**: TypeScript valida que uses propiedades existentes
- **Autocompletado**: El IDE sugiere propiedades disponibles
- **Refactoring**: Cambias tipos y TypeScript te avisa qué rompiste

**Genéricos + tipos condicionales = código profesional y reutilizable.**

