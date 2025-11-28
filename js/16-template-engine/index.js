// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, uses regex for template replacement
// ============================================================================
/**
 * Simple template engine: replaces {{key}} with values from object
 */
function render(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] != null ? String(data[key]) : match;
  });
}

module.exports = { render };
