const RULES = {
  OFF: 'off',
  WARN: 'warning',
  ERROR: 'error',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],

  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'no-console': RULES.ERROR,
    'no-var': RULES.ERROR,
    'object-shorthand': RULES.ERROR,
    'prefer-const': RULES.ERROR,
    'prefer-template': RULES.ERROR,
    'import/first': RULES.ERROR,
    'import/newline-after-import': RULES.ERROR,
    'import/no-duplicates': RULES.ERROR,
  },
}
