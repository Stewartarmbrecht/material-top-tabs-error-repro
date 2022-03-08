module.exports = {
    testEnvironment: "jsdom",
    preset: "jest-expo",
    setupFiles: [
      "./jest.setup.js"
    ],
    globals: {
      "ts-jest": {
        tsconfig: {
          jsx: "react",
        },
      },
    },
    transform: {
      "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
      "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
    collectCoverageFrom: [
      "**/*.{ts,tsx}",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/jest.setup.js",
    ],
    moduleFileExtensions: ["js", "ts", "tsx"],
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?@?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|@expo-google-fonts/.*)",
    ],
    coverageReporters: ["json-summary", "text", "lcov"],
    setupFilesAfterEnv: [
      "@testing-library/jest-native/extend-expect"
    ]
  }