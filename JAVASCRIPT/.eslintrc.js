module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off', // Allow the use of console.log()
    'semi': ['error', 'always'], // Enforce semicolons at the end of statements
    'quotes': ['error', 'single'], // Enforce the use of single quotes
    'indent': ['error', 2], // Enforce 2 spaces indentation
  },
};