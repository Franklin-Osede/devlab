/**
 * Validador de esquema con tipos
 */
interface ValidationRule {
  required?: boolean;
  type?: 'string' | 'number' | 'boolean' | 'object' | 'array';
  min?: number;
  max?: number;
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

function validate(schema: Record<string, ValidationRule>, data: Record<string, any>): ValidationResult {
  const errors: string[] = [];
  
  for (const [key, rules] of Object.entries(schema)) {
    const value = data[key];
    
    if (rules.required && (value === undefined || value === null)) {
      errors.push(`${key} es requerido`);
      continue;
    }
    
    if (value === undefined || value === null) continue;
    
    if (rules.type && typeof value !== rules.type) {
      errors.push(`${key} debe ser de tipo ${rules.type}`);
    }
    
    if (rules.min !== undefined && value < rules.min) {
      errors.push(`${key} debe ser mayor o igual a ${rules.min}`);
    }
    
    if (rules.max !== undefined && value > rules.max) {
      errors.push(`${key} debe ser menor o igual a ${rules.max}`);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

export { validate, ValidationRule, ValidationResult };

