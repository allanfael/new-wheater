module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-named-default': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 0,
    'no-shadow': 0,
  },
};
