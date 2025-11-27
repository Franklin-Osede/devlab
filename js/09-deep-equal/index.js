/**
 * Compara dos valores profundamente
 * 
 * @param {*} a - Primer valor
 * @param {*} b - Segundo valor
 * @returns {boolean} true si son iguales profundamente
 */
function deepEqual(a, b) {
  // 1. COMPARACIÓN ESTRICTA (cubre primitivos, null, undefined)
  if (a === b) return true;

  // 2. VALIDAR QUE AMBOS SEAN OBJETOS
  if (
    typeof a !== 'object' ||
    typeof b !== 'object' ||
    a === null ||
    b === null
  ) {
    return false;
  }

  // 3. OBTENER CLAVES DE AMBOS OBJETOS
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // 4. VERIFICAR MISMO NÚMERO DE CLAVES
  if (keysA.length !== keysB.length) return false;

  // 5. COMPARAR CADA CLAVE RECURSIVAMENTE
  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

module.exports = { deepEqual };

