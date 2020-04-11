module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    /* Please note, if you would like to add rules around styling - please do so in file .pretter-eslintrc-styles.js
       This is done so that it is does not throw errors/warning in a developer's IDE. It will format code
       during pre-commit stage, using prettier.
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreProperties: true, ignoreParameters: false },
    ],
    '@typescript-eslint/interface-name-prefix': [
      'error',
      { prefixWithI: 'never' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off', //To encourage inference as much as possible
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-require-imports': 2,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
