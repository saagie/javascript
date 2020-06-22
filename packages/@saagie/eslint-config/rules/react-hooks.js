module.exports = {
  plugins: [
    "react-hooks"
  ],
  rules: {
    // Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
    // https://reactjs.org/docs/hooks-rules.html
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
