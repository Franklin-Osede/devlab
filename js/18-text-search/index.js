// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, scoring algorithm with sorting
// ============================================================================
/**
 * Text search with simple scoring
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
    // Exact match at start = highest score
    if (text.startsWith(term)) return 100;
    // Exact match = high score
    return 50;
  }
  
  // Partial matches
  const words = term.split(' ');
  let score = 0;
  words.forEach(word => {
    if (text.includes(word)) score += 10;
  });
  
  return score;
}

module.exports = { searchText };
