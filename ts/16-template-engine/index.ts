/**
 * Template engine con tipos
 */
function render(template: string, data: Record<string, any>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] != null ? String(data[key]) : match;
  });
}

export { render };

