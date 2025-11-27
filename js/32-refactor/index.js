/**
 * Ejemplo de función gigante para refactorizar
 */
function processOrder(order) {
  // Validación
  if (!order) return { error: 'Order required' };
  if (!order.items || order.items.length === 0) return { error: 'Items required' };
  
  // Calcular total
  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    if (!item.price || !item.quantity) return { error: 'Invalid item' };
    total += item.price * item.quantity;
  }
  
  // Aplicar descuento
  if (order.discountCode) {
    if (order.discountCode === 'SAVE10') {
      total = total * 0.9;
    } else if (order.discountCode === 'SAVE20') {
      total = total * 0.8;
    }
  }
  
  // Calcular impuestos
  const tax = total * 0.21;
  const finalTotal = total + tax;
  
  // Validar stock
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    if (item.stock < item.quantity) {
      return { error: `Insufficient stock for ${item.name}` };
    }
  }
  
  return { total: finalTotal, tax, items: order.items.length };
}

module.exports = { processOrder };

