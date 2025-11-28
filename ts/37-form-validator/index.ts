/**
 * Validador multipaso - TypeScript
 */
interface FieldRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

interface StepFields {
  [field: string]: FieldRule;
}

interface FormStep {
  fields: StepFields;
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

interface FormValidator {
  validateStep(stepIndex: number, data: Record<string, any>): ValidationResult;
  canProceedToStep(currentStepIndex: number, stepData: Record<number, Record<string, any>>): boolean;
}

function createFormValidator(steps: FormStep[]): FormValidator {
  return {
    validateStep(stepIndex: number, data: Record<string, any>): ValidationResult {
      const step = steps[stepIndex];
      if (!step) return { valid: false, errors: ['Invalid step'] };
      
      const errors: string[] = [];
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
    
    canProceedToStep(currentStepIndex: number, stepData: Record<number, Record<string, any>>): boolean {
      for (let i = 0; i <= currentStepIndex; i++) {
        const validation = this.validateStep(i, stepData[i] || {});
        if (!validation.valid) return false;
      }
      return true;
    }
  };
}

export { createFormValidator, FormValidator, FormStep, ValidationResult };

