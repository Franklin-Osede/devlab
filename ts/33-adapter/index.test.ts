import { createApiAdapter } from './index';

describe('createApiAdapter - Ejercicio 33 (TypeScript)', () => {
  test('debe adaptar formato externo a interno', async () => {
    const externalApi = {
      fetchUsers: async () => ({
        data: [{
          user_id: 1,
          first_name: 'John',
          last_name: 'Doe',
          email_address: 'john@test.com',
          status: 'active' as const
        }]
      })
    };
    
    const adapter = createApiAdapter(externalApi);
    const users = await adapter.getUsers();
    expect(users[0].name).toBe('John Doe');
  });
});

