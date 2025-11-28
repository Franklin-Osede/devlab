# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Eliminar duplicados es común, pero hacerlo flexible es lo que te hace pro. Te muestro cómo."

---

**Leer el Problema (30 segundos):**
"Tengo un array y necesito eliminar duplicados, pero de forma flexible:
- Puedo eliminar por propiedad (ej: por id)
- Puedo eliminar por función (ej: por categoría)
- O simplemente por valor si son primitivos

La función debe ser flexible y eficiente."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Validar que sea array
2. Determinar función de clave (string, función, o identidad)
3. Usar Set para tracking de claves vistas (O(1) lookup)
4. Filtrar manteniendo solo primeros de cada duplicado
5. Retornar array único

La clave es usar Set en vez de array para O(1) en vez de O(n) lookups."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Primero valido el input.
[Escribe: if (!Array.isArray(items)) return [];]

Creo un Set para tracking eficiente.
[Escribe: const seen = new Set();]

Ahora determino la función de clave. Puede ser función, string, o identidad.
[Escribe: const getKey = typeof keyOrFn === 'function' ? keyOrFn : typeof keyOrFn === 'string' ? (item) => item?.[keyOrFn] : (item) => item;]

Uso filter para mantener solo los primeros.
[Escribe: return items.filter(item => { ... });]

Para cada item, obtengo la clave.
[Escribe: const key = getKey(item);]

Manejo null/undefined como claves válidas usando Symbol.
[Escribe: const keyToCheck = key === null || key === undefined ? Symbol('nullish') : key;]

Si ya vi esta clave, filtro el item.
[Escribe: if (seen.has(keyToCheck)) return false;]

Si no, la añado al Set y mantengo el item.
[Escribe: seen.add(keyToCheck); return true;]

Set me da O(1) lookups, mucho más eficiente que array.indexOf que es O(n)."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso cuando:
- Proceso listas de usuarios evitando duplicados
- Limpio datos de APIs
- Preparo datos para visualizaciones
- Optimizo rendimiento evitando búsquedas lineales

La flexibilidad de la API y la eficiencia de Set hacen esta función profesional."

---

## 💡 Tips para el Video

1. Explica por qué Set es mejor que array para lookups
2. Muestra las tres formas de usar la función (string, función, nada)
3. Menciona la complejidad O(1) vs O(n)
4. Ejecuta tests con diferentes casos
