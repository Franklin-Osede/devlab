// ============================================================================
// SOLUTION: ✅ RECOMMENDED - In-memory rate limiter
// ============================================================================
/**
 * Simple in-memory rate limiter
 */
function createRateLimiter(maxRequests, windowMs) {
  const requests = new Map();
  
  return function(userId) {
    const now = Date.now();
    const userRequests = requests.get(userId) || [];
    
    // Clean requests outside the window
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
