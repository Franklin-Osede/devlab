# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Memoize cachea resultados de funciones. Te muestro cómo implementarlo y cuándo usarlo."

---

**Leer el Problema (30 segundos):**
"Tengo una función costosa que se llama con los mismos argumentos muchas veces.

En vez de recalcular cada vez, quiero cachear el resultado y retornarlo si los argumentos son iguales.

Por ejemplo, calcular factorial de 5 es costoso. Si lo calculo una vez, quiero guardar el resultado."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Crear un Map para el cache
2. Retornar función que envuelve la original
3. Convertir argumentos a clave (string)
4. Verificar si existe en cache
5. Si existe, retornar del cache
6. Si no, ejecutar función, guardar en cache y retornar

La clave es usar los argumentos como clave del cache."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Creo un Map para el cache. Map es mejor que objeto para esto.
[Escribe: const cache = new Map();]

Retorno una función que envuelve la original.
[Escribe: return function(...args) { ... };]

Convierto los argumentos a string para usarlos como clave.
[Escribe: const key = JSON.stringify(args);]

Verifico si existe en cache.
[Escribe: if (cache.has(key)) { return cache.get(key); }]

Si existe, retorno del cache directamente. No ejecuto la función.

Si no existe, ejecuto la función original.
[Escribe: const result = fn.apply(this, args);]

Guardo el resultado en cache.
[Escribe: cache.set(key, result);]

Y retorno el resultado.
[Escribe: return result;]

La próxima vez que se llame con los mismos argumentos, retornará del cache instantáneamente."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso cuando:
- Tengo funciones costosas que se llaman repetidamente
- Optimizo cálculos matemáticos complejos
- Cacheo resultados de transformaciones de datos
- Mejoro performance de funciones puras

Memoize solo funciona con funciones puras (mismo input = mismo output).
Es una técnica fundamental de optimización."

---

## 💡 Tips para el Video

1. Explica qué es una función pura
2. Muestra cómo el cache mejora performance
3. Ejecuta tests para demostrar que cachea correctamente
4. Menciona cuándo NO usar memoize (funciones impuras)
