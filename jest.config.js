module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/js/**/*.test.js', '**/ts/**/*.test.ts'],
  collectCoverageFrom: [
    'js/**/*.js',
    'ts/**/*.ts',
    '!js/**/*.test.js',
    '!ts/**/*.test.ts'
  ],
  coverageDirectory: 'coverage',
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
};

