module.exports = {
  extends: ['airbnb', 'standard', 'standard-react', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import', 'flowtype'],
  rules: {
    'no-console': 1,
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'no-throw-literal': 0,
    'react/no-did-mount-set-state': 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/alt-text': 0,
    'react/no-unused-prop-types': 0,
    'import/no-named-as-default': 0,
    'react/no-multi-comp': 0,
    'class-methods-use-this': 0
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
}
