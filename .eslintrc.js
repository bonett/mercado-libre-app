module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    // Indent with 4 spaces
    indent: ['error', 4],

    // Indent JSX with 4 spaces
    'react/jsx-indent': ['error', 4],

    // Indent props with 4 spaces
    'react/jsx-indent-props': ['error', 4],

    // Allow .js files to have jsx code
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // Disable comma dangle rule
    'comma-dangle': ['error', 'never'],

    // Allow both styles for arrow functions: with and without body
    'arrow-body-style': 0,

    // Allow special characters in jsx
    'react/no-unescaped-entities': 0,

    // When there is a single export from a module, allow named export
    'import/prefer-default-export': 0,

    // Allow ++ or -- only for loops
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Allow the use of <React.Fragment>
    'react/jsx-fragments': 0,

    // Allow the use of _ in properties names, since mongodb uses "_id"
    'no-underscore-dangle': 'off',
  },
};
