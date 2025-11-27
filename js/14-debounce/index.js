/**
 * Debounce: retrasa ejecución hasta que pase tiempo sin llamadas
 */
function debounce(fn, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

module.exports = { debounce };

