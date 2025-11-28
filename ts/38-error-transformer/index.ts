/**
 * Transformador de errores - TypeScript
 */
interface StandardError {
  message: string;
  code: string;
  details: any;
}

function transformError(error: unknown): StandardError {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: (error as any).code || 'UNKNOWN_ERROR',
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
    const err = error as Record<string, any>;
    return {
      message: err.message || 'Unknown error',
      code: err.code || 'OBJECT_ERROR',
      details: err.details || error
    };
  }
  
  return {
    message: 'Unknown error',
    code: 'UNKNOWN',
    details: null
  };
}

export { transformError, StandardError };

