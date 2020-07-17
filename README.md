![Saagie JavaScript Style Guide](./assets/javascript.png)

# Saagie JavaScript Style Guide() {

At Saagie, we love the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
and we follow most of the rules defined by Airbnb.

## Table of Contents

1. [Overrides](#overrides)
1. [React](#react)

## Overrides

<a name="comma-dangle"></a><a name="1.1"></a>
- [1.1](#comma-dangle) **Comma dangle**: trailing commas are required in every
  multiline structure. This is mostly to avoid a git difference and pollute git
  diffs.

```javascript
// 👎 bad, missing comma
var foo = {
    bar: "baz",
    qux: "quux"
};

// 👍 good
var foo = {
    bar: "baz",
    qux: "quux",
};

// 👎 bad, unnecessary commas
var foo = { bar: "baz", qux: "quux", };
var arr = [1,2,];
var arr = [1,
    2,];

// 👍 good
var foo = {bar: "baz", qux: "quux"};
var arr = [1,2];
var arr = [1,
    2];

// 👎 bad, missing commas
var arr = [
    1,
    2
];

foo({
  bar: "baz",
  qux: "quux"
});

// 👍 good
var arr = [
    1,
    2,
];

foo({
  bar: "baz",
  qux: "quux",
});
```


<a name="func-names"></a><a name="1.2"></a>
- [1.2](#func-names) **Function name**: function's name is not mandatory.

```javascript
// 👍 allowed code
Foo.prototype.bar = function() {};

const cat = {
  meow: function() {}
}

(function() {
    // ...
}())

export default function() {}
```

<a name="function-paren-newline"></a><a name="1.3"></a>
- [1.3](#function-paren-newline) **Function paren newline**: Disable consistent
  linebreaks inside function parentheses.

<a name="implicit-arrow-linebreak"></a><a name="1.4"></a>
- [1.4](#implicit-arrow-linebreak) **Implicit arrow linebreak**: Enforce the
  location of arrow function bodies with implicit returns.

```javascript
// 👎 bad
(foo) =>
  bar;

(foo) =>
  (bar);

(foo) =>
  bar =>
    baz;

(foo) =>
(
  bar()
);

// 👍 good
(foo) => bar;

(foo) => (bar);

(foo) => bar => baz;

(foo) => (
  bar()
);
```

<a name="import/no-extraneous-dependencies"></a><a name="1.5"></a>
- [1.5](#import/no-extraneous-dependencies) **No extraneous dependencies**:
  Disable forbid the use of extraneous packages.

<a name="import/prefer-default-export"></a><a name="1.6"></a>
- [1.6](#import/prefer-default-export) **Prefer default export**:
  Disable the prefer default export rule.

<a name="indent"></a><a name="1.7"></a>
- [1.7](#indent) **Indentation**: Will warn if the indentation is not equal to 2

<a name="max-len"></a><a name="1.8"></a>
- [1.8](#max-len) **Max line length**: Enforce a maximum line length

<a name="no-console"></a><a name="1.9"></a>
- [1.9](#no-console) **No console**: Disallow the use of console

```javascript
// 👎 contains console
console.error("foo");
```

<a name="no-multiple-empty-lines"></a><a name="1.10"></a>
- [1.10](#no-multiple-empty-lines) **No multiple empty lines**:
  Disallow multiple empty lines

```javascript
import foo from "bar"
// 👎 contains too much empty lines



foo();
```

<a name="no-trailing-spaces"></a><a name="1.11"></a>
- [1.11](#no-trailing-spaces) **No trailing spaces**: a greatly configured
  `.editorconfig` that remove trailing spaces should take precedence over this
  eslint rule.

<a name="no-underscore-dangle"></a><a name="1.12"></a>
- [1.12](#no-underscore-dangle) **No underscore dangle**:
  This rule is disabled, underscore dangle is allowed.

```javascript
// 👍 allowed
var foo_;
var __proto__ = {};
foo._bar();
```

<a name="no-unused-vars"></a><a name="1.13"></a>
- [1.13](#no-unused-vars) **No unused variables**:
  Unused variables are not allowed and will be declared as warnings.

<a name="no-use-before-define"></a><a name="1.14"></a>
- [1.14](#no-use-before-define) **No variable use before define**:
  Variables should not be used before defined.

[⬆️ Back to top](#table-of-contents)

## React

<a name="react/forbid-prop-types"></a><a name="2.1"></a>
- [2.1](#react/forbid-prop-types) **Forbid PropTypes**:
  Disable this rule so developers can use `any`.

<a name="react/jsx-filename-extension"></a><a name="2.2"></a>
- [2.2](#react/jsx-filename-extension) **JSX filename extensions**:
  Allow `.js` and `.jsx` to be extensions for JSX files.

<a name="react/jsx-one-expression-per-line"></a><a name="2.3"></a>
- [2.3](#react/jsx-one-expression-per-line) **JSX one expression per line**:
  Disable this rule so developers can use multiple JSX expression per line.

<a name="react/jsx-props-no-spreading"></a><a name="2.4"></a>
- [2.4](#react/jsx-props-no-spreading) **JSX props spreading**:
  Allow developers to spread `props`.

```javascript
// 👍 allowed
<App {...props} />
```

<a name="react/prefer-stateless-function"></a><a name="2.5"></a>
- [2.5](#react/prefer-stateless-function) **Prefer stateless function**:
  Enforce stateless React Components to be written as a pure function.

```javascript
// 👎 error
var Hello = createReactClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

// 👍 ok
const Foo = function(props, context) {
  const {
    location
  } = context.router;

  return <div>{props.foo}</div>;
};
```

<a name="jsx-a11y/label-has-associated-control"></a><a name="2.6"></a>
- [2.6](#jsx-a11y/label-has-associated-control) **Label has associated control**:
  Enforce that a label tag has a text label and an associated control.

[⬆️ Back to top](#table-of-contents)

# }
