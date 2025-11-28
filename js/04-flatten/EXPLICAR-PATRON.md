# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Flatten es perfecto para practicar recursión. Te muestro cómo hacerlo sin usar .flat()."

---

**Leer el Problema (30 segundos):**
"Tengo un array anidado y necesito aplanarlo hasta cierta profundidad.

Por ejemplo:
```
[1, [2, [3, 4]]]
```

Debe convertirse en:
```
[1, 2, 3, 4]
```

Y debo poder controlar la profundidad. Si depth es 1, solo aplano un nivel."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Validar input y caso base (depth === 0 o no es array)
2. Usar reduce para iterar
3. Si el elemento es array y depth > 0, aplanar recursivamente
4. Si no es array, añadirlo directamente
5. Retornar el array aplanado

La clave es la recursión: llamo a la función dentro de sí misma con depth - 1."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Primero valido. Si no es array o depth es 0, retorno tal cual.
[Escribe: if (!Array.isArray(array) || depth === 0) return array;]

Ahora uso reduce para construir el array aplanado.
[Escribe: return array.reduce((result, item) => { ... }, []);]

Si el item es array y aún hay profundidad, aplanar recursivamente.
[Escribe: if (Array.isArray(item) && depth > 0) { return result.concat(flatten(item, depth - 1)); }]

Si no es array, lo añado directamente.
[Escribe: result.push(item);]

Retorno el acumulador.
[Escribe: return result;]

La magia está en la recursión: cada llamada reduce depth en 1 hasta llegar a 0."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso cuando:
- Proceso datos de APIs anidados
- Trabajo con estructuras de árbol
- Necesito simplificar datos complejos
- Preparo datos para visualizaciones

La recursión es fundamental en programación. Dominar esto te ayuda con cualquier estructura anidada."

---

## 💡 Tips para el Video

1. Explica qué es recursión de forma simple
2. Muestra cómo depth se reduce en cada llamada
3. Ejecuta con diferentes profundidades para demostrar
4. Menciona cuándo usarías esto en el trabajo real
