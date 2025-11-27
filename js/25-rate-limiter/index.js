/**
 * Rate limiter simple en memoria
 */
function createRateLimiter(maxRequests, windowMs) {
  const requests = new Map();
  
  return function(userId) {
    const now = Date.now();
    const userRequests = requests.get(userId) || [];
    
    // Limpiar requests fuera de la ventana
    const validRequests = userRequests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    requests.set(userId, validRequests);
    return true;
  };
}

module.exports = { createRateLimiter };

