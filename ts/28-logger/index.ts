/**
 * Logger configurable - TypeScript
 */
type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type LogOutput = (...args: any[]) => void;

interface Logger {
  debug(...args: any[]): void;
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
}

function createLogger(level: LogLevel = 'info', output: LogOutput = console.log): Logger {
  const levels: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3 };
  const currentLevel = levels[level] || 1;
  
  return {
    debug(...args: any[]) {
      if (currentLevel <= 0) output('[DEBUG]', ...args);
    },
    info(...args: any[]) {
      if (currentLevel <= 1) output('[INFO]', ...args);
    },
    warn(...args: any[]) {
      if (currentLevel <= 2) output('[WARN]', ...args);
    },
    error(...args: any[]) {
      if (currentLevel <= 3) output('[ERROR]', ...args);
    }
  };
}

export { createLogger, Logger, LogLevel };

