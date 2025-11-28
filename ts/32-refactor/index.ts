/**
 * Ejemplo de función para refactorizar - TypeScript
 */
interface OrderItem {
  price: number;
  quantity: number;
  name: string;
  stock: number;
}

interface Order {
  items: OrderItem[];
  discountCode?: string;
}

interface OrderResult {
  total?: number;
  tax?: number;
  items?: number;
  error?: string;
}

function processOrder(order: Order | null): OrderResult {
  if (!order) return { error: 'Order required' };
  if (!order.items || order.items.length === 0) return { error: 'Items required' };
  
  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    if (!item.price || !item.quantity) return { error: 'Invalid item' };
    total += item.price * item.quantity;
  }
  
  if (order.discountCode) {
    if (order.discountCode === 'SAVE10') {
      total = total * 0.9;
    } else if (order.discountCode === 'SAVE20') {
      total = total * 0.8;
    }
  }
  
  const tax = total * 0.21;
  const finalTotal = total + tax;
  
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    if (item.stock < item.quantity) {
      return { error: `Insufficient stock for ${item.name}` };
    }
  }
  
  return { total: finalTotal, tax, items: order.items.length };
}

export { processOrder, Order, OrderItem, OrderResult };

