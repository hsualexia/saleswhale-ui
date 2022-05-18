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
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/jsx-tag-spacing': 0,
    'react/no-unknown-property': 0,
    'import/no-useless-paths-segments': 0,
    semi: 0,
    quotes: 0
  },
};
