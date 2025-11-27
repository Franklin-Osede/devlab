/**
 * Combina dos objetos de configuración sin mutar los originales
 * 
 * @param {Object} defaultConfig - Configuración por defecto
 * @param {Object} userConfig - Configuración del usuario (sobrescribe defaults)
 * @returns {Object} Nuevo objeto combinado
 */
function mergeConfig(defaultConfig, userConfig) {
  // Si no hay userConfig, retornar copia de defaultConfig
  if (!userConfig) return { ...defaultConfig };
  
  // Si no hay defaultConfig, retornar copia de userConfig
  if (!defaultConfig) return { ...userConfig };
  
  // Combinar: defaults primero, luego user (sobrescribe)
  return {
    ...defaultConfig,
    ...userConfig,
  };
}

module.exports = { mergeConfig };

