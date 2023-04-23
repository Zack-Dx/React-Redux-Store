module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
  plugins: ["@typescript-eslint", "jest"],
  env: {
    node: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "jest/expect-expect": "error",
    "jest/no-test-callback": "error",
    "jest/prefer-expect-assertions": "error",
  },
};
