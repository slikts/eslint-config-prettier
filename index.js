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
      {
        trailingComma: 'all',
        semi: false,
        printWidth: 64,
      },
    ],
  },
  env: {
    es6: true,
  },
}
