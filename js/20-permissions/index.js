// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Pure function, role-based permissions
// ============================================================================
/**
 * Simple role-based permission system
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
