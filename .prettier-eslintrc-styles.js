/*
  This file is used for stylistic rules only. It will change the formatting of the files pre-commit, and is used
  so that a developer does not get blocked/receive errors in their IDE that are irrelevant to the functioning of the code.
 */

module.exports = {
  extends: '.eslintrc.js',
  rules: {
    'react/jsx-first-prop-new-line': [1, 'never'],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
      },
    ],
    'react/jsx-indent-props': [1, 'first'],
  },
};
