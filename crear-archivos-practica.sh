#!/bin/bash

# Script para crear archivos practice.js/ts y EXPLICAR-PATRON.md para todos los ejercicios

# Función para crear practice.js
create_practice_js() {
    local dir=$1
    local num=$(basename $dir | cut -d'-' -f1)
    local name=$(basename $dir | cut -d'-' -f2-)
    
    cat > "${dir}practice.js" << EOF
/**
 * PRÁCTICA: Escribe tu solución aquí
 * 
 * INSTRUCCIONES:
 * 1. Lee el README.md para entender el problema
 * 2. NO mires index.js todavía
 * 3. Intenta escribir la función aquí
 * 4. Ejecuta los tests: npm test js/$(basename $dir)
 * 5. Cuando pases los tests, compara con index.js
 */

// TODO: Escribe tu solución aquí
// Patrón mental: [Lee el EXPLICAR-PATRON.md para ver el patrón]

module.exports = {};
EOF
}

# Función para crear practice.ts
create_practice_ts() {
    local dir=$1
    
    cat > "${dir}practice.ts" << EOF
/**
 * PRÁCTICA: Escribe tu solución aquí (TypeScript)
 * 
 * INSTRUCCIONES:
 * 1. Lee el README.md para entender el problema
 * 2. NO mires index.ts todavía
 * 3. Intenta escribir la función con tipos aquí
 * 4. Ejecuta los tests: npm test ts/$(basename $dir)
 * 5. Cuando pases los tests, compara con index.ts
 */

// TODO: Define las interfaces primero
// TODO: Escribe tu solución aquí con tipos
// Patrón mental: [Lee el EXPLICAR-PATRON.md para ver el patrón]

export {};
EOF
}

# Función para crear EXPLICAR-PATRON.md básico
create_explicar_patron() {
    local dir=$1
    local num=$(basename $dir | cut -d'-' -f1)
    local name=$(basename $dir | cut -d'-' -f2-)
    
    cat > "${dir}EXPLICAR-PATRON.md" << EOF
# 🎤 Explicación del Patrón en Voz Alta

## Script para Grabar tu Video de LinkedIn

### 📝 Lee esto en voz alta mientras grabas:

---

**Hook (10 segundos):**
"Te muestro cómo resolver [nombre del ejercicio] de memoria."

---

**Leer el Problema (30 segundos):**
"[Lee el problema del README.md]"

---

**Explicar tu Enfoque Mental (30 segundos):**
"Mi patrón mental para esto es:

1. [Paso 1 del patrón]
2. [Paso 2 del patrón]
3. [Paso 3 del patrón]

Este patrón funciona porque..."

---

**Escribir el Código Explicando (1-2 minutos):**
"Voy a escribir la función paso a paso:

[Explica cada línea mientras la escribes]"

---

**Por Qué Importa (30 segundos):**
"Este patrón lo uso en el trabajo cuando..."

---

## 💡 Tips para el Video

1. Habla claro y pausado
2. Muestra tu pantalla completa
3. Ejecuta los tests
4. Sé auténtico
5. Si te equivocas, corrígete

EOF
}

# Crear archivos para JavaScript
echo "Creando archivos practice.js y EXPLICAR-PATRON.md para JavaScript..."
for dir in js/*/; do
    if [ -d "$dir" ] && [ ! -f "${dir}practice.js" ]; then
        create_practice_js "$dir"
        echo "✓ Creado practice.js para $(basename $dir)"
    fi
    if [ -d "$dir" ] && [ ! -f "${dir}EXPLICAR-PATRON.md" ]; then
        create_explicar_patron "$dir"
        echo "✓ Creado EXPLICAR-PATRON.md para $(basename $dir)"
    fi
done

# Crear archivos para TypeScript
echo ""
echo "Creando archivos practice.ts y EXPLICAR-PATRON.md para TypeScript..."
for dir in ts/*/; do
    if [ -d "$dir" ] && [ ! -f "${dir}practice.ts" ]; then
        create_practice_ts "$dir"
        echo "✓ Creado practice.ts para $(basename $dir)"
    fi
    if [ -d "$dir" ] && [ ! -f "${dir}EXPLICAR-PATRON.md" ]; then
        create_explicar_patron "$dir"
        echo "✓ Creado EXPLICAR-PATRON.md para $(basename $dir)"
    fi
done

echo ""
echo "✅ Archivos creados!"

