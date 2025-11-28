# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Pipe y Compose son fundamentales en programación funcional. Te muestro cómo implementarlos."

---

**Leer el Problema (30 segundos):**
"Tengo varias funciones y quiero encadenarlas para transformar datos.

Pipe ejecuta de izquierda a derecha:
```
pipe(increment, double, square)(2)
// increment(2) → 3
// double(3) → 6  
// square(6) → 36
```

Compose ejecuta de derecha a izquierda (como composición matemática):
```
compose(increment, double, square)(2)
// square(2) → 4
// double(4) → 8
// increment(8) → 9
```

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para pipe es:

1. Recibir múltiples funciones como argumentos
2. Retornar función que recibe el valor inicial
3. Usar reduce para aplicar cada función al resultado anterior
4. Retornar el resultado final

Para compose es igual pero con reduceRight para ejecutar en orden inverso."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir pipe primero:

Recibo múltiples funciones usando rest parameters.
[Escribe: function pipe(...fns) { ... }]

Retorno una función que recibe el valor inicial.
[Escribe: return (value) => { ... };]

Uso reduce para aplicar cada función al resultado anterior.
[Escribe: return fns.reduce((acc, fn) => fn(acc), value);]

Reduce empieza con el valor inicial, y cada función recibe el resultado de la anterior.

Para compose es igual pero con reduceRight:
[Escribe: return fns.reduceRight((acc, fn) => fn(acc), value);]

ReduceRight empieza desde el final, ejecutando funciones en orden inverso."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso cuando:
- Transformo datos en múltiples pasos
- Compongo utilidades pequeñas en funciones más grandes
- Trabajo con programación funcional
- Necesito código más legible y composable

Pipe y Compose son la base de programación funcional. Te permiten construir funciones complejas a partir de funciones simples."

---

## 💡 Tips para el Video

1. Explica la diferencia entre pipe y compose claramente
2. Muestra un ejemplo práctico de transformación de datos
3. Ejecuta tests para demostrar ambos casos
4. Menciona que esto es programación funcional pura
