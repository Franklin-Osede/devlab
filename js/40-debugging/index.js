/**
 * Función con bugs intencionados para practicar debugging
 */
function calculateTotal(items, discount = 0) {
  // Bug 1: No valida que items sea array
  let total = 0;
  
  // Bug 2: Usa <= en vez de < para el length
  for (let i = 0; i <= items.length; i++) {
    // Bug 3: No valida que item tenga price
    total += items[i].price;
  }
  
  // Bug 4: No valida que discount sea número
  // Bug 5: No valida rango de discount (0-1)
  total = total * (1 - discount);
  
  // Bug 6: Retorna sin redondear
  return total;
}

module.exports = { calculateTotal };

