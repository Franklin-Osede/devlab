// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, immutable, uses spread operator
// ============================================================================
/**
 * Combines two configuration objects without mutating the originals
 * 
 * @param {Object} defaultConfig - Default configuration
 * @param {Object} userConfig - User configuration (overrides defaults)
 * @returns {Object} New combined object
 */
function mergeConfig(defaultConfig, userConfig) {
  // If no userConfig, return copy of defaultConfig
  if (!userConfig) return { ...defaultConfig };
  
  // If no defaultConfig, return copy of userConfig
  if (!defaultConfig) return { ...userConfig };
  
  // Combine: defaults first, then user (overrides)
  return {
    ...defaultConfig,
    ...userConfig,
  };
}

module.exports = { mergeConfig };
