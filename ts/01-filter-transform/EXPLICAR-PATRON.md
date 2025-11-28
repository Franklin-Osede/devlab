# 🎤 Explicación del Patrón en Voz Alta (TypeScript)

## Script para Grabar tu Video de LinkedIn

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"TypeScript añade tipos al ejercicio más común de entrevistas. Te muestro cómo hacerlo bien."

---

**Leer el Problema (30 segundos):**
"Mismo problema que JavaScript: filtrar usuarios activos, ordenarlos, transformarlos. Pero ahora con tipos explícitos que TypeScript valida automáticamente."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para TypeScript:

1. Primero defino interfaces - para que TypeScript sepa la estructura de mis datos
2. Luego tipó la función - parámetros y retorno explícitos
3. El resto es igual que JavaScript - validar, filtrar, ordenar, transformar
4. Pero TypeScript valida todo automáticamente - si uso una propiedad que no existe, me avisa

Los tipos me ayudan a pensar mejor y evitar errores antes de ejecutar."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función con tipos:

Primero defino las interfaces. User tiene todas las propiedades que recibo.
[Escribe: interface User { id: number; name: string; ... }]

UserSummary tiene solo las que necesito retornar.
[Escribe: interface UserSummary { id: number; name: string; email: string; }]

Ahora tipó la función. Recibe User[] y retorna UserSummary[].
[Escribe: function getActiveUsers(users: User[]): UserSummary[] { ... }]

El resto es igual que JavaScript, pero TypeScript valida que uso las propiedades correctas.
[Escribe el resto del código explicando cada paso]"

---

**Por Qué Importa (30 segundos):**
"En entrevistas TypeScript, buscan que sepas tipar bien. Los tipos te ayudan a pensar mejor y evitar errores. Es la diferencia entre código que funciona y código profesional."

---

## 💡 Tips Específicos para TypeScript

- Menciona "interfaces" y "tipos genéricos"
- Explica cómo TypeScript valida automáticamente
- Muestra cómo el IDE te ayuda con autocompletado
- Compara con la versión JavaScript si es útil

