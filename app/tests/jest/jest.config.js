/** @type {import('jest').Config} */
const path = require('path');

// Root do projeto Angular (pasta app)
const projectRoot = path.resolve(__dirname, '../..');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: projectRoot,
  roots: ['<rootDir>/tests/jest'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest/jest.setup.js'],
  testMatch: ['**/*.jest.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.app.json' }],
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.jest.spec.ts',
    '!src/main.ts',
  ],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
  },
};
