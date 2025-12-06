// Jest: Testing framework | describe: groups tests | test: single test case
// AAA Pattern: Arrange (setup) → Act (execute) → Assert (verify)
const { getActiveUsers } = require('./index');
const fs = require('fs');
const path = require('path');

// loadSample: Loads test data from JSON files (keeps tests clean, reusable data)
const loadSample = (filename) => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('getActiveUsers - Exercise 01: Filter and Transform', () => {
  describe('Sample 1: Users', () => {
    const users = loadSample('sample-1-users.json'); // 4 users: 3 active, 1 inactive

    test('should filter only active users', () => { // Only active: true
      // AAA Pattern: Arrange (data ready above) → Act → Assert
      const result = getActiveUsers(users); // Act: execute function
      expect(result.length).toBe(3); // Assert: verify result (.toBe() = exact match)
    });

    test('should sort by creation date ascending', () => { // Oldest → newest
      const result = getActiveUsers(users);
      expect(result[0].name).toBe('Ana García'); // 2024-01-15
      expect(result[1].name).toBe('Pedro Sánchez'); // 2024-01-20
      expect(result[2].name).toBe('Carmen López'); // 2024-02-01
    });

    test('should transform to only id, name, email', () => { // Remove other fields
      const result = getActiveUsers(users);
      expect(result[0]).toEqual({ // .toEqual() = deep equality
        id: 1,
        name: 'Ana García',
        email: 'ana@test.com'
      });
      expect(result[0]).not.toHaveProperty('active'); // Verify removed
      expect(result[0]).not.toHaveProperty('role');
      expect(result[0]).not.toHaveProperty('department');
    });
  });

  describe('Sample 2: Edge Cases - Empty and Invalid Inputs', () => {
    test('should handle empty arrays', () => { // Empty → empty
      expect(getActiveUsers([])).toEqual([]);
    });

    test('should handle invalid input', () => { // Wrong types → empty
      expect(getActiveUsers(null)).toEqual([]);
      expect(getActiveUsers(undefined)).toEqual([]);
      expect(getActiveUsers('not an array')).toEqual([]);
      expect(getActiveUsers(123)).toEqual([]);
    });
  });

  describe('Sample 3: Orders (edge cases)', () => {
    const orders = loadSample('sample-3-orders.json');

    test('should handle elements with undefined properties', () => { // undefined = inactive
      // AAA Pattern:
      const usersWithUndefined = [ // Arrange: setup test data
        { id: 1, name: 'Test', email: 'test@test.com', active: true, createdAt: '2024-01-01' },
        { id: 2, name: 'Test2', email: 'test2@test.com', active: undefined, createdAt: '2024-01-02' },
        { id: 3, name: 'Test3', email: 'test3@test.com', active: true, createdAt: '2024-01-03' }
      ];
      const result = getActiveUsers(usersWithUndefined); // Act: execute function
      expect(result.length).toBe(2); // Assert: verify result (only 2 with active === true)
    });
  });

  describe('Sample 4: Transactions (robust validation)', () => {
    test('should handle users without createdAt', () => { // Missing date → no crash
      const usersWithoutDate = [
        { id: 1, name: 'Test', email: 'test@test.com', active: true },
        { id: 2, name: 'Test2', email: 'test2@test.com', active: true, createdAt: '2024-01-01' }
      ];
      const result = getActiveUsers(usersWithoutDate);
      expect(result.length).toBe(2);
    });
  });

  describe('Additional cases for practice', () => {
    test('should return empty array if no users are active', () => { // All inactive → []
      const inactiveUsers = [
        { id: 1, name: 'Test', email: 'test@test.com', active: false, createdAt: '2024-01-01' },
        { id: 2, name: 'Test2', email: 'test2@test.com', active: false, createdAt: '2024-01-02' }
      ];
      expect(getActiveUsers(inactiveUsers)).toEqual([]);
    });

    test('should handle a single active user', () => { // One user → one result
      const singleUser = [
        { id: 1, name: 'Test', email: 'test@test.com', active: true, createdAt: '2024-01-01' }
      ];
      const result = getActiveUsers(singleUser);
      expect(result).toHaveLength(1); // .toHaveLength() = array length
      expect(result[0]).toEqual({ id: 1, name: 'Test', email: 'test@test.com' });
    });
  });
});

