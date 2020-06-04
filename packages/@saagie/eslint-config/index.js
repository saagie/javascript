module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/override',
  ].map(require.resolve),
};
