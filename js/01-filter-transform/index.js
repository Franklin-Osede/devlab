/**
 * Filtra y transforma una lista de usuarios activos
 * 
 * @param {Array} users - Array de usuarios
 * @returns {Array} Array de usuarios activos, ordenados por fecha, con solo id, name, email
 */
function getActiveUsers(users) {
  // 1. VALIDAR INPUT
  if (!Array.isArray(users)) return [];

  // 2. FILTRAR → solo activos
  // 3. ORDENAR → por fecha de creación ascendente
  // 4. TRANSFORMAR → solo id, name, email
  return users
    .filter(user => user?.active)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}

module.exports = { getActiveUsers };

