# 🚀 DevLab - 40 Ejercicios Comunes de Entrevistas

Repositorio de práctica para convertirte en experto en pair programming y coding challenges.

## 📋 Plan de 30 Días

### Semana 1: Fundamentos (Ejercicios 1-10)
- **Día 1-2**: Ejercicios 1-2 (Arrays básicos)
- **Día 3-4**: Ejercicios 3-5 (Objetos y transformaciones)
- **Día 5-7**: Ejercicios 6-10 (Funciones avanzadas)

### Semana 2: Intermedio (Ejercicios 11-20)
- Repetir ejercicios 1-10 con temporizador (10 min c/u)
- Nuevos ejercicios 11-20

### Semana 3: Avanzado (Ejercicios 21-30)
- Repetir ejercicios 1-20 con temporizador
- Nuevos ejercicios 21-30

### Semana 4: Maestría (Ejercicios 31-40)
- Todos los ejercicios bajo presión (5-7 min c/u)
- Nuevos ejercicios 31-40
- Simulaciones de pair programming

## 🎯 Metodología

### Para JavaScript:
1. **Lee el enunciado** en `js/XX-ejercicio/README.md`
2. **Escribe tu solución** en `practice.js` (sin mirar `index.js`)
3. **Ejecuta los tests**: `npm test js/XX-ejercicio`
4. **Compara con la solución** en `index.js` si fallan los tests
5. **Estudia el patrón** en `solution.md` o `EXPLICAR-PATRON.md`
6. **Repite** borrando `practice.js` y escribiendo de nuevo
7. **Graba un video** usando `EXPLICAR-PATRON.md` como guión

### Para TypeScript:
1. **Haz primero la versión JavaScript** para entender el patrón
2. **Escribe tu solución TypeScript** en `practice.ts` (sin mirar `index.ts`)
3. **Ejecuta los tests**: `npm test ts/XX-ejercicio`
4. **Compara con la solución** en `index.ts` si fallan los tests
5. **Estudia cómo añadir tipos** (interfaces, genéricos, tipos condicionales)
6. **Graba un video** usando `EXPLICAR-PATRON.md` como guión
7. **Compara ambas versiones** (JS vs TS) para entender la diferencia

## 📁 Estructura

```
devlab/
├── js/                         # Ejercicios en JavaScript
│   ├── 01-filter-transform/
│   │   ├── README.md          # Enunciado del ejercicio
│   │   ├── practice.js        # Archivo en blanco para practicar
│   │   ├── index.js           # Solución completa
│   │   ├── index.test.js      # Tests con múltiples samples
│   │   ├── solution.md        # Explicación del patrón (ejercicios 01-10)
│   │   ├── EXPLICAR-PATRON.md # Script para grabar video
│   │   └── samples/           # Datos de prueba (añade más aquí)
│   │       ├── sample-1.json
│   │       ├── sample-2.json
│   │       └── ...
│
├── ts/                         # Ejercicios en TypeScript
│   ├── 01-filter-transform/
│   │   ├── README.md          # Enunciado (con enfoque TypeScript)
│   │   ├── practice.ts        # Archivo en blanco para practicar con tipos
│   │   ├── index.ts           # Solución con tipos e interfaces
│   │   ├── index.test.ts      # Tests con tipos
│   │   ├── EXPLICAR-PATRON.md # Script para grabar video (TypeScript)
│   │   └── samples/           # Mismos samples que JS
│   │       └── ...
```

## 🚀 Uso

```bash
# Instalar dependencias
npm install

# Ejecutar tests de JavaScript
npm run test:js

# Ejecutar tests de TypeScript
npm run test:ts

# Ejecutar todos los tests
npm test

# Ejecutar tests de un ejercicio específico
npm test js/01-filter-transform
npm test ts/01-filter-transform

# Modo watch (para desarrollo)
npm run test:watch
```

## 📝 Añadir Nuevos Samples

Cuando domines un ejercicio, añade más samples en la carpeta `samples/` del ejercicio y actualiza los tests. Esto te ayudará a dominar el patrón con diferentes contextos.

## 🎥 Para Videos de LinkedIn

Cada ejercicio incluye un script sugerido en `solution.md` para grabar tu video explicando:
- El problema
- Tu enfoque mental
- El código paso a paso
- Por qué es importante en el trabajo real

## 📚 Los 40 Ejercicios

### Arrays y Objetos (1-10)
1. Filtrar y transformar
2. Group by
3. Normalizar datos
4. Flatten arrays
5. Eliminar duplicados
6. Top N más frecuentes
7. Merge configs
8. Deep clone
9. Deep equal
10. Filtro multidimensional

### Funciones Avanzadas (11-20)
11. Currying
12. Pipe/Compose
13. Memoize
14. Debounce
15. Throttle
16. Template engine
17. Validador de esquema
18. Text search con scoring
19. Conversión JSON ↔ CSV
20. Sistema de permisos

### Async y Backend (21-30)
21. Fetch con retries
22. Promise.all personalizado
23. Promise.race personalizado
24. Cola con concurrencia limitada
25. Rate limiter
26. Middleware runner
27. Scheduler básico
28. Logger configurable
29. Cache con TTL
30. Saga/transactional workflow

### Arquitectura y Calidad (31-40)
31. Mini test runner
32. Refactor de función gigante
33. Adapter entre APIs
34. DI container simple
35. i18n básico
36. EventEmitter/pub-sub
37. Validador multipaso
38. Transformador de errores
39. Medición de performance
40. Debugging intencionado

---

**Recuerda**: La clave no es memorizar código, sino memorizar **patrones mentales**. Cuando veas un problema similar en una entrevista, reconocerás el patrón al instante.

