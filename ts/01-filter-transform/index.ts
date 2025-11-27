/**
 * Filtra y transforma una lista de usuarios activos
 * Versión TypeScript con tipos explícitos
 */

// 1. DEFINIR INTERFACES
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
  createdAt: string;
  role?: string;
  department?: string;
}

interface UserSummary {
  id: number;
  name: string;
  email: string;
}

/**
 * Filtra usuarios activos, los ordena por fecha y retorna solo id, name, email
 * 
 * @param users - Array de usuarios
 * @returns Array de usuarios activos ordenados por fecha
 */
function getActiveUsers(users: User[]): UserSummary[] {
  // 2. VALIDAR INPUT
  if (!Array.isArray(users)) return [];

  // 3. FILTRAR → solo activos
  // 4. ORDENAR → por fecha de creación ascendente
  // 5. TRANSFORMAR → solo id, name, email
  return users
    .filter(user => user?.active)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
}

export { getActiveUsers, User, UserSummary };

