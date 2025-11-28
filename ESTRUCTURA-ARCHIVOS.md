# 📁 Estructura de Archivos de Cada Ejercicio

## Para JavaScript

Cada ejercicio en `js/XX-ejercicio/` tiene:

### 📄 `README.md`
**Qué es:** Enunciado del problema
**Cuándo leerlo:** Primero, antes de empezar
**Contiene:** Descripción del problema, ejemplos, requisitos

### 📝 `practice.js`
**Qué es:** Archivo en blanco para que practiques
**Cuándo usarlo:** Cuando intentas resolver el ejercicio sin mirar la solución
**Cómo usarlo:**
1. Abre este archivo
2. Escribe tu solución aquí
3. Ejecuta tests: `npm test js/XX-ejercicio`
4. Compara con `index.js` cuando termines

### ✅ `index.js`
**Qué es:** Solución completa del ejercicio
**Cuándo mirarlo:** Después de intentar resolverlo tú mismo
**Contiene:** Código comentado con explicaciones

### 🧪 `index.test.js`
**Qué es:** Tests del ejercicio
**Cuándo ejecutarlo:** Siempre después de escribir código
**Cómo ejecutarlo:** `npm test js/XX-ejercicio`

### 📚 `solution.md`
**Qué es:** Explicación del patrón mental (solo ejercicios 01-10)
**Cuándo leerlo:** Para entender el patrón antes de practicar
**Contiene:** Patrón mental, explicación paso a paso, puntos clave

### 🎤 `EXPLICAR-PATRON.md`
**Qué es:** Script para grabar tu video de LinkedIn
**Cuándo usarlo:** Cuando ya dominas el ejercicio y quieres grabar un video
**Contiene:** Texto exacto para leer en voz alta mientras grabas

### 📦 `samples/`
**Qué es:** Datos de prueba diferentes
**Cuándo usarlos:** Para practicar con diferentes contextos
**Cómo usarlos:** Los tests los cargan automáticamente

---

## Para TypeScript

Cada ejercicio en `ts/XX-ejercicio/` tiene la misma estructura:

- `README.md` - Enunciado con enfoque TypeScript
- `practice.ts` - Archivo en blanco para practicar con tipos
- `index.ts` - Solución con tipos e interfaces
- `index.test.ts` - Tests con tipos
- `EXPLICAR-PATRON.md` - Script para video (versión TypeScript)
- `samples/` - Mismos samples que JavaScript

---

## 🎯 Flujo de Trabajo Recomendado

### Paso 1: Leer el Problema
```bash
cat js/01-filter-transform/README.md
```

### Paso 2: Practicar sin Mirar la Solución
```bash
# Abre practice.js y escribe tu solución
code js/01-filter-transform/practice.js
```

### Paso 3: Ejecutar Tests
```bash
npm test js/01-filter-transform
```

### Paso 4: Comparar con la Solución
```bash
# Si fallan los tests, compara con index.js
code js/01-filter-transform/index.js
```

### Paso 5: Estudiar el Patrón
```bash
# Lee solution.md (si existe) o EXPLICAR-PATRON.md
cat js/01-filter-transform/EXPLICAR-PATRON.md
```

### Paso 6: Repetir hasta Dominar
- Vuelve a `practice.js`
- Borra tu solución anterior
- Escribe de nuevo sin mirar `index.js`
- Repite hasta que pases los tests sin mirar

### Paso 7: Grabar Video (Opcional)
```bash
# Usa EXPLICAR-PATRON.md como guión
cat js/01-filter-transform/EXPLICAR-PATRON.md
# Graba tu pantalla mientras lees y escribes
```

---

## 💡 Tips

1. **Nunca mires `index.js` antes de intentar resolverlo**
2. **Usa `practice.js` para todas tus prácticas**
3. **Cuando domines un ejercicio, puedes borrar `practice.js` y empezar de nuevo**
4. **`EXPLICAR-PATRON.md` es tu guión para videos - personalízalo**
5. **Añade más samples en `samples/` cuando domines el ejercicio**

---

## 📊 Resumen de Archivos

| Archivo | Propósito | Cuándo Usarlo |
|---------|-----------|---------------|
| `README.md` | Entender el problema | Primero |
| `practice.js/ts` | Escribir tu solución | Durante práctica |
| `index.js/ts` | Ver solución correcta | Después de intentar |
| `index.test.js/ts` | Verificar tu código | Después de escribir |
| `solution.md` | Entender el patrón | Para estudiar |
| `EXPLICAR-PATRON.md` | Grabar video | Cuando dominas |
| `samples/` | Datos de prueba | Automático en tests |

