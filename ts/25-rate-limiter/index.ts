/**
 * Rate limiter - TypeScript
 */
function createRateLimiter(maxRequests: number, windowMs: number) {
  const requests = new Map<string, number[]>();
  
  return function(userId: string): boolean {
    const now = Date.now();
    const userRequests = requests.get(userId) || [];
    
    const validRequests = userRequests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    requests.set(userId, validRequests);
    return true;
  };
}

export { createRateLimiter };

