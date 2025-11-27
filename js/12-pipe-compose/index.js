/**
 * Implementa pipe: ejecuta funciones de izquierda a derecha
 */
function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

/**
 * Implementa compose: ejecuta funciones de derecha a izquierda
 */
function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}

module.exports = { pipe, compose };

