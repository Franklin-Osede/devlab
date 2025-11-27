/**
 * Template engine simple: reemplaza {{key}} con valores del objeto
 */
function render(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] != null ? String(data[key]) : match;
  });
}

module.exports = { render };

