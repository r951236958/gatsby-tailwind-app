module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": [
      "warn",
      { vars: "all", "args": "after-used", ignoreRestSiblings: false },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
