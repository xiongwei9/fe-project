module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    // "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
  ],
  "rules": {
    "no-console": "off",
    "no-alert": "warn",
    "no-trailing-spaces": "warn",
    "no-debugger": "warn",
    "no-warning-comments": "warn",
    "no-unused-vars": "warn",
    "semi": ["warn", "always"],
    "no-extra-semi": "error",
    // "indent": ["error", 4],
    "no-var": "error",
    "no-const-assign": "error",
    "strict": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "curly": ["error", "multi-line", "consistent"],
    "new-cap": [
      "error",
      {
        "capIsNew": false,
      }
    ],
    "new-parens": "error",
    "no-caller": "error",
    "default-case": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "array-callback-return": "error",
    "no-cond-assign": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-proto": "error",
    "no-sparse-arrays": "error",
    "no-undef": "error",
    "no-unreachable": "error",
    "no-unsafe-negation": "error",
    "no-whitespace-before-property": "error",
    "wrap-iife": ["error", "inside"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
  },
};