module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", 
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", 
    "^@/(.*)$": "<rootDir>/src/$1", 
  },
  transformIgnorePatterns: [
    "/node_modules/(?!styled-components|@babel/runtime|@testing-library)",
  ],
  testMatch: [
    "<rootDir>/src/**/*.test.{ts,tsx}",
    "<rootDir>/src/**/*.spec.{ts,tsx}",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
