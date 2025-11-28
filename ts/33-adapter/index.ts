/**
 * Adapter entre APIs - TypeScript
 */
interface ExternalUser {
  user_id: number;
  first_name: string;
  last_name: string;
  email_address: string;
  status: 'active' | 'inactive';
}

interface InternalUser {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

interface ExternalApi {
  fetchUsers(): Promise<{ data: ExternalUser[] }>;
}

function createApiAdapter(externalApi: ExternalApi) {
  return {
    async getUsers(): Promise<InternalUser[]> {
      const response = await externalApi.fetchUsers();
      return response.data.map(user => ({
        id: user.user_id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email_address,
        active: user.status === 'active'
      }));
    }
  };
}

export { createApiAdapter, ExternalUser, InternalUser, ExternalApi };

