/*
  This file is used for stylistic rules only. It will change the formatting of the files pre-commit, and is used
  so that a developer does not get blocked/receive errors in their IDE that are irrelevant to the functioning of the code.
 */

module.exports = {
  extends: '.eslintrc.js',
  rules: {
    'arrow-spacing': [2, { before: true, after: true }],
    'prefer-template': [2],
    'space-in-parens': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'never'],
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
      },
    ],
    'react/jsx-indent-props': [2, 'first'],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-closing-bracket-location': [2, { selfClosing: 'tag-aligned', nonEmpty: 'after-props' }],
    'react/jsx-pascal-case': [2],
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
  },
};
