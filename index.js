const prettierConfig = require('.prettierrc.json')
const { resolve } = require

module.exports = {
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'].map(resolve),
  plugins: ['prettier'],
  rules: {
    'func-names': [1, 'as-needed'],
    'no-void': 'off',
    quotes: [1, 'backtick'],
    'prettier/prettier': [
      'warn',
      prettierConfig,
    ],
  },
  env: {
    es6: true,
  },
}
