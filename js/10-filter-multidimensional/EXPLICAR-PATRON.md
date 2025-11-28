# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Filtros multidimensionales son comunes en e-commerce. Te muestro cómo combinarlos eficientemente."

---

**Leer el Problema (30 segundos):**
"Tengo una lista de productos y necesito filtrarlos por múltiples criterios:
- Precio mínimo y máximo
- Categoría
- Disponibilidad (stock > 0)
- Y ordenarlos por precio o nombre

Los filtros son opcionales: si no se proporciona uno, no debe filtrar por ese criterio."

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. Validar input
2. Destructurar filtros del objeto de opciones
3. Aplicar filtros en cadena (cada uno es independiente)
4. Aplicar ordenamiento al final
5. Retornar resultado filtrado y ordenado

Filtros en cadena permiten combinar múltiples condiciones fácilmente."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

Primero valido el input.
[Escribe: if (!Array.isArray(products)) return [];]

Destructuro los filtros del objeto de opciones.
[Escribe: const { minPrice, maxPrice, category, onlyAvailable, sortBy = 'name' } = filters || {};]

Ahora aplico filtros en cadena. Cada filtro es independiente.
[Escribe: let result = products]

Filtro por precio mínimo si existe.
[Escribe: .filter(p => minPrice == null || p.price >= minPrice)]

Uso == null para verificar si es null o undefined (filtro opcional).

Filtro por precio máximo si existe.
[Escribe: .filter(p => maxPrice == null || p.price <= maxPrice)]

Filtro por categoría si existe.
[Escribe: .filter(p => !category || p.category === category)]

Filtro por disponibilidad si se requiere.
[Escribe: .filter(p => !onlyAvailable || p.stock > 0)]

Ahora aplico ordenamiento según el criterio.
[Escribe: if (sortBy === 'priceAsc') { result = result.sort((a, b) => a.price - b.price); }]

Y así para cada criterio de ordenamiento.

Retorno el resultado.
[Escribe: return result;]

Los filtros en cadena hacen el código claro y fácil de extender."

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso TODOS los días cuando:
- Construyo filtros en e-commerce
- Creo dashboards con múltiples criterios
- Proceso listas con filtros complejos
- Implemento búsquedas avanzadas

Es un patrón fundamental en aplicaciones reales."

---

## 💡 Tips para el Video

1. Explica por qué filtros en cadena son mejores que un solo filter grande
2. Muestra cómo manejar filtros opcionales con == null
3. Ejecuta tests con diferentes combinaciones de filtros
4. Menciona que esto es lo que ves en Amazon, eBay, etc.
