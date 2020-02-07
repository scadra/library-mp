const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx', '.vue'];
const allExtensions = jsExtensions.concat(tsExtensions);
const path = require("path");

module.exports = {
  plugins: ['import'],
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions
    },
    'import/resolver': {
      'node': {
        'extensions': allExtensions
      },
      paths: ['./src'],
      alias: [
        ['Components', path.resolve(__dirname, './src/components/')],
        ['Store', path.resolve(__dirname, './src/store')],
        ['Router', path.join(__dirname, './src/router')],
        ['Variable', path.join(__dirname, './src/scss/variable.scss')],
        ['Spacing', path.join(__dirname, './src/scss/spacing.scss')],
        ['Main', path.join(__dirname, './src/scss/main.scss')],
        ['Assets', path.join(__dirname, './src/assets')],
        ['Constants', path.join(__dirname, './src/constants')],
        ['Interfaces', path.join(__dirname, './src/services/interfaces/*')],
        ['Services', path.join(__dirname, './src/services/impl')],
        ['Models', path.join(__dirname, './src/models')],
      ]
    }
  }

};
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    "import/prefer-default-export": "off",
    "no-extra-semi": 0,
    "no-underscore-dangle": 0,
    "lines-between-class-members": 0,
    "class-methods-use-this": 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [{
    files: [
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)',
    ],
    env: {
      jest: true,
    },
  },],
};
