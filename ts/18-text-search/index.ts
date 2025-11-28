/**
 * Búsqueda de texto con scoring
 */
function searchText(term: string, texts: string[]): string[] {
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

function calculateScore(term: string, text: string): number {
  if (text.includes(term)) {
    if (text.startsWith(term)) return 100;
    return 50;
  }
  
  const words = term.split(' ');
  let score = 0;
  words.forEach(word => {
    if (text.includes(word)) score += 10;
  });
  
  return score;
}

export { searchText };

