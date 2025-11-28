// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Refactored giant function into small testable functions
// ============================================================================
/**
 * Example of giant function to refactor
 */
function processOrder(order) {
  // Validation
  if (!order) return { error: 'Order required' };
  if (!order.items || order.items.length === 0) return { error: 'Items required' };
  
  // Calculate total
  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    if (!item.price || !item.quantity) return { error: 'Invalid item' };
    total += item.price * item.quantity;
  }
  
  // Apply discount
  if (order.discountCode) {
    if (order.discountCode === 'SAVE10') {
      total = total * 0.9;
    } else if (order.discountCode === 'SAVE20') {
      total = total * 0.8;
    }
  }
  
  // Calculate taxes
  const tax = total * 0.21;
  const finalTotal = total + tax;
  
  // Validate stock
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    if (item.stock < item.quantity) {
      return { error: `Insufficient stock for ${item.name}` };
    }
  }
  
  return { total: finalTotal, tax, items: order.items.length };
}

module.exports = { processOrder };
