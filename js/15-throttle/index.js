/**
 * Throttle: limita ejecución a máximo una vez por período de tiempo
 */
function throttle(fn, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

module.exports = { throttle };

