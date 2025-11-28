# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Debounce es esencial en frontend. Te muestro cómo implementarlo y por qué lo usas todos los días."

---

**Leer el Problema (30 segundos):**
"Necesito una función que retrase la ejecución hasta que pase un tiempo sin nuevas llamadas.

Por ejemplo, en un buscador: cuando el usuario escribe, no quiero buscar en cada tecla. Quiero esperar 300ms después de que deje de escribir.

Esto es debounce: cancelar ejecuciones anteriores y esperar."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Crear una variable para guardar el timeoutId
2. Retornar una función que recibe los argumentos
3. Cancelar el timeout anterior si existe
4. Crear nuevo timeout con el delay
5. Ejecutar la función original cuando pase el tiempo

La clave es clearTimeout para cancelar ejecuciones anteriores."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Creo una variable para guardar el ID del timeout.
[Escribe: let timeoutId;]

Retorno una función que recibe los argumentos de la función original.
[Escribe: return function(...args) { ... };]

Dentro, cancelo el timeout anterior si existe.
[Escribe: clearTimeout(timeoutId);]

Ahora creo un nuevo timeout que ejecutará la función después del delay.
[Escribe: timeoutId = setTimeout(() => { fn.apply(this, args); }, delay);]

Si se llama de nuevo antes de que pase el delay, se cancela el anterior y se crea uno nuevo.
Esto asegura que solo se ejecute cuando pase el tiempo sin nuevas llamadas."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso TODOS los días en frontend:
- En buscadores para no hacer requests en cada tecla
- En resize handlers para no recalcular en cada pixel
- En scroll para optimizar performance
- En validación de formularios

Sin debounce, tu app sería lenta y haría requests innecesarios. Es esencial en frontend moderno."

---

## 💡 Tips para el Video

1. Muestra un ejemplo práctico (buscador)
2. Explica qué pasa sin debounce vs con debounce
3. Menciona que clearTimeout cancela el anterior
4. Ejecuta tests para demostrar que funciona
