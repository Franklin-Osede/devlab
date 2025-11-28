# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Normalizar datos es un patrón que usas constantemente en frontend. Te muestro cómo hacerlo bien."

---

**Leer el Problema (30 segundos):**
"Tengo un array de objetos con id y necesito convertirlo en un objeto indexado por id para búsquedas rápidas.

Por ejemplo, de esto:
```
[{ id: 1, name: 'Ana' }, { id: 2, name: 'Luis' }]
```

A esto:
```
{ 1: { id: 1, name: 'Ana' }, 2: { id: 2, name: 'Luis' } }
```

Esto me permite buscar por id en O(1) en vez de O(n)."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Validar que sea un array
2. Usar reduce para transformar array → objeto
3. Usar el id como clave del objeto
4. Asignar el objeto completo como valor
5. Retornar el objeto normalizado

Reduce es perfecto aquí porque transformo un array en un objeto."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Primero valido que sea un array. Si no lo es, retorno un objeto vacío.
[Escribe: if (!Array.isArray(items)) return {};]

Ahora uso reduce porque transformo array en objeto. El acumulador es un objeto vacío.
[Escribe: return items.reduce((byId, item) => { ... }, {});]

Dentro del reduce, valido que el item tenga id. Si no tiene id, lo salto.
[Escribe: if (item?.id == null) return byId;]

Luego uso el id como clave y asigno el objeto completo como valor.
[Escribe: byId[item.id] = item;]

Retorno el acumulador para la siguiente iteración.
[Escribe: return byId;]

Listo. Ahora ejecuto los tests para verificar.
[Ejecuta: npm test js/03-normalize]"

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso TODOS los días en el trabajo:
- En Redux para normalizar estados
- En React para crear índices de datos
- Cuando necesito búsqueda O(1) por id
- Para optimizar renders evitando búsquedas lineales

Es fundamental en frontend moderno. Sin esto, tus componentes serían lentos."

---

## 💡 Tips para el Video

1. Menciona que reduce es perfecto para transformar array → objeto
2. Explica por qué O(1) es mejor que O(n)
3. Muestra un ejemplo práctico de cuándo lo usarías en React/Redux
4. Ejecuta los tests para demostrar que funciona
