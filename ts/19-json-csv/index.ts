/**
 * Conversión JSON ↔ CSV con tipos
 */
function jsonToCsv<T extends Record<string, any>>(data: T[]): string {
  if (!Array.isArray(data) || data.length === 0) return '';
  
  const headers = Object.keys(data[0]);
  const headerRow = headers.join(',');
  
  const rows = data.map(obj => 
    headers.map(key => {
      const value = obj[key];
      const str = String(value ?? '');
      return str.includes(',') ? `"${str.replace(/"/g, '""')}"` : str;
    }).join(',')
  );
  
  return [headerRow, ...rows].join('\n');
}

function csvToJson<T extends Record<string, any>>(csv: string): T[] {
  if (!csv || !csv.trim()) return [];
  
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',');
  
  return lines.slice(1).map(line => {
    const values = parseCsvLine(line);
    const obj = {} as T;
    headers.forEach((header, i) => {
      (obj as any)[header.trim()] = values[i]?.trim() || '';
    });
    return obj;
  });
}

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

export { jsonToCsv, csvToJson };

