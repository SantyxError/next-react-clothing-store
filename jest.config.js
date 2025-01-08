module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", 
  },
  transformIgnorePatterns: [
    "/node_modules/(?!styled-components)/",
  ],
  testMatch: [
    "<rootDir>/src/**/*.test.tsx", 
    "<rootDir>/src/**/*.spec.tsx",
  ],
};
