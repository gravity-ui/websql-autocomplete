module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^\\./src/parsing/(.*)$': '<rootDir>/src/parsing/$1'
  },
  moduleDirectories: ['node_modules', 'src/parsing'],
  modulePaths: ['src/parsing'],
  testMatch: ['<rootDir>/src/parsing/**/*.test.(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/src/parsing/test/jest.init.js'],
  collectCoverageFrom: ['<rootDir>/src/parsing/**/*.{js,jsx}']
};
