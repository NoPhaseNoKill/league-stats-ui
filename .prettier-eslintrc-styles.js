/*
 This file is used for stylistic rules only. It will change the formatting of the files pre-commit, and is used
 so that a developer does not get blocked/receive errors in their IDE that are irrelevant to the functioning of the code.
   ****
   PLEASE NOTE
   ****
   The following rules are turned off via eslint-config-plugin due to removing conflicts between prettier and eslint:. They will
   NOT WORK if you add them. Rules based off https://github.com/prettier/eslint-config-prettier/blob/master/react.js
   "react/jsx-child-element-spacing": "off",
   "react/jsx-closing-bracket-location": "off",
   "react/jsx-closing-tag-location": "off",
   "react/jsx-curly-newline": "off",
   "react/jsx-curly-spacing": "off",
   "react/jsx-equals-spacing": "off",
   "react/jsx-first-prop-new-line": "off",
   "react/jsx-indent": "off",
   "react/jsx-indent-props": "off",
   "react/jsx-max-props-per-line": "off",
   "react/jsx-one-expression-per-line": "off",
   "react/jsx-props-no-multi-spaces": "off",
   "react/jsx-tag-spacing": "off",
   "react/jsx-wrap-multilines": "off",
 */

module.exports = {
  extends: '.eslintrc.js',
  rules: {
    'arrow-spacing': [2, { before: true, after: true }],
    'prefer-template': [2],
    'space-in-parens': [2, 'never'],
    'react/jsx-pascal-case': [2],
  },
};
