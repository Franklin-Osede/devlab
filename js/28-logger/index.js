// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Configurable logger with levels
// ============================================================================
/**
 * Configurable logger with levels
 */
function createLogger(level = 'info', output = console.log) {
  const levels = { debug: 0, info: 1, warn: 2, error: 3 };
  const currentLevel = levels[level] || 1;
  
  return {
    debug(...args) {
      if (currentLevel <= 0) output('[DEBUG]', ...args);
    },
    info(...args) {
      if (currentLevel <= 1) output('[INFO]', ...args);
    },
    warn(...args) {
      if (currentLevel <= 2) output('[WARN]', ...args);
    },
    error(...args) {
      if (currentLevel <= 3) output('[ERROR]', ...args);
    }
  };
}

module.exports = { createLogger };
