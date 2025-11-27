/**
 * Sistema simple de permisos basado en roles
 */
function can(user, action, resource) {
  if (!user || !user.role) return false;
  
  const permissions = {
    admin: ['read', 'write', 'delete', 'manage'],
    editor: ['read', 'write'],
    viewer: ['read']
  };
  
  const userPermissions = permissions[user.role] || [];
  return userPermissions.includes(action);
}

module.exports = { can };

