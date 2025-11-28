// ============================================================================
// SOLUTION: ✅ RECOMMENDED - Adapter between two APIs with different formats
// ============================================================================
/**
 * Adapter between two APIs with different formats
 */
function createApiAdapter(externalApi) {
  return {
    async getUsers() {
      const response = await externalApi.fetchUsers();
      // Adapt external format to internal format
      return response.data.map(user => ({
        id: user.user_id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email_address,
        active: user.status === 'active'
      }));
    }
  };
}

module.exports = { createApiAdapter };
