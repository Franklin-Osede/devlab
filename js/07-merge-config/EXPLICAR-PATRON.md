# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Merge de configuraciones es fundamental en JavaScript. Te muestro cómo hacerlo sin mutar objetos."

---

**Leer el Problema (30 segundos):**
"Tengo dos objetos de configuración: uno por defecto y otro del usuario.

Necesito combinarlos donde el usuario sobrescribe los defaults, pero sin mutar los objetos originales.

Por ejemplo:
```
defaults: { theme: 'light', language: 'en' }
user: { theme: 'dark' }
result: { theme: 'dark', language: 'en' }
```

El resultado debe ser un nuevo objeto, no modificar los originales."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Validar inputs
2. Usar spread operator para crear copia del primero
3. Usar spread del segundo para sobrescribir
4. Retornar nuevo objeto combinado

Spread operator crea copias, no muta los originales. Es la forma moderna y segura."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Primero valido. Si no hay userConfig, retorno copia de defaultConfig.
[Escribe: if (!userConfig) return { ...defaultConfig };]

Si no hay defaultConfig, retorno copia de userConfig.
[Escribe: if (!defaultConfig) return { ...userConfig };]

Ahora combino usando spread operator. Primero defaults, luego user.
[Escribe: return { ...defaultConfig, ...userConfig };]

El orden importa: primero defaults, luego user sobrescribe.

Spread operator crea un nuevo objeto, no muta los originales.
Esto es inmutabilidad, fundamental en React y programación funcional."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso TODOS los días cuando:
- Combino configuraciones de aplicaciones
- Trabajo con estados en React (inmutabilidad)
- Creo objetos con defaults
- Evito bugs por mutación accidental

La inmutabilidad es clave en JavaScript moderno. Mutar objetos causa bugs difíciles de encontrar."

---

## 💡 Tips para el Video

1. Explica qué es inmutabilidad y por qué importa
2. Muestra qué pasa si mutas vs si no mutas
3. Menciona que esto es shallow merge (no profundo)
4. Ejecuta tests para demostrar que no muta
