module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^\\./desktop/core/src/desktop/js/(.*)$': '<rootDir>/desktop/core/src/desktop/js/$1'
  },
  moduleDirectories: ['node_modules', 'desktop/core/src/desktop/js'],
  modulePaths: ['desktop/core/src/desktop/js'],
  testMatch: ['<rootDir>/desktop/core/src/desktop/js/**/*.test.(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/desktop/core/src/desktop/js/jest/jest.init.js'],
  collectCoverageFrom: ['<rootDir>/desktop/core/src/desktop/js/**/*.{js,jsx}']
};
