/**
 * Búsqueda de texto con scoring simple
 */
function searchText(term, texts) {
  if (!term || !Array.isArray(texts)) return [];
  
  return texts
    .map(text => ({
      text,
      score: calculateScore(term.toLowerCase(), text.toLowerCase())
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.text);
}

function calculateScore(term, text) {
  if (text.includes(term)) {
    // Coincidencia exacta al inicio = mayor score
    if (text.startsWith(term)) return 100;
    // Coincidencia exacta = score alto
    return 50;
  }
  
  // Coincidencias parciales
  const words = term.split(' ');
  let score = 0;
  words.forEach(word => {
    if (text.includes(word)) score += 10;
  });
  
  return score;
}

module.exports = { searchText };

