# 🚀 Instrucciones de Inicio Rápido

## 📦 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Verificar que todo funciona
npm test
```

## 🎯 Flujo de Trabajo Recomendado

### Paso 1: Elige un Ejercicio
Empieza con los ejercicios 01 y 02 que ya están completos.

### Paso 2: Hazlo en JavaScript Primero
```bash
# Lee el enunciado
cat js/01-filter-transform/README.md

# Estudia la solución
cat js/01-filter-transform/solution.md

# Intenta resolverlo tú mismo
# Edita: js/01-filter-transform/index.js

# Ejecuta los tests
npm test js/01-filter-transform
```

### Paso 3: Practica con Diferentes Samples
Los ejercicios vienen con 4 samples diferentes. Practica hasta que puedas resolverlo con cualquiera sin mirar la solución.

### Paso 4: Añade Más Samples
Cuando domines el ejercicio, añade más samples en `samples/sample-5-*.json` y actualiza los tests.

### Paso 5: Hazlo en TypeScript
```bash
# Lee el enunciado TypeScript
cat ts/01-filter-transform/README.md

# Estudia cómo se añaden tipos
cat ts/01-filter-transform/solution.md

# Intenta resolverlo con tipos
# Edita: ts/01-filter-transform/index.ts

# Ejecuta los tests
npm test ts/01-filter-transform
```

### Paso 6: Graba un Video
Explica:
- El problema
- Tu enfoque mental
- El código paso a paso
- Por qué es importante

## 📝 Comandos Útiles

```bash
# Ejecutar todos los tests
npm test

# Solo tests de JavaScript
npm run test:js

# Solo tests de TypeScript
npm run test:ts

# Modo watch (ejecuta tests automáticamente al guardar)
npm run test:watch

# Ver cobertura de código
npm run test:coverage
```

## 🎓 Orden Recomendado de Ejercicios

1. **01 - Filtrar y Transformar** (JS → TS)
2. **02 - Group By** (JS → TS)
3. **03 - Normalizar datos** (JS → TS)
4. **04 - Flatten arrays** (JS → TS)
5. Y así sucesivamente...

**Regla de oro**: Haz primero JavaScript para entender el patrón, luego TypeScript para añadir tipos.

## 💡 Tips

- **No memorices código, memoriza patrones mentales**
- **Practica con temporizador** (10-15 min por ejercicio)
- **Añade nuevos samples** constantemente
- **Graba videos** explicando, no solo resolviendo
- **Repite ejercicios anteriores** cada semana

## 🐛 Si Algo No Funciona

```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# Verificar versión de Node (necesitas Node 16+)
node --version

# Verificar que TypeScript está instalado
npx tsc --version
```

---

**¡Empieza con el ejercicio 01 y diviértete aprendiendo!** 🚀

