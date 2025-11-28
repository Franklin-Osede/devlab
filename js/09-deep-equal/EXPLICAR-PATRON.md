# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Deep equal compara objetos profundamente. Te muestro cómo implementarlo con recursión."

---

**Leer el Problema (30 segundos):**
"Necesito comparar dos objetos o arrays y verificar que sean iguales en todos los niveles anidados.

`===` solo compara referencias, no contenido. Si dos objetos tienen las mismas propiedades pero son objetos diferentes, `===` retorna false.

Necesito comparar el contenido recursivamente."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Comparar con === primero (cubre primitivos y referencias iguales)
2. Validar que ambos sean objetos
3. Comparar número de claves
4. Comparar que tengan las mismas claves
5. Comparar valores recursivamente para cada clave
6. Retornar true si todo coincide

La recursión compara valores anidados profundamente."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Primero comparación estricta. Si son iguales, retorno true.
[Escribe: if (a === b) return true;]

Esto cubre primitivos y referencias iguales.

Ahora valido que ambos sean objetos.
[Escribe: if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) { return false; }]

Si alguno no es objeto o es null, no pueden ser iguales.

Obtengo las claves de ambos objetos.
[Escribe: const keysA = Object.keys(a); const keysB = Object.keys(b);]

Comparo el número de claves. Si es diferente, no son iguales.
[Escribe: if (keysA.length !== keysB.length) return false;]

Ahora comparo cada clave. Si alguna falta en B, no son iguales.
[Escribe: for (const key of keysA) { if (!keysB.includes(key)) return false; ... }]

Para cada clave, comparo los valores recursivamente.
[Escribe: if (!deepEqual(a[key], b[key])) return false;]

Si todas las comparaciones pasan, retorno true.
[Escribe: return true;]

La recursión maneja cualquier nivel de anidación."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso cuando:
- Comparo estados en tests
- Verifico igualdad de objetos complejos
- Valido datos en validaciones
- Trabajo con estructuras de datos anidadas

Deep equal es esencial en testing y validación de datos."

---

## 💡 Tips para el Video

1. Explica por qué === no funciona para objetos
2. Muestra la comparación paso a paso
3. Ejecuta tests con diferentes casos
4. Menciona cuándo usarías esto en tests
