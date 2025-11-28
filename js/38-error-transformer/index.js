// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Error transformer to standard format
// ============================================================================
/**
 * Error transformer to standard format
 */
function transformError(error) {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: error.code || 'UNKNOWN_ERROR',
      details: error.stack
    };
  }
  
  if (typeof error === 'string') {
    return {
      message: error,
      code: 'CUSTOM_ERROR',
      details: null
    };
  }
  
  if (typeof error === 'object' && error !== null) {
    return {
      message: error.message || 'Unknown error',
      code: error.code || 'OBJECT_ERROR',
      details: error.details || error
    };
  }
  
  return {
    message: 'Unknown error',
    code: 'UNKNOWN',
    details: null
  };
}

module.exports = { transformError };
