module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    'no-console': 'off', // Allow the use of console.log()
    'semi': ['error', 'always'], // Enforce semicolons at the end of statements
    'quotes': ['error', 'single'], // Enforce the use of single quotes
    'indent': ['error', 2], // Enforce 2 spaces indentation
  },
};