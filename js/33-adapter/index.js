/**
 * Adapter entre dos APIs con formatos diferentes
 */
function createApiAdapter(externalApi) {
  return {
    async getUsers() {
      const response = await externalApi.fetchUsers();
      // Adaptar formato externo a formato interno
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

