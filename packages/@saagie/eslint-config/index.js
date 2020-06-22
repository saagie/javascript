module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/override',
    './rules/react-hooks'
  ].map(require.resolve)
};
