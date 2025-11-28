// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Function with intentional bugs for debugging practice
// ============================================================================
/**
 * Function with intentional bugs for debugging practice
 */
function calculateTotal(items, discount = 0) {
  // Bug 1: Doesn't validate that items is an array
  let total = 0;
  
  // Bug 2: Uses <= instead of < for length
  for (let i = 0; i <= items.length; i++) {
    // Bug 3: Doesn't validate that item has price
    total += items[i].price;
  }
  
  // Bug 4: Doesn't validate that discount is a number
  // Bug 5: Doesn't validate discount range (0-1)
  total = total * (1 - discount);
  
  // Bug 6: Returns without rounding
  return total;
}

module.exports = { calculateTotal };
