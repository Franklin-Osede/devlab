# 🎥 Plantilla para Videos de LinkedIn

## Estructura del Video (2-3 minutos)

### Hook (5 segundos)
```
"¿Sabes cuál es el ejercicio MÁS común en entrevistas de pair programming?
Te muestro cómo resolverlo de memoria."
```

### 1. Leer el Problema (30 seg)
```
"Hoy voy a resolver este problema:

[Lee el problema del README.md]

Básicamente necesito [resumen en una frase]."
```

### 2. Explicar tu Enfoque Mental (30 seg)
```
"Mi patrón mental para esto siempre es el mismo:

1. Primero valido el input
2. Luego [acción específica: filtro/transformo/agrupo]
3. Finalmente retorno el resultado

Este patrón funciona para el 80% de ejercicios similares."
```

### 3. Escribir el Código Explicando (1-2 min)
```
"Voy a escribir la función paso a paso:

Primero, valido que el input sea un array...
[Escribe: if (!Array.isArray(items)) return [];]

Ahora voy a filtrar solo los elementos que cumplen la condición...
[Escribe: .filter(item => item?.active)]

Luego ordeno por fecha...
[Escribe: .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))]

Y finalmente transformo a solo las propiedades que necesito...
[Escribe: .map(item => ({ id: item.id, name: item.name }))]

Listo, ahora ejecuto los tests para verificar...
[Ejecuta: npm test]
```

### 4. Por Qué Importa (30 seg)
```
"Este patrón lo uso TODOS los días en el trabajo:
- Cuando proceso datos de APIs
- Cuando preparo datos para componentes React/Angular
- Cuando filtro listas en dashboards

Dominar este patrón te hace rápido y confiable.
No es solo código, es pensamiento estructurado."
```

### CTA (Call to Action) (10 seg)
```
"¿Quieres ver más ejercicios como este?
Sigue mi perfil para más contenido de programación práctica."
```

---

## 🎬 Checklist Antes de Grabar

- [ ] Puedo escribir la función en menos de 5 min sin mirar
- [ ] Paso todos los tests
- [ ] Tengo el README.md abierto para leer el problema
- [ ] Tengo VS Code listo con el archivo del ejercicio
- [ ] Terminal abierta para ejecutar tests
- [ ] He practicado explicar en voz alta 2-3 veces

---

## 📝 Frases Útiles para Explicar

### Al Validar Input
- "Primero valido el input porque en producción siempre recibes datos inesperados"
- "Siempre empiezo validando, es un hábito que evita bugs"

### Al Filtrar
- "Uso filter porque necesito solo los elementos que cumplen esta condición"
- "Filter es perfecto aquí porque transformo array → array más pequeño"

### Al Transformar
- "Mapeo a un objeto más simple porque solo necesito estas propiedades"
- "Transformo los datos al formato que necesita mi aplicación"

### Al Ordenar
- "Ordeno por esta propiedad porque el usuario necesita verlos en este orden"
- "Sort me permite organizar los datos de forma útil"

### Al Usar Reduce
- "Uso reduce porque transformo array → objeto/valor único"
- "Reduce es perfecto cuando necesito acumular un resultado"

---

## 🎯 Ejemplo Completo de Script

**Hook:**
"El ejercicio más común en entrevistas: filtrar y transformar datos. Te muestro cómo hacerlo de memoria."

**Problema:**
"Tengo una lista de usuarios y necesito: filtrar solo los activos, ordenarlos por fecha, y devolver solo id, name y email."

**Enfoque:**
"Mi patrón mental: validar → filtrar → ordenar → transformar → retornar. Esta estructura funciona para el 80% de ejercicios de arrays."

**Código:**
"Primero valido que sea un array. Luego filtro con optional chaining para seguridad. Ordeno por fecha. Y finalmente mapeo a solo las propiedades que necesito."

**Por qué:**
"Esto lo haces TODOS los días en el trabajo: procesar datos de APIs, limpiar respuestas, preparar datos para UI. Dominar este patrón te hace rápido y confiable."

---

## 💡 Tips para Videos Exitosos

1. **Habla claro y pausado** - No tengas prisa
2. **Muestra tu pantalla completa** - Que se vea el código bien
3. **Ejecuta los tests** - Demuestra que funciona
4. **Sé auténtico** - No intentes ser perfecto, sé tú mismo
5. **Añade texto en pantalla** - Si quieres, añade subtítulos o puntos clave

---

## 📊 Métricas de Éxito

Después de grabar varios videos, deberías poder:
- ✅ Escribir la función en menos de 3 minutos
- ✅ Explicar mientras escribes sin pausar
- ✅ Pasar todos los tests a la primera
- ✅ Sentirte confiado explicando el código

