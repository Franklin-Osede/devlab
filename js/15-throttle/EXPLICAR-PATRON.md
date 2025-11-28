# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Throttle limita ejecuciones a máximo una vez por período. Te muestro la diferencia con debounce."

---

**Leer el Problema (30 segundos):**
"Necesito una función que limite ejecuciones a máximo una vez por período de tiempo.

A diferencia de debounce que espera a que pare, throttle ejecuta inmediatamente y luego ignora llamadas hasta que pase el período.

Por ejemplo, en scroll: ejecuto cada 100ms máximo, no importa cuántas veces se llame."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Guardar timestamp de la última ejecución
2. Retornar función que recibe argumentos
3. Verificar si ha pasado suficiente tiempo desde la última ejecución
4. Si sí, ejecutar y actualizar timestamp
5. Si no, ignorar la llamada

La diferencia con debounce: throttle ejecuta periódicamente, debounce espera a que pare."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Guardo el timestamp de la última ejecución.
[Escribe: let lastCall = 0;]

Retorno una función que recibe los argumentos.
[Escribe: return function(...args) { ... };]

Obtengo el timestamp actual.
[Escribe: const now = Date.now();]

Verifico si ha pasado suficiente tiempo desde la última ejecución.
[Escribe: if (now - lastCall >= delay) { ... }]

Si sí, ejecuto la función y actualizo el timestamp.
[Escribe: lastCall = now; fn.apply(this, args);]

Si no, simplemente no hago nada. La llamada se ignora.

Esto asegura que la función se ejecute máximo una vez por período."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso cuando:
- Optimizo scroll handlers
- Limito requests a APIs
- Controlo animaciones
- Gestiono eventos de mouse que se disparan muchas veces

Throttle vs Debounce:
- Throttle: ejecuta periódicamente (útil para scroll)
- Debounce: espera a que pare (útil para búsquedas)

Conocer ambos te hace mejor desarrollador frontend."

---

## 💡 Tips para el Video

1. Explica la diferencia entre throttle y debounce claramente
2. Muestra cuándo usar cada uno
3. Ejecuta tests para demostrar que limita ejecuciones
4. Menciona casos de uso reales
