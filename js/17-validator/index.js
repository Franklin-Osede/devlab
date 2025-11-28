// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, schema validation with error collection
// ============================================================================
/**
 * Simple schema validator
 */
function validate(schema, data) {
  const errors = [];
  
  for (const [key, rules] of Object.entries(schema)) {
    const value = data[key];
    
    if (rules.required && (value === undefined || value === null)) {
      errors.push(`${key} is required`);
      continue;
    }
    
    if (value === undefined || value === null) continue;
    
    if (rules.type && typeof value !== rules.type) {
      errors.push(`${key} must be of type ${rules.type}`);
    }
    
    if (rules.min !== undefined && value < rules.min) {
      errors.push(`${key} must be greater than or equal to ${rules.min}`);
    }
    
    if (rules.max !== undefined && value > rules.max) {
      errors.push(`${key} must be less than or equal to ${rules.max}`);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

module.exports = { validate };
