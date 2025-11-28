# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video de LinkedIn

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"¿Sabes cuál es el ejercicio MÁS común en entrevistas de pair programming? Te muestro cómo resolverlo de memoria."

---

**Leer el Problema (30 segundos):**
"Hoy voy a resolver este problema:

Tengo una lista de usuarios y necesito:
- Filtrar solo los activos
- Ordenarlos por fecha de creación
- Y devolver solo id, name y email

Básicamente necesito procesar un array de objetos y transformarlo."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto siempre es el mismo, y funciona para el 80% de ejercicios de arrays:

1. Primero valido el input - porque en producción siempre recibes datos inesperados
2. Luego filtro - solo los elementos que cumplen la condición
3. Ordeno - por la propiedad que necesito
4. Transformo - a solo las propiedades que necesito
5. Retorno - el resultado final

Esta estructura mental me ayuda a no bloquearme y escribir código rápido."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Primero, valido que sea un array. Si no lo es, retorno un array vacío.
[Escribe: if (!Array.isArray(users)) return [];]

Ahora voy a filtrar solo los usuarios activos. Uso optional chaining para seguridad.
[Escribe: .filter(user => user?.active)]

Luego ordeno por fecha de creación ascendente. Comparo las fechas convirtiéndolas a Date.
[Escribe: .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))]

Y finalmente transformo a solo las propiedades que necesito: id, name y email.
[Escribe: .map(user => ({ id: user.id, name: user.name, email: user.email }))]

Listo. Ahora ejecuto los tests para verificar que funciona.
[Ejecuta: npm test js/01-filter-transform]"

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso TODOS los días en el trabajo:
- Cuando proceso datos de APIs
- Cuando preparo datos para componentes React o Angular
- Cuando filtro listas en dashboards
- Cuando limpio respuestas de backend

No es solo código, es pensamiento estructurado. Dominar este patrón te hace rápido y confiable en cualquier proyecto."

---

**Call to Action (10 segundos):**
"¿Quieres ver más ejercicios como este? Sigue mi perfil para más contenido de programación práctica."

---

## 💡 Tips para el Video

1. **Habla claro y pausado** - No tengas prisa
2. **Muestra tu pantalla completa** - Que se vea el código bien
3. **Ejecuta los tests** - Demuestra que funciona
4. **Sé auténtico** - No intentes ser perfecto, sé tú mismo
5. **Si te equivocas, corrígete** - Muestra cómo debuggeas, eso también es valioso

## 🎯 Frases Clave que Debes Decir

- "Mi patrón mental es..."
- "Primero valido porque..."
- "Uso [método] para..."
- "Esto lo hago todos los días cuando..."
- "El código sale solo cuando piensas en pasos verbales"

