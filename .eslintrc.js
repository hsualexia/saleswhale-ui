module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-named-as-default': 0,
    'linebreak-style': 0,
    'arrow-body-style': 0,
    'no-confusing-arrow': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', 'jsx'] }],
    'import/prefer-default-export': 0,
    'quote-props': 0,
    'eol-last': 0,
    'object-curly-spacing': 0,
    'comma-dangle': 0,
    'react/function-component-definition': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-no-useless-fragment': 0,
    semi: 0
  },
};
