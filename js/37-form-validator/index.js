/**
 * Validador de formularios multipaso
 */
function createFormValidator(steps) {
  return {
    validateStep(stepIndex, data) {
      const step = steps[stepIndex];
      if (!step) return { valid: false, errors: ['Invalid step'] };
      
      const errors = [];
      for (const [field, rules] of Object.entries(step.fields)) {
        const value = data[field];
        
        if (rules.required && (value === undefined || value === '')) {
          errors.push(`${field} es requerido`);
        }
        
        if (rules.minLength && value && value.length < rules.minLength) {
          errors.push(`${field} debe tener al menos ${rules.minLength} caracteres`);
        }
      }
      
      return {
        valid: errors.length === 0,
        errors
      };
    },
    
    canProceedToStep(currentStepIndex, stepData) {
      for (let i = 0; i <= currentStepIndex; i++) {
        const validation = this.validateStep(i, stepData[i] || {});
        if (!validation.valid) return false;
      }
      return true;
    }
  };
}

module.exports = { createFormValidator };

