module.exports = {
  detectOpenHandles: true,
  globals: {
    "ts-jest": {
      tsconfigFile: "tsconfig.json"
    }
  },
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "./node_modules/ts-jest/preprocessor.js"
  },
  testMatch: [
    "**/test/**/*.spec.(ts|js)"
  ],
  testEnvironment: "node"
};