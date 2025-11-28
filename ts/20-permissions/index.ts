/**
 * Sistema de permisos con tipos
 */
interface User {
  role: 'admin' | 'editor' | 'viewer';
}

type Action = 'read' | 'write' | 'delete' | 'manage';

function can(user: User | null | undefined, action: Action, resource: string): boolean {
  if (!user || !user.role) return false;
  
  const permissions: Record<string, Action[]> = {
    admin: ['read', 'write', 'delete', 'manage'],
    editor: ['read', 'write'],
    viewer: ['read']
  };
  
  const userPermissions = permissions[user.role] || [];
  return userPermissions.includes(action);
}

export { can, User, Action };

