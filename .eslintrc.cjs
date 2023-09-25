module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    indent: [
      "error",
      2,
      { 
        SwitchCase: 1,
        ignoredNodes: ["ConditionalExpression"],
        ObjectExpression: 1,
        ignoreComments: true,
        flatTernaryExpressions: true,
      }
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ]
  }
};
