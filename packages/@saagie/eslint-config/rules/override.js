module.exports = {
  rules: {
    // Require trailing commas in every multiline structure.
    // https://eslint.org/docs/rules/comma-dangle
    "comma-dangle": ["error", "always-multiline"],

    // Disable the rule to require function expressions to have a name.
    // https://eslint.org/docs/rules/func-names
    "func-names": ["off"],

    // Disable consistent linebreaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    "function-paren-newline": ["off"],

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    "implicit-arrow-linebreak": ["warn", "beside"],

    // Disable forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies" : ["off"],

    // Disable the prefer default export rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    "import/prefer-default-export": ["off"],

    // Enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    "indent": ["warn", 2],

    // Enforce a maximum line length
    // https://eslint.org/docs/rules/max-len
    "max-len": ["warn"],

    // Disallow the use of console
    // https://eslint.org/docs/rules/no-console
    "no-console": ["warn"],

    // Disallow multiple empty lines
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": ["warn"],

    // Disallow trailing spaces.
    // https://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": ["error"],

    // Allow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": ["off"],

    // Disallow Unused Variables
    // https://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": ["warn"],

    // Disallow Early Use
    // https://eslint.org/docs/rules/no-use-before-define
    "no-use-before-define": ["warn"],

    // Disable Forbid Prop Types
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    "react/forbid-prop-types": ["off"],

    // Restrict file extensions that may contain JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],

    // Disable One JSX Element Per Line
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    "react/jsx-one-expression-per-line": ["off"],

    // Disable JSX Props No Spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    "react/jsx-props-no-spreading": ["off"],

    // Enforce stateless React Components to be written as a pure function
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md#enforce-stateless-react-components-to-be-written-as-a-pure-function-reactprefer-stateless-function
    "react/prefer-stateless-function": ["error"],

    // Enforce that a label tag has a text label and an associated control.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    "jsx-a11y/label-has-associated-control": ["error"],
  }
};
