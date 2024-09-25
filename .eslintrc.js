module.exports = {
  parse: "@typescirpt-esint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@types-eslint",
    "plugin:prettier/recommended",
  ],
  parseOptions: {
    ecmaVersion: 2018,
    source: "module",
  },
  rules: {},
};
